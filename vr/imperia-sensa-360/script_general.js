(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"scripts":{"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"initQuiz":TDV.Tour.Script.initQuiz,"setLocale":TDV.Tour.Script.setLocale,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"clone":TDV.Tour.Script.clone,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setValue":TDV.Tour.Script.setValue,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"registerKey":TDV.Tour.Script.registerKey,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"isPanorama":TDV.Tour.Script.isPanorama,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPixels":TDV.Tour.Script.getPixels,"quizShowScore":TDV.Tour.Script.quizShowScore,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"quizStart":TDV.Tour.Script.quizStart,"getOverlays":TDV.Tour.Script.getOverlays,"startMeasurement":TDV.Tour.Script.startMeasurement,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"unregisterKey":TDV.Tour.Script.unregisterKey,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"openLink":TDV.Tour.Script.openLink,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getKey":TDV.Tour.Script.getKey,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"unloadViewer":TDV.Tour.Script.unloadViewer,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"mixObject":TDV.Tour.Script.mixObject,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"init":TDV.Tour.Script.init,"existsKey":TDV.Tour.Script.existsKey,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"quizFinish":TDV.Tour.Script.quizFinish,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"downloadFile":TDV.Tour.Script.downloadFile,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"enableVR":TDV.Tour.Script.enableVR,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getComponentByName":TDV.Tour.Script.getComponentByName,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"textToSpeech":TDV.Tour.Script.textToSpeech,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"showPopupImage":TDV.Tour.Script.showPopupImage,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMediaByName":TDV.Tour.Script.getMediaByName,"createTween":TDV.Tour.Script.createTween,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"historyGoForward":TDV.Tour.Script.historyGoForward,"disableVR":TDV.Tour.Script.disableVR,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"resumePlayers":TDV.Tour.Script.resumePlayers,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"playAudioList":TDV.Tour.Script.playAudioList,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"initAnalytics":TDV.Tour.Script.initAnalytics,"toggleVR":TDV.Tour.Script.toggleVR,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"shareSocial":TDV.Tour.Script.shareSocial,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"executeJS":TDV.Tour.Script.executeJS,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"translate":TDV.Tour.Script.translate,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"cloneBindings":TDV.Tour.Script.cloneBindings,"getMainViewer":TDV.Tour.Script.getMainViewer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setMapLocation":TDV.Tour.Script.setMapLocation,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"showWindow":TDV.Tour.Script.showWindow,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"showWindowBase":TDV.Tour.Script.showWindowBase,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags},"children":["this.MainViewer","this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174","this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E"],"backgroundColorRatios":[0],"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_23DD1FA8_304A_1DF6_41BA_F11C09481E71_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }","data":{"textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"rate":1,"speechOnTooltip":false,"volume":1,"speechOnInfoWindow":false},"defaultLocale":"en","name":"Player468","locales":{"en":"locale/en.txt"},"initialScale":0.5,"history":{},"displayTooltipInTouchScreens":true},"backgroundColor":["#000000"],"id":"rootPlayer","hash": "182e7eaf68691ba911330742cbe8b37651ebb40bda28468d505a964550ffb10e", "definitions": [{"itemBorderSize":0,"itemThumbnailShadowSpread":1,"itemBackgroundColor":["#FFFFFF"],"data":{"name":"ThumbnailList1355"},"itemPaddingBottom":3,"itemThumbnailShadowOpacity":0.4,"toolTipTextShadowColor":"#000000","itemThumbnailShadowColor":"#000000","toolTipPaddingBottom":4,"scrollBarMargin":2,"toolTipShadowColor":"#333333","itemThumbnailOpacity":1,"toolTipFontFamily":"Arial","right":"5.07%","toolTipPaddingLeft":6,"itemBackgroundOpacity":1,"selectedItemLabelFontWeight":"bold","itemThumbnailScaleMode":"fit_outside","toolTipPaddingTop":4,"gap":15,"itemThumbnailBorderRadius":7,"propagateClick":false,"itemThumbnailShadow":true,"verticalAlign":"middle","itemLabelFontFamily":"Arial","itemThumbnailWidth":120,"itemPaddingTop":3,"backgroundOpacity":0,"itemPaddingLeft":3,"itemThumbnailShadowBlurRadius":15,"scrollBarColor":"#FFFFFF","toolTipPaddingRight":6,"itemLabelFontColor":"#333333","itemLabelTextDecoration":"none","id":"ThumbnailList_23DD1FA8_304A_1DF6_41BA_F11C09481E71","itemBorderRadius":8,"toolTipBorderColor":"#767676","layout":"vertical","itemLabelFontWeight":"bold","rollOverItemLabelFontWeight":"bold","itemBackgroundColorRatios":[0.6784313725490196],"toolTipFontColor":"#606060","itemBackgroundColorDirection":"vertical","rollOverItemBackgroundOpacity":1,"class":"ThumbnailList","minHeight":1,"itemPaddingRight":3,"minWidth":1,"itemLabelGap":8,"itemLabelFontStyle":"normal","bottom":"7.06%","itemLabelFontSize":"14px","tabIndex":0,"width":143,"height":"83.788%","toolTipBackgroundColor":"#F6F6F6","itemThumbnailHeight":90,"itemThumbnailShadowVerticalLength":1,"playList":"this.ThumbnailList_23DD1FA8_304A_1DF6_41BA_F11C09481E71_playlist","borderRadius":5},{"progressBackgroundColor":["#FFFFFF"],"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTextShadowHorizontalLength":1,"progressBottom":0,"subtitlesBottom":50,"toolTipOpacity":0.5,"progressHeight":10,"subtitlesBorderColor":"#FFFFFF","progressBarBorderRadius":0,"left":0,"progressBorderSize":0,"progressBarBorderSize":0,"playbackBarBottom":5,"data":{"name":"Main Viewer"},"playbackBarBackgroundColor":["#FFFFFF"],"toolTipPaddingBottom":7,"toolTipShadowColor":"#333333","right":0,"playbackBarHeight":10,"playbackBarHeadWidth":6,"toolTipFontFamily":"Georgia","toolTipTextShadowColor":"#000000","toolTipPaddingLeft":10,"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"progressBorderRadius":0,"playbackBarProgressBorderRadius":0,"toolTipPaddingTop":7,"subtitlesTextShadowVerticalLength":1,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipPaddingRight":10,"firstTransitionDuration":0,"subtitlesFontFamily":"Arial","vrPointerSelectionColor":"#FF6600","progressLeft":0,"playbackBarProgressBackgroundColorRatios":[0],"vrThumbstickRotationStep":20,"playbackBarHeadShadowOpacity":0.7,"toolTipShadowOpacity":0,"vrPointerSelectionTime":2000,"playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","toolTipFontSize":13,"playbackBarProgressBorderColor":"#000000","playbackBarHeadBorderRadius":0,"subtitlesGap":0,"toolTipBorderColor":"#767676","id":"MainViewer","playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"subtitlesBackgroundColor":"#000000","progressBackgroundColorRatios":[0.00784313725490196],"playbackBarHeadShadowHorizontalLength":0,"subtitlesTextShadowOpacity":1,"progressRight":0,"playbackBarHeadShadowVerticalLength":0,"toolTipFontColor":"#FFFFFF","subtitlesTop":0,"class":"ViewerArea","minHeight":50,"subtitlesFontColor":"#FFFFFF","progressBarBorderColor":"#0066FF","minWidth":100,"playbackBarBackgroundOpacity":1,"subtitlesTextShadowColor":"#000000","progressBarBackgroundColorRatios":[0],"surfaceReticleColor":"#FFFFFF","playbackBarLeft":0,"subtitlesFontSize":"3vmin","playbackBarHeadShadowBlurRadius":3,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","toolTipBackgroundColor":"#000000","progressBorderColor":"#FFFFFF","playbackBarHeadShadow":true,"height":"100%","subtitlesBackgroundOpacity":0.2,"progressBarBackgroundColor":["#3399FF"],"vrPointerColor":"#FFFFFF","playbackBarHeadBorderSize":0},{"borderRadius":8,"overflow":"scroll","backgroundColorRatios":[0],"left":"0%","backgroundColor":["#000000"],"layout":"absolute","data":{"name":"Container black"},"id":"Container_7FF195EF_706F_7FC6_41D7_A104CA87824D","scrollBarMargin":0,"class":"Container","minHeight":1,"minWidth":1,"gap":10,"top":"0%","width":22,"height":"100%","backgroundOpacity":0.4,"scrollBarColor":"#000000"},{"horizontalAlign":"center","id":"IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0","data":{"name":"IconButton FULLSCREEN"},"maxHeight":58,"maxWidth":58,"mode":"toggle","transparencyActive":true,"class":"IconButton","minHeight":1,"minWidth":1,"tabIndex":0,"verticalAlign":"middle","iconURL":"skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png","height":58,"backgroundOpacity":0,"width":58,"pressedIconURL":"skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png"},{"overflow":"scroll","id":"Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D","left":"0%","layout":"absolute","data":{"name":"- COLLAPSE"},"scrollBarMargin":2,"class":"Container","minHeight":1,"minWidth":1,"gap":10,"top":"0%","width":66,"height":"100%","backgroundOpacity":0,"visible":false,"scrollBarColor":"#000000","children":["this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412","this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D"]},{"hfovMax":130,"class":"Panorama","data":{"label":"View 2"},"id":"panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B","hfov":360,"vfov":180,"thumbnailUrl":"media/panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B_t.webp","label":trans('panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B.label'),"frames":[{"thumbnailUrl":"media/panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B_t.webp","cube":{"levels":[{"rowCount":11,"height":5632,"url":"media/panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":66,"tags":"ondemand","width":33792},{"rowCount":6,"height":3072,"url":"media/panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":36,"tags":"ondemand","width":18432},{"rowCount":3,"height":1536,"url":"media/panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":18,"tags":"ondemand","width":9216},{"rowCount":2,"height":1024,"url":"media/panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand","width":6144},{"rowCount":1,"height":512,"url":"media/panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B_0/{face}/4/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":6,"tags":["ondemand","preload"],"width":3072}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}]},{"click":"this.MainViewerPanoramaPlayer.set('hotspotsEnabled', !this.MainViewerPanoramaPlayer.get('hotspotsEnabled'))","horizontalAlign":"center","id":"IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96","data":{"name":"IconButton HS"},"maxHeight":58,"maxWidth":58,"mode":"toggle","transparencyActive":true,"class":"IconButton","minHeight":1,"minWidth":1,"tabIndex":0,"verticalAlign":"middle","iconURL":"skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png","height":58,"backgroundOpacity":0,"width":58,"pressedIconURL":"skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png"},{"hfovMax":130,"class":"Panorama","data":{"label":"View 1"},"id":"panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C","hfov":360,"vfov":180,"thumbnailUrl":"media/panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C_t.webp","label":trans('panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C.label'),"frames":[{"thumbnailUrl":"media/panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C_t.webp","cube":{"levels":[{"rowCount":11,"height":5632,"url":"media/panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":66,"tags":"ondemand","width":33792},{"rowCount":6,"height":3072,"url":"media/panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":36,"tags":"ondemand","width":18432},{"rowCount":3,"height":1536,"url":"media/panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":18,"tags":"ondemand","width":9216},{"rowCount":2,"height":1024,"url":"media/panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand","width":6144},{"rowCount":1,"height":512,"url":"media/panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C_0/{face}/4/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":6,"tags":["ondemand","preload"],"width":3072}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}]},{"manualZoomSpeed":3,"initialSequence":"this.sequence_5683C06E_5AB1_A34D_41D1_71F87D0B7655","class":"PanoramaCamera","id":"panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B_camera","enterPointingToHorizon":true,"initialPosition":{"pitch":-45.68,"class":"PanoramaCameraPosition","yaw":-14.68}},{"manualZoomSpeed":3,"initialSequence":"this.sequence_5683A06E_5AB1_A34D_4194_B1FA33CEAFE0","class":"PanoramaCamera","id":"panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C_camera","enterPointingToHorizon":true,"initialPosition":{"pitch":-46.48,"class":"PanoramaCameraPosition","yaw":-0.82}},{"horizontalAlign":"center","id":"Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A","layout":"horizontal","data":{"name":"button menu sup"},"scrollBarMargin":2,"right":"0%","class":"Container","minHeight":1,"minWidth":1,"gap":10,"top":"0%","verticalAlign":"middle","height":110,"backgroundOpacity":0,"width":110,"scrollBarColor":"#000000","children":["this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"]},{"horizontalAlign":"center","overflow":"scroll","id":"Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE","layout":"vertical","data":{"name":"-button set"},"scrollBarMargin":2,"right":"0%","class":"Container","minHeight":1,"minWidth":1,"gap":3,"bottom":"0%","height":"85.959%","backgroundOpacity":0,"visible":false,"scrollBarColor":"#000000","children":["this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D","this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96","this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"],"width":"91.304%"},{"click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D); var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, 'showEffect', false)}.bind(this); visibleFunc(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36)","horizontalAlign":"center","id":"IconButton_7FF185EF_706F_7FC6_41A5_21B418265412","data":{"name":"IconButton arrow"},"maxHeight":80,"maxWidth":80,"transparencyActive":true,"class":"IconButton","minHeight":1,"minWidth":1,"tabIndex":0,"verticalAlign":"middle","top":"0%","bottom":"0%","width":44,"iconURL":"skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png","backgroundOpacity":0,"rollOverIconURL":"skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png"},{"viewerArea":"this.MainViewer","class":"PanoramaPlayer","keepModel3DLoadedWithoutLocation":true,"arrowKeysAction":"translate","mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"aaEnabled":true},{"manualZoomSpeed":3,"initialSequence":"this.sequence_5683006E_5AB1_A34D_41C2_A5CDEEC95059","class":"PanoramaCamera","id":"panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28_camera","enterPointingToHorizon":true,"initialPosition":{"pitch":-40.41,"class":"PanoramaCameraPosition","yaw":-12.17}},{"hfovMax":130,"class":"Panorama","data":{"label":"View 5"},"id":"panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28","hfov":360,"vfov":180,"thumbnailUrl":"media/panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28_t.webp","label":trans('panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28.label'),"frames":[{"thumbnailUrl":"media/panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28_t.webp","cube":{"levels":[{"rowCount":11,"height":5632,"url":"media/panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":66,"tags":"ondemand","width":33792},{"rowCount":6,"height":3072,"url":"media/panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":36,"tags":"ondemand","width":18432},{"rowCount":3,"height":1536,"url":"media/panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":18,"tags":"ondemand","width":9216},{"rowCount":2,"height":1024,"url":"media/panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand","width":6144},{"rowCount":1,"height":512,"url":"media/panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28_0/{face}/4/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":6,"tags":["ondemand","preload"],"width":3072}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}]},{"id":"mainPlayList","items":[{"camera":"this.panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C_camera","media":"this.panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B_camera","media":"this.panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"camera":"this.panorama_5785AB71_5AB0_E556_41B2_2652CBA43332_camera","media":"this.panorama_5785AB71_5AB0_E556_41B2_2652CBA43332","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"camera":"this.panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96_camera","media":"this.panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)"},{"camera":"this.panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28_camera","media":"this.panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 0)"}],"class":"PlayList"},{"manualZoomSpeed":3,"initialSequence":"this.sequence_5683E06E_5AB1_A34D_41D1_17E94F63FB81","class":"PanoramaCamera","id":"panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96_camera","enterPointingToHorizon":true,"initialPosition":{"pitch":-89.99,"class":"PanoramaCameraPosition","yaw":-2.18}},{"overflow":"scroll","id":"Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E","layout":"absolute","data":{"name":"-- SETTINGS"},"scrollBarMargin":2,"right":"0%","class":"Container","minHeight":1,"minWidth":1,"gap":10,"top":"0%","height":641,"backgroundOpacity":0,"width":115.05,"scrollBarColor":"#000000","children":["this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A","this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"]},{"borderRadius":10,"overflow":"scroll","backgroundColorRatios":[0],"id":"Container_7DB20382_7065_343F_4186_6E0B0B3AFF36","backgroundColor":["#000000"],"layout":"absolute","data":{"name":"- EXPANDED"},"right":"0%","scrollBarMargin":0,"borderSize":2,"class":"Container","minHeight":1,"minWidth":1,"top":"0%","gap":10,"width":300,"height":"100%","backgroundOpacity":0.52,"children":["this.Image_26321964_30BA_257E_41C4_D05E72E738FB","this.ThumbnailList_23DD1FA8_304A_1DF6_41BA_F11C09481E71"],"scrollBarColor":"#000000","borderColor":"#000033"},{"manualZoomSpeed":3,"initialSequence":"this.sequence_569F306D_5AB1_A34F_41D5_D311AFFD8843","class":"PanoramaCamera","id":"panorama_5785AB71_5AB0_E556_41B2_2652CBA43332_camera","enterPointingToHorizon":true,"initialPosition":{"pitch":-49,"class":"PanoramaCameraPosition","yaw":-15.72}},{"hfovMax":130,"class":"Panorama","data":{"label":"View 4"},"id":"panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96","hfov":360,"vfov":180,"thumbnailUrl":"media/panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96_t.webp","label":trans('panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96.label'),"frames":[{"thumbnailUrl":"media/panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96_t.webp","cube":{"levels":[{"rowCount":11,"height":5632,"url":"media/panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":66,"tags":"ondemand","width":33792},{"rowCount":6,"height":3072,"url":"media/panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":36,"tags":"ondemand","width":18432},{"rowCount":3,"height":1536,"url":"media/panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":18,"tags":"ondemand","width":9216},{"rowCount":2,"height":1024,"url":"media/panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand","width":6144},{"rowCount":1,"height":512,"url":"media/panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96_0/{face}/4/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":6,"tags":["ondemand","preload"],"width":3072}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}]},{"overflow":"scroll","id":"Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174","left":"0%","layout":"absolute","data":{"name":"--- LEFT PANEL"},"scrollBarMargin":2,"class":"Container","minHeight":1,"minWidth":1,"gap":10,"top":"20.3%","propagateClick":false,"width":173,"height":"58.214%","backgroundOpacity":0,"scrollBarColor":"#000000","children":["this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D","this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"]},{"click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36); var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, 'showEffect', false)}.bind(this); visibleFunc(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D)","horizontalAlign":"center","id":"Image_26321964_30BA_257E_41C4_D05E72E738FB","data":{"name":"Image"},"url":trans('Image_26321964_30BA_257E_41C4_D05E72E738FB.url'),"right":"2.71%","class":"Image","minHeight":1,"minWidth":1,"verticalAlign":"middle","top":"2.08%","propagateClick":false,"height":"3.598%","backgroundOpacity":0,"width":"12.336%","scaleMode":"fit_inside"},{"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, 'hideEffect', false)}.bind(this); if(this.isComponentVisible(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE)){ invisibleFunc(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE) } else { visibleFunc(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE) }","horizontalAlign":"center","id":"IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329","data":{"name":"image button menu"},"maxHeight":60,"maxWidth":60,"mode":"toggle","transparencyActive":true,"class":"IconButton","minHeight":1,"minWidth":1,"tabIndex":0,"verticalAlign":"middle","iconURL":"skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png","height":60,"backgroundOpacity":0,"width":60,"pressedIconURL":"skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png"},{"horizontalAlign":"center","id":"IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D","data":{"name":"IconButton MUTE"},"maxHeight":58,"maxWidth":58,"mode":"toggle","transparencyActive":true,"class":"IconButton","minHeight":1,"minWidth":1,"tabIndex":0,"verticalAlign":"middle","iconURL":"skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png","height":58,"backgroundOpacity":0,"width":58,"pressedIconURL":"skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png"},{"hfovMax":130,"class":"Panorama","data":{"label":"View 3"},"id":"panorama_5785AB71_5AB0_E556_41B2_2652CBA43332","hfov":360,"vfov":180,"thumbnailUrl":"media/panorama_5785AB71_5AB0_E556_41B2_2652CBA43332_t.webp","label":trans('panorama_5785AB71_5AB0_E556_41B2_2652CBA43332.label'),"frames":[{"thumbnailUrl":"media/panorama_5785AB71_5AB0_E556_41B2_2652CBA43332_t.webp","cube":{"levels":[{"rowCount":11,"height":5632,"url":"media/panorama_5785AB71_5AB0_E556_41B2_2652CBA43332_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":66,"tags":"ondemand","width":33792},{"rowCount":6,"height":3072,"url":"media/panorama_5785AB71_5AB0_E556_41B2_2652CBA43332_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":36,"tags":"ondemand","width":18432},{"rowCount":3,"height":1536,"url":"media/panorama_5785AB71_5AB0_E556_41B2_2652CBA43332_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":18,"tags":"ondemand","width":9216},{"rowCount":2,"height":1024,"url":"media/panorama_5785AB71_5AB0_E556_41B2_2652CBA43332_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand","width":6144},{"rowCount":1,"height":512,"url":"media/panorama_5785AB71_5AB0_E556_41B2_2652CBA43332_0/{face}/4/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":6,"tags":["ondemand","preload"],"width":3072}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}]},{"id":"ThumbnailList_23DD1FA8_304A_1DF6_41BA_F11C09481E71_playlist","items":[{"camera":"this.panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C_camera","media":"this.panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B_camera","media":"this.panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_5785AB71_5AB0_E556_41B2_2652CBA43332_camera","media":"this.panorama_5785AB71_5AB0_E556_41B2_2652CBA43332","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96_camera","media":"this.panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28_camera","media":"this.panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer"}],"class":"PlayList"},{"class":"PanoramaCameraSequence","id":"sequence_5683C06E_5AB1_A34D_41D1_71F87D0B7655","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"class":"PanoramaCameraSequence","id":"sequence_5683A06E_5AB1_A34D_4194_B1FA33CEAFE0","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"class":"PanoramaCameraSequence","id":"sequence_5683006E_5AB1_A34D_41C2_A5CDEEC95059","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"class":"PanoramaCameraSequence","id":"sequence_5683E06E_5AB1_A34D_41D1_17E94F63FB81","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"class":"PanoramaCameraSequence","id":"sequence_569F306D_5AB1_A34F_41D5_D311AFFD8843","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]}],"scrollBarMargin":2,"layout":"absolute","buttonToggleFullscreen":["this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"],"class":"Player","minHeight":20,"buttonToggleMute":["this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D"],"minWidth":20,"gap":10,"xrPanelsEnabled":true,"height":"100%","vrPolyfillScale":0.5,"width":"100%","watermark":false,"scrollBarColor":"#000000","defaultMenu":["fullscreen","mute","rotation"]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.0.3, Mon Jul 13 2026