/**
 * Obsidian-style Graph View for Hugo
 * Uses D3.js v7 force simulation with Canvas renderer.
 */
(function () {
  'use strict';

  // ============================================================
  // Configuration
  // ============================================================
  const FORCE = {
    chargeStrength: -80,
    linkDistance: 50,
    linkIterations: 3,
    collideRadius: 20,
    centerStrength: 0.3,
    alphaDecay: 0.015,
    alphaMin: 0.001,
    velocityDecay: 0.35,
  };

  const RADIUS = {
    tagMin: 7,
    tagMax: 28,
    tagScale: 3.5,
    postMin: 4.5,
    postMax: 18,
    postScale: 2.5,
  };

  const ZOOM = {
    min: 0.15,
    max: 4.0,
    initial: 1.0,
  };

  const LABEL = {
    maxVisible: 80,   // hide labels when zoomed out showing > this many nodes
    fontSize: 11,
    offsetY: 4,
  };

  // ============================================================
  // Theme-aware colors
  // ============================================================
  function getColors() {
    var isDark = document.body.classList.contains('dark-theme');
    return {
      background: isDark ? '#292a2d' : '#ffffff',
      tagFill: isDark ? '#ff9940' : '#d06800',
      tagStroke: isDark ? '#cc7a33' : '#a05200',
      postFill: isDark ? '#5ccfe6' : '#0d7a96',
      postStroke: isDark ? '#49a6b8' : '#0a5a72',
      link: isDark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.08)',
      linkHighlight: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.35)',
      dimmedOpacity: 0.18,
      hoverGlow: isDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.15)',
    };
  }

  // ============================================================
  // State
  // ============================================================
  var canvas, ctx, width, height;
  var simulation, transform;
  var nodeMap = {};        // id -> node
  var adjacency = {};      // node id -> Set of connected node ids
  var hoveredNode = null;
  var colors;

  // Tooltip element
  var tooltip;

  // ============================================================
  // Radius scale
  // ============================================================
  function nodeRadius(d) {
    if (d.type === 'tag') {
      return Math.min(RADIUS.tagMax, Math.max(RADIUS.tagMin,
        Math.sqrt(d.count) * RADIUS.tagScale + RADIUS.tagMin));
    }
    return Math.min(RADIUS.postMax, Math.max(RADIUS.postMin,
      Math.sqrt(d.count) * RADIUS.postScale + RADIUS.postMin));
  }

  // ============================================================
  // Drawing
  // ============================================================
  function draw() {
    if (!ctx || !simulation) return;

    ctx.save();
    ctx.clearRect(0, 0, width, height);

    // Apply zoom/pan transform
    ctx.translate(transform.x, transform.y);
    ctx.scale(transform.k, transform.k);

    drawEdges();
    drawNodes();

    // Draw labels
    drawLabels();

    ctx.restore();
  }

  function drawEdges() {
    var links = simulation.force('link').links();
    var isHovering = hoveredNode !== null;

    ctx.lineWidth = 0.8;

    for (var i = 0; i < links.length; i++) {
      var l = links[i];
      var source = l.source;
      var target = l.target;

      if (isHovering) {
        if (source === hoveredNode || target === hoveredNode) {
          ctx.strokeStyle = colors.linkHighlight;
          ctx.lineWidth = 1.8;
        } else {
          ctx.strokeStyle = colors.link;
          ctx.globalAlpha = colors.dimmedOpacity;
        }
      } else {
        ctx.strokeStyle = colors.link;
      }

      ctx.beginPath();
      ctx.moveTo(source.x, source.y);
      ctx.lineTo(target.x, target.y);
      ctx.stroke();

      if (isHovering) {
        ctx.globalAlpha = 1;
      }
    }
  }

  function drawNodes() {
    var nodes = simulation.nodes();
    var isHovering = hoveredNode !== null;

    for (var i = 0; i < nodes.length; i++) {
      var d = nodes[i];
      var r = nodeRadius(d);

      // Dim non-highlighted nodes when hovering
      if (isHovering && d !== hoveredNode) {
        var connected = adjacency[hoveredNode.id] && adjacency[hoveredNode.id].has(d.id);
        if (!connected) {
          ctx.globalAlpha = colors.dimmedOpacity;
        }
      }

      // Glow on hover
      if (d === hoveredNode) {
        ctx.shadowColor = colors.hoverGlow;
        ctx.shadowBlur = 18;
      }

      // Fill
      ctx.beginPath();
      ctx.arc(d.x, d.y, r, 0, 2 * Math.PI);
      ctx.fillStyle = d.type === 'tag' ? colors.tagFill : colors.postFill;
      ctx.fill();

      // Stroke
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = d.type === 'tag' ? colors.tagStroke : colors.postStroke;
      ctx.stroke();

      // Reset glow
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    }
  }

  function drawLabels() {
    var nodes = simulation.nodes();

    ctx.font = LABEL.fontSize + 'px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    for (var i = 0; i < nodes.length; i++) {
      var d = nodes[i];
      var r = nodeRadius(d);
      var label = d.name;

      // Truncate long names
      if (label.length > 18) {
        label = label.substring(0, 15) + '…';
      }

      // Show labels when zoomed in or on larger nodes
      if (transform.k > 0.5 && (d === hoveredNode || r > 6)) {
        ctx.fillStyle = colors.label;
        ctx.fillText(label, d.x, d.y + r + LABEL.offsetY);
      }
    }
  }

  // ============================================================
  // Interaction
  // ============================================================
  function setupZoom() {
    var d3Zoom = d3.zoom()
      .scaleExtent([ZOOM.min, ZOOM.max])
      .on('zoom', function (event) {
        transform = event.transform;
        draw();
      });

    d3.select(canvas).call(d3Zoom);

    // Set initial transform
    transform = d3.zoomIdentity.translate(width / 2, height / 2).scale(ZOOM.initial);
    d3.select(canvas).call(d3Zoom.transform, transform);
  }

  function findNodeAt(mx, my) {
    // Convert screen coords to simulation coords
    var simX = (mx - transform.x) / transform.k;
    var simY = (my - transform.y) / transform.k;

    var nodes = simulation.nodes();
    var closest = null;
    var closestDist = 20 / transform.k; // hit radius scales with zoom

    for (var i = 0; i < nodes.length; i++) {
      var d = nodes[i];
      var dx = d.x - simX;
      var dy = d.y - simY;
      var dist = Math.sqrt(dx * dx + dy * dy);
      var r = nodeRadius(d);
      if (dist < Math.max(r + 4, closestDist)) {
        if (dist < r + 4) {
          return d; // inside node, exact hit
        }
        if (!closest || dist < closestDist) {
          closest = d;
          closestDist = dist;
        }
      }
    }
    return closest;
  }

  function setupHover() {
    d3.select(canvas).on('mousemove', function (event) {
      var rect = canvas.getBoundingClientRect();
      var mx = event.clientX - rect.left;
      var my = event.clientY - rect.top;

      var node = findNodeAt(mx, my);

      if (node !== hoveredNode) {
        hoveredNode = node;
        updateCursor();
        updateTooltip(event, node);
        draw();
      }
    });

    d3.select(canvas).on('mouseleave', function () {
      hoveredNode = null;
      updateCursor();
      hideTooltip();
      draw();
    });
  }

  function setupClick() {
    d3.select(canvas).on('click', function (event) {
      if (!hoveredNode || !hoveredNode.url) return;
      window.location.href = hoveredNode.url;
    });
  }

  function updateCursor() {
    if (hoveredNode) {
      canvas.style.cursor = 'pointer';
    } else {
      canvas.style.cursor = 'grab';
    }
  }

  // ============================================================
  // Tooltip
  // ============================================================
  function updateTooltip(event, node) {
    if (!tooltip || !node) return;
    var container = tooltip.parentElement;
    var containerRect = container.getBoundingClientRect();
    var label = node.name;
    if (label.length > 30) label = label.substring(0, 28) + '…';

    var typeLabel = node.type === 'tag' ? 'Tag · ' + node.count + ' posts' : 'Post · ' + node.count + ' tags';

    tooltip.innerHTML = '<strong>' + escapeHtml(label) + '</strong><br><small>' + typeLabel + '</small>';
    tooltip.classList.add('visible');

    var tooltipRect = tooltip.getBoundingClientRect();
    var left = event.clientX - containerRect.left + 14;
    var top = event.clientY - containerRect.top - tooltipRect.height - 10;

    // Keep tooltip in bounds
    if (left + tooltipRect.width > containerRect.width) {
      left = event.clientX - containerRect.left - tooltipRect.width - 14;
    }
    if (top < 0) {
      top = event.clientY - containerRect.top + 14;
    }

    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
  }

  function hideTooltip() {
    if (tooltip) {
      tooltip.classList.remove('visible');
    }
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // ============================================================
  // Resize
  // ============================================================
  function resize() {
    var container = canvas.parentElement;
    var rect = container.getBoundingClientRect();
    var dpr = window.devicePixelRatio || 1;

    width = rect.width;
    height = rect.height;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    if (simulation) {
      simulation.force('center', d3.forceCenter(width / 2, height / 2));
      simulation.alpha(0.3).restart();
      draw();
    }
  }

  // ============================================================
  // Build adjacency map for highlighting
  // ============================================================
  function buildAdjacency(links, nodes) {
    var adj = {};
    for (var i = 0; i < nodes.length; i++) {
      adj[nodes[i].id] = new Set();
    }
    for (var i = 0; i < links.length; i++) {
      var s = typeof links[i].source === 'object' ? links[i].source.id : links[i].source;
      var t = typeof links[i].target === 'object' ? links[i].target.id : links[i].target;
      if (adj[s]) adj[s].add(t);
      if (adj[t]) adj[t].add(s);
    }
    return adj;
  }

  // ============================================================
  // Initialize simulation
  // ============================================================
  function initSimulation(data) {
    // Build node map
    nodeMap = {};
    for (var i = 0; i < data.nodes.length; i++) {
      nodeMap[data.nodes[i].id] = data.nodes[i];
    }

    // Build adjacency
    adjacency = buildAdjacency(data.links, data.nodes);

    // Create simulation
    simulation = d3.forceSimulation(data.nodes)
      .force('link', d3.forceLink(data.links)
        .id(function (d) { return d.id; })
        .distance(FORCE.linkDistance)
        .iterations(FORCE.linkIterations)
      )
      .force('charge', d3.forceManyBody()
        .strength(function (d) {
          // Larger nodes repel more
          return FORCE.chargeStrength * (1 + Math.log(d.count + 1) * 0.5);
        })
      )
      .force('center', d3.forceCenter(width / 2, height / 2)
        .strength(FORCE.centerStrength)
      )
      .force('collision', d3.forceCollide()
        .radius(function (d) { return nodeRadius(d) + 3; })
      )
      .alphaDecay(FORCE.alphaDecay)
      .alphaMin(FORCE.alphaMin)
      .velocityDecay(FORCE.velocityDecay)
      .on('tick', draw);

    // Warm up simulation faster
    simulation.alpha(0.8).restart();
  }

  // ============================================================
  // Main init
  // ============================================================
  async function init() {
    colors = getColors();

    canvas = document.getElementById('graph-canvas');
    if (!canvas) {
      console.warn('Graph: canvas #graph-canvas not found');
      return;
    }

    // Create tooltip — use .terms wrapper (no overflow:hidden) to avoid clipping
    var termsWrap = canvas.closest('.terms') || canvas.parentElement;
    tooltip = document.createElement('div');
    tooltip.className = 'graph-tooltip';
    termsWrap.appendChild(tooltip);

    // Load data
    var dataUrl = canvas.getAttribute('data-url') || '/tags/graph-data.json';
    try {
      var response = await fetch(dataUrl);
      if (!response.ok) throw new Error('HTTP ' + response.status);
      var data = await response.json();
    } catch (err) {
      console.error('Graph: failed to load graph data:', err);
      showError('Failed to load graph data.');
      return;
    }

    if (!data.nodes || data.nodes.length === 0) {
      console.warn('Graph: no nodes in data');
      showError('No data to display.');
      return;
    }

    // Update node count display
    var countEl = document.getElementById('graph-node-count');
    if (countEl) {
      var tagCount = data.nodes.filter(function (n) { return n.type === 'tag'; }).length;
      var postCount = data.nodes.filter(function (n) { return n.type === 'post'; }).length;
      countEl.textContent = tagCount + ' tags · ' + postCount + ' posts';
    }

    // Setup canvas
    resize();

    // Init simulation
    initSimulation(data);

    // Setup interactions
    setupZoom();
    setupHover();
    setupClick();

    // Handle resize
    window.addEventListener('resize', function () {
      colors = getColors();
      resize();
    });

    // Watch for theme changes
    var observer = new MutationObserver(function () {
      colors = getColors();
      draw();
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
  }

  function showError(msg) {
    var el = document.getElementById('graph-error');
    if (el) {
      el.textContent = msg;
      el.style.display = 'block';
    }
  }

  // ============================================================
  // Bootstrap: wait for D3, then initialize
  // ============================================================
  function waitForD3(callback, timeout) {
    timeout = timeout || 10000;
    if (window.d3) {
      callback();
      return;
    }
    var start = Date.now();
    var interval = setInterval(function () {
      if (window.d3) {
        clearInterval(interval);
        callback();
      } else if (Date.now() - start > timeout) {
        clearInterval(interval);
        console.error('Graph: D3.js failed to load after ' + timeout + 'ms');
      }
    }, 50);
  }

  waitForD3(init);
})();
