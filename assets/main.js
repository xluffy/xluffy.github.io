/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/menu.js":
/*!***************************!*\
  !*** ./assets/js/menu.js ***!
  \***************************/
/***/ (function() {

eval("{const container = document.querySelector(\".container\");\nconst menu = document.querySelector(\".menu\");\nconst mobileMenuTrigger = document.querySelector(\".menu-trigger\");\nconst desktopMenu = document.querySelector(\".menu__inner--desktop\");\nconst desktopMenuTrigger = document.querySelector(\".menu__sub-inner-more-trigger\");\nconst menuMore = document.querySelector(\".menu__sub-inner-more\");\nconst mobileQuery = getComputedStyle(document.body).getPropertyValue(\"--phoneWidth\");\nconst isMobile = () => window.matchMedia(mobileQuery).matches;\nconst isMobileMenu = () => {\n  mobileMenuTrigger && mobileMenuTrigger.classList.toggle(\"hidden\", !isMobile());\n  menu && menu.classList.toggle(\"hidden\", isMobile());\n  menuMore && menuMore.classList.toggle(\"hidden\", !isMobile());\n};\n\n// Common\n\nmenu && menu.addEventListener(\"click\", e => e.stopPropagation());\nmenuMore && menuMore.addEventListener(\"click\", e => e.stopPropagation());\n\nisMobileMenu();\n\ndocument.body.addEventListener(\"click\", () => {\n  if (!isMobile() && menuMore && !menuMore.classList.contains(\"hidden\")) {\n    menuMore.classList.add(\"hidden\");\n  } else if (isMobile() && !menu.classList.contains(\"hidden\")) {\n    menu.classList.add(\"hidden\");\n  }\n});\n\nwindow.addEventListener(\"resize\", isMobileMenu);\n\n// Mobile menu\n\nmobileMenuTrigger &&\n  mobileMenuTrigger.addEventListener(\"click\", e => {\n    e.stopPropagation();\n    menu && menu.classList.toggle(\"hidden\");\n  });\n\n// Desktop menu\n\ndesktopMenuTrigger &&\n  desktopMenuTrigger.addEventListener(\"click\", e => {\n    e.stopPropagation();\n    menuMore && menuMore.classList.toggle(\"hidden\");\n\n    if (\n      menuMore &&\n      menuMore.getBoundingClientRect().right > container.getBoundingClientRect().right\n    ) {\n      menuMore.style.left = \"auto\";\n      menuMore.style.right = 0;\n    }\n  });\n\n\n//# sourceURL=webpack://hello-friend/./assets/js/menu.js?\n}");

/***/ }),

/***/ "./assets/js/theme.js":
/*!****************************!*\
  !*** ./assets/js/theme.js ***!
  \****************************/
/***/ (function() {

eval("{// Toggle theme\n\nconst getTheme = window.localStorage && window.localStorage.getItem(\"theme\");\nconst themeToggle = document.querySelector(\".theme-toggle\");\nconst isDark = getTheme === \"dark\";\n\nif (getTheme !== null) {\n  document.body.classList.toggle(\"dark-theme\", isDark);\n}\n\nthemeToggle.addEventListener(\"click\", () => {\n  document.body.classList.toggle(\"dark-theme\");\n  window.localStorage &&\n    window.localStorage.setItem(\n      \"theme\",\n      document.body.classList.contains(\"dark-theme\") ? \"dark\" : \"light\",\n    );\n});\n\n\n//# sourceURL=webpack://hello-friend/./assets/js/theme.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./assets/js/menu.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/js/theme.js"]();
/******/ 	
/******/ })()
;