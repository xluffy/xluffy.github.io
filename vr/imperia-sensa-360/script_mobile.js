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
var script = {"scripts":{"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"initQuiz":TDV.Tour.Script.initQuiz,"setLocale":TDV.Tour.Script.setLocale,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"clone":TDV.Tour.Script.clone,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setValue":TDV.Tour.Script.setValue,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"registerKey":TDV.Tour.Script.registerKey,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"isPanorama":TDV.Tour.Script.isPanorama,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPixels":TDV.Tour.Script.getPixels,"quizShowScore":TDV.Tour.Script.quizShowScore,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"quizStart":TDV.Tour.Script.quizStart,"getOverlays":TDV.Tour.Script.getOverlays,"startMeasurement":TDV.Tour.Script.startMeasurement,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"unregisterKey":TDV.Tour.Script.unregisterKey,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"openLink":TDV.Tour.Script.openLink,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getKey":TDV.Tour.Script.getKey,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"unloadViewer":TDV.Tour.Script.unloadViewer,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"mixObject":TDV.Tour.Script.mixObject,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"init":TDV.Tour.Script.init,"existsKey":TDV.Tour.Script.existsKey,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"quizFinish":TDV.Tour.Script.quizFinish,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"downloadFile":TDV.Tour.Script.downloadFile,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"enableVR":TDV.Tour.Script.enableVR,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getComponentByName":TDV.Tour.Script.getComponentByName,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"textToSpeech":TDV.Tour.Script.textToSpeech,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"showPopupImage":TDV.Tour.Script.showPopupImage,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMediaByName":TDV.Tour.Script.getMediaByName,"createTween":TDV.Tour.Script.createTween,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"historyGoForward":TDV.Tour.Script.historyGoForward,"disableVR":TDV.Tour.Script.disableVR,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"resumePlayers":TDV.Tour.Script.resumePlayers,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"playAudioList":TDV.Tour.Script.playAudioList,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"initAnalytics":TDV.Tour.Script.initAnalytics,"toggleVR":TDV.Tour.Script.toggleVR,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"shareSocial":TDV.Tour.Script.shareSocial,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"executeJS":TDV.Tour.Script.executeJS,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"translate":TDV.Tour.Script.translate,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"cloneBindings":TDV.Tour.Script.cloneBindings,"getMainViewer":TDV.Tour.Script.getMainViewer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setMapLocation":TDV.Tour.Script.setMapLocation,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"showWindow":TDV.Tour.Script.showWindow,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"showWindowBase":TDV.Tour.Script.showWindowBase,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags},"children":["this.MainViewer_mobile","this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174_mobile"],"backgroundColorRatios":[0],"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_26BB082D_31BA_E2CE_419A_F0DD13EB9989_playlist])","data":{"textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"rate":1,"speechOnTooltip":false,"volume":1,"speechOnInfoWindow":false},"defaultLocale":"en","name":"Player468","locales":{"en":"locale/en.txt"},"initialScale":0.5,"history":{},"displayTooltipInTouchScreens":true},"backgroundColor":["#000000"],"id":"rootPlayer","hash": "78615fa3d1501173f58fb4f8373e65c5c1f1f5c72984e8540a60363dfdbfad9c", "definitions": [{"scrollBarWidth":5,"overflow":"scroll","id":"Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D_mobile","left":"0%","layout":"absolute","data":{"name":"- COLLAPSE"},"scrollBarMargin":1,"class":"Container","minHeight":1,"minWidth":1,"gap":5,"top":"0%","width":60,"height":"100%","backgroundOpacity":0,"visible":false,"scrollBarColor":"#000000","children":["this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D_mobile","this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_mobile"]},{"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, 'showEffect', false)}.bind(this); visibleFunc(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D_mobile); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36_mobile)","horizontalAlign":"center","id":"Image_27F7E78F_304A_2DCA_41BE_A94E6272AC10","data":{"name":"Image"},"url":trans('Image_27F7E78F_304A_2DCA_41BE_A94E6272AC10.url'),"right":"3.07%","class":"Image","minHeight":1,"minWidth":1,"verticalAlign":"middle","top":"0.08%","propagateClick":false,"height":"5.338%","backgroundOpacity":0,"width":"16.506%","scaleMode":"fit_inside"},{"id":"ThumbnailList_26BB082D_31BA_E2CE_419A_F0DD13EB9989_playlist","items":[{"camera":"this.panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C_camera","media":"this.panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C","class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer"},{"camera":"this.panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B_camera","media":"this.panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B","class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer"},{"camera":"this.panorama_5785AB71_5AB0_E556_41B2_2652CBA43332_camera","media":"this.panorama_5785AB71_5AB0_E556_41B2_2652CBA43332","class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer"},{"camera":"this.panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96_camera","media":"this.panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96","class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer"},{"camera":"this.panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28_camera","media":"this.panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28","class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer"}],"class":"PlayList"},{"hfovMax":130,"class":"Panorama","data":{"label":"View 5"},"id":"panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28","hfov":360,"vfov":180,"thumbnailUrl":"media/panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28_t.webp","label":trans('panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28.label'),"frames":[{"thumbnailUrl":"media/panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28_t.webp","cube":{"levels":[{"rowCount":11,"height":5632,"url":"media/panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":66,"tags":"ondemand","width":33792},{"rowCount":6,"height":3072,"url":"media/panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":36,"tags":"ondemand","width":18432},{"rowCount":3,"height":1536,"url":"media/panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":18,"tags":"ondemand","width":9216},{"rowCount":2,"height":1024,"url":"media/panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand","width":6144},{"rowCount":1,"height":512,"url":"media/panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28_0/{face}/4/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":6,"tags":["ondemand","preload"],"width":3072}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}]},{"id":"mainPlayList","items":[{"camera":"this.panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C_camera","media":"this.panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C","class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B_camera","media":"this.panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B","class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"camera":"this.panorama_5785AB71_5AB0_E556_41B2_2652CBA43332_camera","media":"this.panorama_5785AB71_5AB0_E556_41B2_2652CBA43332","class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"camera":"this.panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96_camera","media":"this.panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96","class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)"},{"camera":"this.panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28_camera","media":"this.panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","player":"this.MainViewer_mobilePanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 0)"}],"class":"PlayList"},{"manualZoomSpeed":3,"initialSequence":"this.sequence_5683006E_5AB1_A34D_41C2_A5CDEEC95059","class":"PanoramaCamera","id":"panorama_56A74300_5AB1_66B5_4194_2FE32D4FFD28_camera","enterPointingToHorizon":true,"initialPosition":{"pitch":-40.41,"class":"PanoramaCameraPosition","yaw":-12.17}},{"click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D_mobile); var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, 'showEffect', false)}.bind(this); visibleFunc(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36_mobile)","horizontalAlign":"center","id":"IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_mobile","left":0.9,"data":{"name":"IconButton arrow"},"maxHeight":40,"maxWidth":40,"transparencyActive":true,"class":"IconButton","minHeight":1,"minWidth":1,"tabIndex":0,"verticalAlign":"middle","bottom":11.3,"width":33.85,"iconURL":"skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png","height":"4.239%","backgroundOpacity":0,"rollOverIconURL":"skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png"},{"manualZoomSpeed":3,"initialSequence":"this.sequence_5683E06E_5AB1_A34D_41D1_17E94F63FB81","class":"PanoramaCamera","id":"panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96_camera","enterPointingToHorizon":true,"initialPosition":{"pitch":-89.99,"class":"PanoramaCameraPosition","yaw":-2.18}},{"borderRadius":10,"scrollBarWidth":5,"overflow":"scroll","backgroundColorRatios":[0],"left":"0%","backgroundColor":["#000000"],"layout":"absolute","data":{"name":"- EXPANDED"},"id":"Container_7DB20382_7065_343F_4186_6E0B0B3AFF36_mobile","scrollBarMargin":0,"class":"Container","minHeight":1,"minWidth":1,"gap":5,"top":"0%","height":"100%","backgroundOpacity":0.7,"width":"97.778%","children":["this.Image_27F7E78F_304A_2DCA_41BE_A94E6272AC10","this.ThumbnailList_26BB082D_31BA_E2CE_419A_F0DD13EB9989"],"scrollBarColor":"#000000"},{"progressBackgroundColor":["#FFFFFF"],"vrPointerColor":"#FFFFFF","surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipBorderRadius":1,"subtitlesTextShadowHorizontalLength":1,"progressBottom":0,"subtitlesBottom":50,"progressBorderSize":0,"progressHeight":10,"subtitlesBorderColor":"#FFFFFF","progressBarBorderRadius":0,"left":0,"toolTipOpacity":0.5,"progressBarBorderSize":0,"playbackBarBottom":5,"data":{"name":"Main Viewer"},"playbackBarBackgroundColor":["#FFFFFF"],"toolTipPaddingBottom":3,"toolTipShadowColor":"#333333","toolTipTextShadowColor":"#000000","playbackBarHeight":10,"playbackBarHeadWidth":6,"toolTipFontFamily":"Georgia","toolTipPaddingLeft":5,"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"progressBorderRadius":0,"playbackBarProgressBorderRadius":0,"toolTipPaddingTop":3,"subtitlesTextShadowVerticalLength":1,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipPaddingRight":5,"firstTransitionDuration":0,"subtitlesFontFamily":"Arial","vrPointerSelectionColor":"#FF6600","progressLeft":0,"playbackBarProgressBackgroundColorRatios":[0],"vrThumbstickRotationStep":20,"playbackBarHeadShadowOpacity":0.7,"toolTipShadowOpacity":0,"vrPointerSelectionTime":2000,"playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","toolTipFontSize":6.5,"playbackBarProgressBorderColor":"#000000","playbackBarHeadBorderRadius":0,"subtitlesGap":0,"toolTipBorderColor":"#767676","id":"MainViewer_mobile","playbackBarHeadBorderColor":"#000000","toolTipShadowBlurRadius":1,"playbackBarBorderSize":0,"subtitlesBackgroundColor":"#000000","progressBackgroundColorRatios":[0.00784313725490196],"playbackBarHeadShadowHorizontalLength":0,"toolTipTextShadowBlurRadius":1,"subtitlesTextShadowOpacity":1,"progressRight":0,"playbackBarHeadShadowVerticalLength":0,"toolTipFontColor":"#FFFFFF","subtitlesTop":0,"class":"ViewerArea","minHeight":25,"subtitlesFontColor":"#FFFFFF","progressBarBorderColor":"#0066FF","minWidth":50,"playbackBarBackgroundOpacity":1,"top":0,"subtitlesTextShadowColor":"#000000","progressBarBackgroundColorRatios":[0],"playbackBarLeft":0,"subtitlesFontSize":"3vmin","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","toolTipBackgroundColor":"#000000","width":"100%","progressBorderColor":"#FFFFFF","playbackBarHeadShadow":true,"height":"100%","subtitlesBackgroundOpacity":0.2,"progressBarBackgroundColor":["#3399FF"],"surfaceReticleColor":"#FFFFFF","playbackBarHeadShadowBlurRadius":1.5,"playbackBarHeadBorderSize":0},{"hfovMax":130,"class":"Panorama","data":{"label":"View 2"},"id":"panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B","hfov":360,"vfov":180,"thumbnailUrl":"media/panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B_t.webp","label":trans('panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B.label'),"frames":[{"thumbnailUrl":"media/panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B_t.webp","cube":{"levels":[{"rowCount":11,"height":5632,"url":"media/panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":66,"tags":"ondemand","width":33792},{"rowCount":6,"height":3072,"url":"media/panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":36,"tags":"ondemand","width":18432},{"rowCount":3,"height":1536,"url":"media/panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":18,"tags":"ondemand","width":9216},{"rowCount":2,"height":1024,"url":"media/panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand","width":6144},{"rowCount":1,"height":512,"url":"media/panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B_0/{face}/4/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":6,"tags":["ondemand","preload"],"width":3072}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}]},{"borderRadius":7,"scrollBarWidth":5,"overflow":"scroll","backgroundColorRatios":[0],"left":"0%","backgroundColor":["#000000"],"layout":"absolute","data":{"name":"Container black"},"id":"Container_7FF195EF_706F_7FC6_41D7_A104CA87824D_mobile","scrollBarMargin":1,"class":"Container","minHeight":1,"minWidth":1,"gap":5,"top":"0%","width":15.9,"height":"100%","backgroundOpacity":0.4,"scrollBarColor":"#000000"},{"viewerArea":"this.MainViewer_mobile","class":"PanoramaPlayer","keepModel3DLoadedWithoutLocation":true,"arrowKeysAction":"translate","mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","id":"MainViewer_mobilePanoramaPlayer","displayPlaybackBar":true,"aaEnabled":true},{"scrollBarWidth":5,"overflow":"scroll","id":"Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174_mobile","left":"0%","layout":"absolute","data":{"name":"--- LEFT PANEL"},"scrollBarMargin":1,"class":"Container","minHeight":1,"minWidth":1,"gap":5,"top":"15.79%","propagateClick":false,"height":"68.348%","backgroundOpacity":0,"width":"41.86%","scrollBarColor":"#000000","children":["this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D_mobile","this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36_mobile"]},{"hfovMax":130,"class":"Panorama","data":{"label":"View 4"},"id":"panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96","hfov":360,"vfov":180,"thumbnailUrl":"media/panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96_t.webp","label":trans('panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96.label'),"frames":[{"thumbnailUrl":"media/panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96_t.webp","cube":{"levels":[{"rowCount":11,"height":5632,"url":"media/panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":66,"tags":"ondemand","width":33792},{"rowCount":6,"height":3072,"url":"media/panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":36,"tags":"ondemand","width":18432},{"rowCount":3,"height":1536,"url":"media/panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":18,"tags":"ondemand","width":9216},{"rowCount":2,"height":1024,"url":"media/panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand","width":6144},{"rowCount":1,"height":512,"url":"media/panorama_56A6A587_5AB1_6DBB_41D5_ED8FE9E31C96_0/{face}/4/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":6,"tags":["ondemand","preload"],"width":3072}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}]},{"manualZoomSpeed":3,"initialSequence":"this.sequence_5683A06E_5AB1_A34D_4194_B1FA33CEAFE0","class":"PanoramaCamera","id":"panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C_camera","enterPointingToHorizon":true,"initialPosition":{"pitch":-46.48,"class":"PanoramaCameraPosition","yaw":-0.82}},{"toolTipBorderRadius":1,"selectedItemThumbnailShadow":true,"itemThumbnailShadowSpread":1,"selectedItemBorderSize":0,"itemBackgroundColor":["#FFFFFF"],"left":"9.43%","itemPaddingBottom":0,"data":{"name":"ThumbnailList1355"},"itemThumbnailShadowOpacity":0.23,"itemThumbnailShadowColor":"#000000","toolTipTextShadowColor":"#000000","scrollBarMargin":1,"toolTipShadowColor":"#333333","itemThumbnailOpacity":1,"toolTipFontFamily":"Arial","toolTipPaddingLeft":3,"selectedItemBackgroundColorRatios":[0.8823529411764706],"itemBackgroundOpacity":1,"selectedItemLabelFontWeight":"bold","itemThumbnailScaleMode":"fit_outside","gap":12,"itemThumbnailBorderRadius":0,"propagateClick":false,"itemThumbnailShadow":true,"verticalAlign":"middle","itemLabelFontFamily":"Montserrat SemiBold","itemThumbnailWidth":110,"itemPaddingTop":0,"backgroundOpacity":0,"itemPaddingLeft":0,"itemThumbnailShadowBlurRadius":19,"scrollBarColor":"#FFFFFF","toolTipPaddingRight":3,"itemLabelFontColor":"#333333","scrollBarWidth":5,"toolTipFontSize":6,"rollOverItemThumbnailShadow":true,"itemLabelTextDecoration":"none","id":"ThumbnailList_26BB082D_31BA_E2CE_419A_F0DD13EB9989","itemBorderRadius":5,"toolTipBorderColor":"#767676","layout":"vertical","toolTipShadowBlurRadius":1,"itemLabelFontWeight":"bold","itemThumbnailBorderSize":0,"toolTipTextShadowBlurRadius":1,"rollOverItemThumbnailShadowOpacity":0.23,"selectedItemBackgroundOpacity":1,"selectedItemBackgroundColor":["#FFFFFF"],"itemBackgroundColorRatios":[0.9098039215686274],"toolTipFontColor":"#606060","selectedItemThumbnailShadowOpacity":0.26,"itemBackgroundColorDirection":"vertical","tabIndex":0,"selectedItemThumbnailShadowBlurRadius":13,"class":"ThumbnailList","minHeight":1,"itemPaddingRight":0,"minWidth":1,"itemLabelGap":8,"rollOverItemThumbnailShadowBlurRadius":12,"itemLabelFontStyle":"normal","bottom":"7.42%","itemLabelFontSize":"11px","width":145.15,"selectedItemBorderRadius":7,"selectedItemLabelFontColor":"#333333","height":"86.664%","toolTipBackgroundColor":"#F6F6F6","itemThumbnailHeight":70,"playList":"this.ThumbnailList_26BB082D_31BA_E2CE_419A_F0DD13EB9989_playlist","borderRadius":2,"selectedItemLabelFontSize":"11px"},{"manualZoomSpeed":3,"initialSequence":"this.sequence_569F306D_5AB1_A34F_41D5_D311AFFD8843","class":"PanoramaCamera","id":"panorama_5785AB71_5AB0_E556_41B2_2652CBA43332_camera","enterPointingToHorizon":true,"initialPosition":{"pitch":-49,"class":"PanoramaCameraPosition","yaw":-15.72}},{"manualZoomSpeed":3,"initialSequence":"this.sequence_5683C06E_5AB1_A34D_41D1_71F87D0B7655","class":"PanoramaCamera","id":"panorama_56A687D9_5AB0_AD56_41D2_4F442B887C8B_camera","enterPointingToHorizon":true,"initialPosition":{"pitch":-45.68,"class":"PanoramaCameraPosition","yaw":-14.68}},{"hfovMax":130,"class":"Panorama","data":{"label":"View 1"},"id":"panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C","hfov":360,"vfov":180,"thumbnailUrl":"media/panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C_t.webp","label":trans('panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C.label'),"frames":[{"thumbnailUrl":"media/panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C_t.webp","cube":{"levels":[{"rowCount":11,"height":5632,"url":"media/panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":66,"tags":"ondemand","width":33792},{"rowCount":6,"height":3072,"url":"media/panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":36,"tags":"ondemand","width":18432},{"rowCount":3,"height":1536,"url":"media/panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":18,"tags":"ondemand","width":9216},{"rowCount":2,"height":1024,"url":"media/panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand","width":6144},{"rowCount":1,"height":512,"url":"media/panorama_56AADA2E_5AB0_A6CD_4192_CD2DF716B57C_0/{face}/4/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":6,"tags":["ondemand","preload"],"width":3072}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}]},{"hfovMax":130,"class":"Panorama","data":{"label":"View 3"},"id":"panorama_5785AB71_5AB0_E556_41B2_2652CBA43332","hfov":360,"vfov":180,"thumbnailUrl":"media/panorama_5785AB71_5AB0_E556_41B2_2652CBA43332_t.webp","label":trans('panorama_5785AB71_5AB0_E556_41B2_2652CBA43332.label'),"frames":[{"thumbnailUrl":"media/panorama_5785AB71_5AB0_E556_41B2_2652CBA43332_t.webp","cube":{"levels":[{"rowCount":11,"height":5632,"url":"media/panorama_5785AB71_5AB0_E556_41B2_2652CBA43332_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":66,"tags":"ondemand","width":33792},{"rowCount":6,"height":3072,"url":"media/panorama_5785AB71_5AB0_E556_41B2_2652CBA43332_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":36,"tags":"ondemand","width":18432},{"rowCount":3,"height":1536,"url":"media/panorama_5785AB71_5AB0_E556_41B2_2652CBA43332_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":18,"tags":"ondemand","width":9216},{"rowCount":2,"height":1024,"url":"media/panorama_5785AB71_5AB0_E556_41B2_2652CBA43332_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand","width":6144},{"rowCount":1,"height":512,"url":"media/panorama_5785AB71_5AB0_E556_41B2_2652CBA43332_0/{face}/4/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":6,"tags":["ondemand","preload"],"width":3072}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}]},{"class":"PanoramaCameraSequence","id":"sequence_5683006E_5AB1_A34D_41C2_A5CDEEC95059","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"class":"PanoramaCameraSequence","id":"sequence_5683E06E_5AB1_A34D_41D1_17E94F63FB81","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"class":"PanoramaCameraSequence","id":"sequence_5683A06E_5AB1_A34D_4194_B1FA33CEAFE0","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"class":"PanoramaCameraSequence","id":"sequence_569F306D_5AB1_A34F_41D5_D311AFFD8843","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"class":"PanoramaCameraSequence","id":"sequence_5683C06E_5AB1_A34D_41D1_71F87D0B7655","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]}],"scrollBarMargin":2,"layout":"absolute","class":"Player","minHeight":20,"minWidth":20,"gap":10,"xrPanelsEnabled":true,"height":"100%","vrPolyfillScale":0.5,"width":"100%","watermark":false,"scrollBarColor":"#000000","defaultMenu":["fullscreen","mute","rotation"]};
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