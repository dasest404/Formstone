/*! formstone v0.8.25 [lightbox.js] 2015-10-31 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(){W=b.$body,X=a("html, body")}function e(){Y&&j()}function f(a){this.on(S.click,a,i)}function g(){k(),this.off(S.namespace)}function h(b,c){b instanceof a&&i.apply(U,[{data:a.extend(!0,{},{$object:b},P,c||{})}])}function i(c){if(!Y){var d=c.data,e=d.$el,f=d.$object,g=e&&e[0].href?e[0].href||"":"",h=e&&e[0].hash?e[0].hash||"":"",i=g.toLowerCase().split(".").pop().split(/\#|\?/),j=i[0],l=e?e.data(O+"-type"):"",m="image"===l||a.inArray(j,d.extensions)>-1||"data:image"===g.substr(0,10),o=M(g),q="url"===l||!m&&!o&&"http"===g.substr(0,4)&&!h,r="element"===l||!m&&!o&&!q&&"#"===h.substr(0,1),t="undefined"!=typeof f;if(r&&(g=h),!(m||o||q||r||t))return;if(T.killEvent(c),Y=a.extend({},{visible:!1,gallery:{active:!1},isMobile:b.isMobile||d.mobile,isTouch:b.support.touch,isAnimating:!0,oldContentHeight:0,oldContentWidth:0},d),Y.touch=d.touch&&Y.isMobile&&Y.isTouch,Y.margin*=2,Y.type=m?"image":o?"video":"element",m||o){var u=e.data(O+"-gallery");u&&(Y.gallery.active=!0,Y.gallery.id=u,Y.gallery.$items=a("a[data-lightbox-gallery= "+Y.gallery.id+"], a[rel= "+Y.gallery.id+"]"),Y.gallery.index=Y.gallery.$items.index(Y.$el),Y.gallery.total=Y.gallery.$items.length-1)}var v="";Y.isMobile||(v+='<div class="'+[Q.raw.overlay,Y.customClass].join(" ")+'"></div>');var w=[Q.raw.base,Q.raw.loading,Q.raw.animating,Y.customClass];Y.fixed&&w.push(Q.raw.fixed),Y.isMobile&&w.push(Q.raw.mobile),Y.isTouch&&w.push(Q.raw.touch),q&&w.push(Q.raw.iframed),(r||t)&&w.push(Q.raw.inline),v+='<div class="'+w.join(" ")+'">',v+='<button type="button" class="'+Q.raw.close+'">'+Y.labels.close+"</button>",v+='<span class="'+Q.raw.loading_icon+'"></span>',v+='<div class="'+Q.raw.container+'">',v+='<div class="'+Q.raw.content+'">',(m||o)&&(v+='<div class="'+Q.raw.tools+'">',v+='<div class="'+Q.raw.controls+'">',Y.gallery.active&&(v+='<button type="button" class="'+[Q.raw.control,Q.raw.control_previous].join(" ")+'">'+Y.labels.previous+"</button>",v+='<button type="button" class="'+[Q.raw.control,Q.raw.control_next].join(" ")+'">'+Y.labels.next+"</button>"),Y.isMobile&&Y.isTouch&&(v+='<button type="button" class="'+[Q.raw.caption_toggle].join(" ")+'">'+Y.labels.captionClosed+"</button>"),v+="</div>",v+='<div class="'+Q.raw.meta+'">',Y.gallery.active&&(v+='<p class="'+Q.raw.position+'"',Y.gallery.total<1&&(v+=' style="display: none;"'),v+=">",v+='<span class="'+Q.raw.position_current+'">'+(Y.gallery.index+1)+"</span> ",v+=Y.labels.count,v+=' <span class="'+Q.raw.position_total+'">'+(Y.gallery.total+1)+"</span>",v+="</p>"),v+='<div class="'+Q.raw.caption+'">',v+=Y.formatter.call(e,d),v+="</div></div>",v+="</div>"),v+="</div></div></div>",W.append(v),Y.$overlay=a(Q.overlay),Y.$lightbox=a(Q.base),Y.$close=a(Q.close),Y.$container=a(Q.container),Y.$content=a(Q.content),Y.$tools=a(Q.tools),Y.$meta=a(Q.meta),Y.$position=a(Q.position),Y.$caption=a(Q.caption),Y.$controlBox=a(Q.controls),Y.$controls=a(Q.control),Y.isMobile?(Y.paddingVertical=Y.$close.outerHeight(),Y.paddingHorizontal=0,Y.mobilePaddingVertical=parseInt(Y.$content.css("paddingTop"),10)+parseInt(Y.$content.css("paddingBottom"),10),Y.mobilePaddingHorizontal=parseInt(Y.$content.css("paddingLeft"),10)+parseInt(Y.$content.css("paddingRight"),10)):(Y.paddingVertical=parseInt(Y.$lightbox.css("paddingTop"),10)+parseInt(Y.$lightbox.css("paddingBottom"),10),Y.paddingHorizontal=parseInt(Y.$lightbox.css("paddingLeft"),10)+parseInt(Y.$lightbox.css("paddingRight"),10),Y.mobilePaddingVertical=0,Y.mobilePaddingHorizontal=0),Y.contentHeight=Y.$lightbox.outerHeight()-Y.paddingVertical,Y.contentWidth=Y.$lightbox.outerWidth()-Y.paddingHorizontal,Y.controlHeight=Y.$controls.outerHeight(),n(),Y.gallery.active&&(Y.$lightbox.addClass(R.has_controls),E()),V.on(S.keyDown,F),W.on(S.click,[Q.overlay,Q.close].join(", "),k),Y.gallery.active&&Y.$lightbox.on(S.click,Q.control,D),Y.isMobile&&Y.isTouch&&Y.$lightbox.on(S.click,Q.caption_toggle,p),Y.$lightbox.fsTransition({property:"opacity"},function(){m?s(g):o?A(g):q?H(g):r?G(g):t&&I(Y.$object)}).addClass(Q.raw.open),Y.$overlay.addClass(Q.raw.open)}}function j(a){"object"!=typeof a&&(Y.targetHeight=arguments[0],Y.targetWidth=arguments[1]),"element"===Y.type?J(Y.$content.find("> :first-child")):"image"===Y.type?y():"video"===Y.type&&B(),m()}function k(a){T.killEvent(a),Y&&(Y.$lightbox.fsTransition("destroy"),Y.$container.fsTransition("destroy"),t(),Y.$lightbox.addClass(Q.raw.animating).fsTransition({property:"opacity"},function(){Y.$lightbox.off(S.namespace),Y.$container.off(S.namespace),V.off(S.namespace),W.off(S.namespace),Y.$overlay.remove(),Y.$lightbox.remove(),Y=null,V.trigger(S.close)}),Y.$lightbox.removeClass(Q.raw.open),Y.$overlay.removeClass(Q.raw.open),Y.isMobile&&X.removeClass(R.lock))}function l(){{var a=o();Y.isMobile?0:Y.duration}Y.isMobile||Y.$controls.css({marginTop:(Y.contentHeight-Y.controlHeight-Y.metaHeight)/2}),Y.$lightbox.fsTransition({property:Y.contentHeight!==Y.oldContentHeight?"height":"width"},function(){Y.$container.fsTransition({property:"opacity"},function(){Y.$lightbox.removeClass(Q.raw.animating),Y.isAnimating=!1}),Y.$lightbox.removeClass(Q.raw.loading),Y.visible=!0,V.trigger(S.open),Y.gallery.active&&C()}),Y.isMobile||Y.$lightbox.css({height:Y.contentHeight+Y.paddingVertical,width:Y.contentWidth+Y.paddingHorizontal,top:Y.fixed?0:a.top});var b=Y.oldContentHeight!==Y.contentHeight||Y.oldContentWidth!==Y.contentWidth;(Y.isMobile||!b)&&Y.$lightbox.fsTransition("resolve"),Y.oldContentHeight=Y.contentHeight,Y.oldContentWidth=Y.contentWidth,Y.isMobile&&X.addClass(R.lock)}function m(){if(Y.visible&&!Y.isMobile){var a=o();Y.$controls.css({marginTop:(Y.contentHeight-Y.controlHeight-Y.metaHeight)/2}),Y.$lightbox.css({height:Y.contentHeight+Y.paddingVertical,width:Y.contentWidth+Y.paddingHorizontal,top:Y.fixed?0:a.top})}}function n(){var a=o();Y.$lightbox.css({top:Y.fixed?0:a.top})}function o(){if(Y.isMobile)return{left:0,top:0};var a={left:(b.windowWidth-Y.contentWidth-Y.paddingHorizontal)/2,top:Y.top<=0?(b.windowHeight-Y.contentHeight-Y.paddingVertical)/2:Y.top};return Y.fixed!==!0&&(a.top+=V.scrollTop()),a}function p(a){T.killEvent(a),Y.captionOpen?q():(Y.$lightbox.addClass(Q.raw.caption_open).find(Q.caption_toggle).text(Y.labels.captionOpen),Y.captionOpen=!0)}function q(){Y.$lightbox.removeClass(Q.raw.caption_open).find(Q.caption_toggle).text(Y.labels.captionClosed),Y.captionOpen=!1}function r(){var a=this.attr("title"),b=a!==c&&a?a.replace(/^\s+|\s+$/g,""):!1;return b?'<p class="caption">'+b+"</p>":""}function s(b){Y.hasScaled=!1,Y.$imageContainer=a('<div class="'+Q.raw.image_container+'"><img></div>'),Y.$image=Y.$imageContainer.find("img"),Y.$image.one(S.load,function(){var a=L(Y.$image);Y.naturalHeight=a.naturalHeight,Y.naturalWidth=a.naturalWidth,Y.retina&&(Y.naturalHeight/=2,Y.naturalWidth/=2),Y.$content.prepend(Y.$imageContainer),""===Y.$caption.html()?(Y.$caption.hide(),Y.$lightbox.removeClass(R.has_caption)):(Y.$caption.show(),Y.$lightbox.addClass(R.has_caption)),y(),l(),Y.touch&&(u(),w({scale:1,deltaX:0,deltaY:0}),x(),Y.$container.fsTouch({pan:!0,scale:!0}).on(S.scaleStart,v).on(S.scaleEnd,x).on(S.scale,w))}).error(K).attr("src",b).addClass(Q.raw.image),(Y.$image[0].complete||4===Y.$image[0].readyState)&&Y.$image.trigger(S.load)}function t(){Y.$image&&Y.$image.length&&Y.$container.fsTouch("destroy")}function u(){Y.scalePosition=Y.$imageContainer.position(),Y.scaleY=Y.scalePosition.top,Y.scaleX=Y.scalePosition.left,Y.scaleHeight=Y.$image.outerHeight(),Y.scaleWidth=Y.$image.outerWidth()}function v(){u(),Y.$lightbox.removeClass(Q.raw.animating)}function w(a){Y.targetContainerY=Y.scaleY+a.deltaY,Y.targetContainerX=Y.scaleX+a.deltaX,Y.targetImageHeight=Y.scaleHeight*a.scale,Y.targetImageWidth=Y.scaleWidth*a.scale,Y.targetImageHeight<Y.scaleMinHeight&&(Y.targetImageHeight=Y.scaleMinHeight),Y.targetImageHeight>Y.scaleMaxHeight&&(Y.targetImageHeight=Y.scaleMaxHeight),Y.targetImageWidth<Y.scaleMinWidth&&(Y.targetImageWidth=Y.scaleMinWidth),Y.targetImageWidth>Y.scaleMaxWidth&&(Y.targetImageWidth=Y.scaleMaxWidth),Y.hasScaled=!0,Y.isScaling=!0,Y.$imageContainer.css({top:Y.targetContainerY,left:Y.targetContainerX}),Y.$image.css({height:Y.targetImageHeight,width:Y.targetImageWidth,top:-(Y.targetImageHeight/2),left:-(Y.targetImageWidth/2)})}function x(){u(),Y.isScaling=!1;var a=Y.$container.outerHeight()-Y.metaHeight,b=Y.$container.outerWidth();Y.scaleMinY=a-Y.scaleHeight/2,Y.scaleMinX=b-Y.scaleWidth/2,Y.scaleMaxY=Y.scaleHeight/2,Y.scaleMaxX=Y.scaleWidth/2,Y.scaleHeight<a?Y.scalePosition.top=a/2:(Y.scalePosition.top<Y.scaleMinY&&(Y.scalePosition.top=Y.scaleMinY),Y.scalePosition.top>Y.scaleMaxY&&(Y.scalePosition.top=Y.scaleMaxY)),Y.scaleWidth<b?Y.scalePosition.left=b/2:(Y.scalePosition.left<Y.scaleMinX&&(Y.scalePosition.left=Y.scaleMinX),Y.scalePosition.left>Y.scaleMaxX&&(Y.scalePosition.left=Y.scaleMaxX)),Y.$lightbox.addClass(Q.raw.animating),Y.$imageContainer.css({left:Y.scalePosition.left,top:Y.scalePosition.top})}function y(){var a=0;for(Y.windowHeight=Y.viewportHeight=b.windowHeight-Y.mobilePaddingVertical-Y.paddingVertical,Y.windowWidth=Y.viewportWidth=b.windowWidth-Y.mobilePaddingHorizontal-Y.paddingHorizontal,Y.contentHeight=1/0,Y.contentWidth=1/0,Y.imageMarginTop=0,Y.imageMarginLeft=0;Y.contentHeight>Y.viewportHeight&&2>a;)Y.imageHeight=0===a?Y.naturalHeight:Y.$image.outerHeight(),Y.imageWidth=0===a?Y.naturalWidth:Y.$image.outerWidth(),Y.metaHeight=0===a?0:Y.metaHeight,Y.spacerHeight=0===a?0:Y.spacerHeight,0===a&&(Y.ratioHorizontal=Y.imageHeight/Y.imageWidth,Y.ratioVertical=Y.imageWidth/Y.imageHeight,Y.isWide=Y.imageWidth>Y.imageHeight),Y.imageHeight<Y.minHeight&&(Y.minHeight=Y.imageHeight),Y.imageWidth<Y.minWidth&&(Y.minWidth=Y.imageWidth),Y.isMobile?(Y.isTouch?(Y.$controlBox.css({width:b.windowWidth}),Y.spacerHeight=Y.$controls.outerHeight(!0)):(Y.$tools.css({width:b.windowWidth}),Y.spacerHeight=Y.$tools.outerHeight(!0)),Y.contentHeight=Y.viewportHeight,Y.contentWidth=Y.viewportWidth,z(),Y.imageMarginTop=(Y.contentHeight-Y.targetImageHeight-Y.spacerHeight)/2,Y.imageMarginLeft=(Y.contentWidth-Y.targetImageWidth)/2):(0===a&&(Y.viewportHeight-=Y.margin+Y.paddingVertical,Y.viewportWidth-=Y.margin+Y.paddingHorizontal),Y.viewportHeight-=Y.metaHeight,z(),Y.contentHeight=Y.targetImageHeight,Y.contentWidth=Y.targetImageWidth),Y.isMobile||Y.isTouch||Y.$meta.css({width:Y.contentWidth}),Y.hasScaled||(Y.$image.css({height:Y.targetImageHeight,width:Y.targetImageWidth}),Y.$image.css(Y.touch?{top:-(Y.targetImageHeight/2),left:-(Y.targetImageWidth/2)}:{marginTop:Y.imageMarginTop,marginLeft:Y.imageMarginLeft})),Y.isMobile||(Y.metaHeight=Y.$meta.outerHeight(!0),Y.contentHeight+=Y.metaHeight),a++;Y.touch&&(Y.scaleMinHeight=Y.targetImageHeight,Y.scaleMinWidth=Y.targetImageWidth,Y.scaleMaxHeight=Y.naturalHeight,Y.scaleMaxWidth=Y.naturalWidth)}function z(){var a=Y.isMobile?Y.contentHeight-Y.spacerHeight:Y.viewportHeight,b=Y.isMobile?Y.contentWidth:Y.viewportWidth;Y.isWide?(Y.targetImageWidth=b,Y.targetImageHeight=Y.targetImageWidth*Y.ratioHorizontal,Y.targetImageHeight>a&&(Y.targetImageHeight=a,Y.targetImageWidth=Y.targetImageHeight*Y.ratioVertical)):(Y.targetImageHeight=a,Y.targetImageWidth=Y.targetImageHeight*Y.ratioVertical,Y.targetImageWidth>b&&(Y.targetImageWidth=b,Y.targetImageHeight=Y.targetImageWidth*Y.ratioHorizontal)),(Y.targetImageWidth>Y.imageWidth||Y.targetImageHeight>Y.imageHeight)&&(Y.targetImageHeight=Y.imageHeight,Y.targetImageWidth=Y.imageWidth),(Y.targetImageWidth<Y.minWidth||Y.targetImageHeight<Y.minHeight)&&(Y.targetImageWidth<Y.minWidth?(Y.targetImageWidth=Y.minWidth,Y.targetImageHeight=Y.targetImageWidth*Y.ratioHorizontal):(Y.targetImageHeight=Y.minHeight,Y.targetImageWidth=Y.targetImageHeight*Y.ratioVertical))}function A(b){var c=b.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i),d=b.match(/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/),e=b.split("?"),f=null!==c?"//www.youtube.com/embed/"+c[1]:"//player.vimeo.com/video/"+d[3];e.length>=2&&(f+="?"+e.slice(1)[0].trim()),Y.$videoWrapper=a('<div class="'+Q.raw.video_wrapper+'"></div>'),Y.$video=a('<iframe class="'+Q.raw.video+'" frameborder="0" seamless="seamless" allowfullscreen></iframe>'),Y.$video.attr("src",f).addClass(Q.raw.video).prependTo(Y.$videoWrapper),Y.$content.prepend(Y.$videoWrapper),B(),l()}function B(){Y.windowHeight=Y.viewportHeight=b.windowHeight-Y.mobilePaddingVertical-Y.paddingVertical,Y.windowWidth=Y.viewportWidth=b.windowWidth-Y.mobilePaddingHorizontal-Y.paddingHorizontal,Y.videoMarginTop=0,Y.videoMarginLeft=0,Y.isMobile?(Y.isTouch?(Y.$controlBox.css({width:b.windowWidth}),Y.spacerHeight=Y.$controls.outerHeight(!0)):(Y.$tools.css({width:b.windowWidth}),Y.spacerHeight=Y.$tools.outerHeight(!0)),Y.viewportHeight-=Y.spacerHeight,Y.targetVideoWidth=Y.viewportWidth,Y.targetVideoHeight=Y.targetVideoWidth*Y.videoRatio,Y.targetVideoHeight>Y.viewportHeight&&(Y.targetVideoHeight=Y.viewportHeight,Y.targetVideoWidth=Y.targetVideoHeight/Y.videoRatio),Y.videoMarginTop=(Y.viewportHeight-Y.targetVideoHeight)/2,Y.videoMarginLeft=(Y.viewportWidth-Y.targetVideoWidth)/2):(Y.viewportHeight=Y.windowHeight-Y.margin,Y.viewportWidth=Y.windowWidth-Y.margin,Y.targetVideoWidth=Y.videoWidth>Y.viewportWidth?Y.viewportWidth:Y.videoWidth,Y.targetVideoWidth<Y.minWidth&&(Y.targetVideoWidth=Y.minWidth),Y.targetVideoHeight=Y.targetVideoWidth*Y.videoRatio,Y.contentHeight=Y.targetVideoHeight,Y.contentWidth=Y.targetVideoWidth),Y.isMobile||Y.isTouch||Y.$meta.css({width:Y.contentWidth}),Y.$videoWrapper.css({height:Y.targetVideoHeight,width:Y.targetVideoWidth,marginTop:Y.videoMarginTop,marginLeft:Y.videoMarginLeft}),Y.isMobile||(Y.metaHeight=Y.$meta.outerHeight(!0),Y.contentHeight=Y.targetVideoHeight+Y.metaHeight)}function C(){var b="";Y.gallery.index>0&&(b=Y.gallery.$items.eq(Y.gallery.index-1).attr("href"),M(b)||a('<img src="'+b+'">')),Y.gallery.index<Y.gallery.total&&(b=Y.gallery.$items.eq(Y.gallery.index+1).attr("href"),M(b)||a('<img src="'+b+'">'))}function D(b){T.killEvent(b);var c=a(b.currentTarget);Y.isAnimating||c.hasClass(Q.raw.control_disabled)||(Y.isAnimating=!0,t(),q(),Y.gallery.index+=c.hasClass(Q.raw.control_next)?1:-1,Y.gallery.index>Y.gallery.total&&(Y.gallery.index=Y.infinite?0:Y.gallery.total),Y.gallery.index<0&&(Y.gallery.index=Y.infinite?Y.gallery.total:0),Y.$lightbox.addClass(Q.raw.animating),Y.$container.fsTransition({property:"opacity"},function(){"undefined"!=typeof Y.$image&&Y.$image.remove(),"undefined"!=typeof Y.$videoWrapper&&Y.$videoWrapper.remove(),Y.$el=Y.gallery.$items.eq(Y.gallery.index),Y.$caption.html(Y.formatter.call(Y.$el,Y)),Y.$position.find(Q.position_current).html(Y.gallery.index+1);var a=Y.$el.attr("href"),b=M(a);b?A(a):s(a),E()}),Y.$lightbox.addClass(Q.raw.loading))}function E(){Y.$controls.removeClass(Q.raw.control_disabled),Y.infinite||(0===Y.gallery.index&&Y.$controls.filter(Q.control_previous).addClass(R.control_disabled),Y.gallery.index===Y.gallery.total&&Y.$controls.filter(Q.control_next).addClass(R.control_disabled))}function F(a){!Y.gallery.active||37!==a.keyCode&&39!==a.keyCode?27===a.keyCode&&Y.$close.trigger(S.click):(T.killEvent(a),Y.$controls.filter(37===a.keyCode?Q.control_previous:Q.control_next).trigger(S.click))}function G(b){var c=a(b).find("> :first-child").clone();I(c)}function H(b){b+=b.indexOf("?")>-1?"&"+Y.requestKey+"=true":"?"+Y.requestKey+"=true";var c=a('<iframe class="'+Q.raw.iframe+'" src="'+b+'"></iframe>');I(c)}function I(a){Y.$content.append(a),J(a),l()}function J(a){Y.windowHeight=b.windowHeight-Y.mobilePaddingVertical-Y.paddingVertical,Y.windowWidth=b.windowWidth-Y.mobilePaddingHorizontal-Y.paddingHorizontal,Y.objectHeight=a.outerHeight(!0),Y.objectWidth=a.outerWidth(!0),Y.targetHeight=Y.targetHeight||(Y.$el?Y.$el.data(O+"-height"):null),Y.targetWidth=Y.targetWidth||(Y.$el?Y.$el.data(O+"-width"):null),Y.maxHeight=Y.windowHeight<0?Y.minHeight:Y.windowHeight,Y.isIframe=a.is("iframe"),Y.objectMarginTop=0,Y.objectMarginLeft=0,Y.isMobile||(Y.windowHeight-=Y.margin,Y.windowWidth-=Y.margin),Y.contentHeight=Y.targetHeight?Y.targetHeight:Y.isIframe||Y.isMobile?Y.windowHeight:Y.objectHeight,Y.contentWidth=Y.targetWidth?Y.targetWidth:Y.isIframe||Y.isMobile?Y.windowWidth:Y.objectWidth,(Y.isIframe||Y.isObject)&&Y.isMobile?(Y.contentHeight=Y.windowHeight,Y.contentWidth=Y.windowWidth):Y.isObject&&(Y.contentHeight=Y.contentHeight>Y.windowHeight?Y.windowHeight:Y.contentHeight,Y.contentWidth=Y.contentWidth>Y.windowWidth?Y.windowWidth:Y.contentWidth)}function K(){var b=a('<div class="'+Q.raw.error+'"><p>Error Loading Resource</p></div>');Y.type="element",Y.$tools.remove(),Y.$image.off(S.namespace),I(b)}function L(a){var b=a[0],c=new Image;return"undefined"!=typeof b.naturalHeight?{naturalHeight:b.naturalHeight,naturalWidth:b.naturalWidth}:"img"===b.tagName.toLowerCase()?(c.src=b.src,{naturalHeight:c.height,naturalWidth:c.width}):!1}function M(a){return a.indexOf("youtube.com")>-1||a.indexOf("youtu.be")>-1||a.indexOf("vimeo.com")>-1}var N=b.Plugin("lightbox",{widget:!0,defaults:{customClass:"",extensions:["jpg","sjpg","jpeg","png","gif"],fixed:!1,formatter:r,infinite:!1,labels:{close:"Close",count:"of",next:"Next",previous:"Previous",captionClosed:"View Caption",captionOpen:"Close Caption"},margin:50,minHeight:100,minWidth:100,mobile:!1,retina:!1,requestKey:"fs-lightbox",top:0,touch:!0,videoRatio:.5625,videoWidth:800},classes:["loading","animating","fixed","mobile","touch","inline","iframed","open","overlay","close","loading_icon","container","content","image","image_container","video","video_wrapper","tools","meta","controls","control","control_previous","control_next","control_disabled","position","position_current","position_total","caption_toggle","caption","caption_open","has_controls","has_caption","iframe","error","lock"],events:{open:"open",close:"close"},methods:{_setup:d,_construct:f,_destruct:g,_resize:e,resize:j},utilities:{_initialize:h,close:k}}),O=N.namespace,P=N.defaults,Q=N.classes,R=Q.raw,S=N.events,T=N.functions,U=b.window,V=b.$window,W=null,X=null,Y=null}(jQuery,Formstone);