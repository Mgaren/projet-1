!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports&&"object"==typeof module?module.exports=t(require("jquery")):t(jQuery)}(function(qt,Nt){"use strict";var t,Dt={beforeShow:r,move:r,change:r,show:r,hide:r,color:!1,flat:!1,showInput:!1,allowEmpty:!1,showButtons:!0,clickoutFiresChange:!0,showInitial:!1,showPalette:!1,showPaletteOnly:!1,hideAfterPaletteSelect:!0,togglePaletteOnly:!1,showSelectionPalette:!0,localStorageKey:!1,appendTo:"body",maxSelectionSize:7,cancelText:"cancel",chooseText:"choose",togglePaletteMoreText:"more",togglePaletteLessText:"less",clearText:"Clear Color Selection",noColorSelectedText:"No Color Selected",preferredFormat:!1,className:"",containerClassName:"",replacerClassName:"",showAlpha:!1,theme:"sp-light",palette:[["#ffffff","#000000","#ff0000","#ff8000","#ffff00","#008000","#0000ff","#4b0082","#9400d3"]],selectionPalette:[],disabled:!1,offset:null},It=[],$t=!!/msie/i.exec(window.navigator.userAgent),zt=((t=document.createElement("div").style).cssText="background-color:rgba(0,0,0,.5)",e(t.backgroundColor,"rgba")||e(t.backgroundColor,"hsla")),Bt=["<div class='sp-replacer'>","<div class='sp-preview'><div class='sp-preview-inner'></div></div>","<div class='sp-dd'>&#9660;</div>","</div>"].join(""),Lt=function(){var t="";if($t)for(var e=1;e<=6;e++)t+="<div class='sp-"+e+"'></div>";return["<div class='sp-container sp-hidden'>","<div class='sp-palette-container'>","<div class='sp-palette sp-thumb sp-cf'></div>","<div class='sp-palette-button-container sp-cf'>","<button type='button' class='sp-palette-toggle'></button>","</div>","</div>","<div class='sp-picker-container'>","<div class='sp-top sp-cf'>","<div class='sp-fill'></div>","<div class='sp-top-inner'>","<div class='sp-color'>","<div class='sp-sat'>","<div class='sp-val'>","<div class='sp-dragger'></div>","</div>","</div>","</div>","<div class='sp-clear sp-clear-display'>","</div>","<div class='sp-hue'>","<div class='sp-slider'></div>",t,"</div>","</div>","<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>","</div>","<div class='sp-input-container sp-cf'>","<input class='sp-input' type='text' spellcheck='false'  />","</div>","<div class='sp-initial sp-thumb sp-cf'></div>","<div class='sp-button-container sp-cf'>","<a class='sp-cancel' href='#'></a>","<button type='button' class='sp-choose'></button>","</div>","</div>","</div>"].join("")}();function e(t,e){return!!~(""+t).indexOf(e)}function Kt(t,e,r,a){for(var n=[],o=0;o<t.length;o++){var i,s,l,c,f=t[o];f?(s=(i=tinycolor(f)).toHsl().l<.5?"sp-thumb-el sp-thumb-dark":"sp-thumb-el sp-thumb-light",s+=tinycolor.equals(e,f)?" sp-thumb-active":"",l=i.toString(a.preferredFormat||"rgb"),c=zt?"background-color:"+i.toRgbString():"filter:"+i.toFilter(),n.push('<span title="'+l+'" data-color="'+i.toRgbString()+'" class="'+s+'"><span class="sp-thumb-inner" style="'+c+';" /></span>')):n.push(qt("<div />").append(qt('<span data-color="" style="background-color:transparent;" class="sp-clear-display"></span>').attr("title",a.noColorSelectedText)).html())}return 0==t.length&&"sp-palette-row sp-palette-row-0"==r&&n.push('<span class="mfFavColorEmptyString">Add <strong>'+e.toString("hex6")+"</strong> to favourites</span>"),"<div class='sp-cf "+r+"'>"+n.join("")+"</div>"}function o(t,e){var r,a,n,o,i,s,l,u=(i=e,s=t,l=qt.extend({},Dt,i),"function"==typeof i.show&&(l.show=function(){Dt.show(),i.show()}),i.hasOwnProperty("palette")&&(l.palette=i.palette,l.palette.unshift(Dt.palette)),l.callbacks={move:Wt(l.move,s),change:Wt(l.change,s),show:Wt(l.show,s),hide:Wt(l.hide,s),beforeShow:Wt(l.beforeShow,s)},l),d=u.flat,c=u.showSelectionPalette,f=u.localStorageKey,h=u.theme,p=u.callbacks,g=(r=Tt,function(){var t=this,e=arguments;n&&clearTimeout(o),!n&&o||(o=setTimeout(function(){o=null,r.apply(t,e)},a))}),b=!(a=10),v=!1,m=0,y=0,w=0,_=0,x=0,k=0,C=0,S=0,P=0,F=0,A=1,M=[],H=[],R={},O=u.selectionPalette.slice(0),T=u.maxSelectionSize,E="sp-dragging",j=null,q=t.ownerDocument,N=(q.body,qt(t)),D=!1,I=qt(Lt,q).addClass(h),$=I.find(".sp-picker-container"),z=I.find(".sp-color"),B=I.find(".sp-dragger"),L=I.find(".sp-hue"),K=I.find(".sp-slider"),V=I.find(".sp-alpha-inner"),W=I.find(".sp-alpha"),X=I.find(".sp-alpha-handle"),Y=I.find(".sp-input"),G=I.find(".sp-palette"),Q=I.find(".sp-initial"),J=I.find(".sp-cancel"),U=I.find(".sp-clear"),Z=I.find(".sp-choose"),tt=I.find(".sp-palette-toggle"),et=N.is("input"),rt=et&&"color"===N.attr("type")&&Yt(),at=et&&!d,nt=at?qt(Bt).addClass(h).addClass(u.className).addClass(u.replacerClassName):qt([]),ot=at?nt:N,it=nt.find(".sp-preview-inner"),st=u.color||et&&N.val(),lt=!1,ct=u.preferredFormat,ft=!u.showButtons||u.clickoutFiresChange,ht=!st,ut=u.allowEmpty&&!rt;function dt(){if(u.showPaletteOnly&&(u.showPalette=!0),tt.text(u.showPaletteOnly?u.togglePaletteMoreText:u.togglePaletteLessText),u.palette){M=u.palette.slice(0),H=qt.isArray(M[0])?M:[M],R={};for(var t=0;t<H.length;t++)for(var e=0;e<H[t].length;e++){var r=tinycolor(H[t][e]).toRgbString();R[r]=!0}}I.toggleClass("sp-flat",d),I.toggleClass("sp-input-disabled",!u.showInput),I.toggleClass("sp-alpha-enabled",u.showAlpha),I.toggleClass("sp-clear-enabled",ut),I.toggleClass("sp-buttons-disabled",!u.showButtons),I.toggleClass("sp-palette-buttons-disabled",!u.togglePaletteOnly),I.toggleClass("sp-palette-disabled",!u.showPalette),I.toggleClass("sp-palette-only",u.showPaletteOnly),I.toggleClass("sp-initial-disabled",!u.showInitial),I.addClass(u.className).addClass(u.containerClassName),Tt()}function pt(){if(f&&window.localStorage){try{var t=window.localStorage[f].split(",#");1<t.length&&(delete window.localStorage[f],qt.each(t,function(t,e){gt(e)}))}catch(t){}try{O=window.localStorage[f].split(";")}catch(t){}}}function gt(t){if(c){var e=tinycolor(t).toRgbString();if(!R[e]&&-1===qt.inArray(e,O))for(O.push(e);O.length>T;)O.shift();if(f&&window.localStorage)try{window.localStorage[f]=O.join(";")}catch(t){}}}function bt(){var r=At();H[0]=mf_main.editorController.favouriteColorController.favouriteColorPaletteArr;var t,e=qt.map(H,function(t,e){return Kt(t,r,"sp-palette-row sp-palette-row-"+e,u)});pt(),O&&(t=function(){var t=[];if(u.showPalette)for(var e=0;e<O.length;e++){var r=tinycolor(O[e]).toRgbString();R[r]||t.push(O[e])}return t.reverse().slice(0,u.maxSelectionSize)}(),e.push(Kt(t,r,""==t?"sp-palette-row sp-palette-row-selection":"sp-palette-row sp-palette-row-selection sp-palette-row-selection-title",u))),G.html(e.join("")),qt(".mfFavColorEmptyString").length&&(qt(".mfFavColorEmptyString").off("click"),qt(".mfFavColorEmptyString").on("click",mf_main.editorController.favouriteColorController.addFavColorHandler))}function vt(){var t,e;u.showInitial&&(t=lt,e=At(),Q.html(Kt([t,e],e,"sp-palette-row-initial",u)))}function mt(){(y<=0||m<=0||_<=0)&&Tt(),v=!0,I.addClass(E),j=null,N.trigger("dragstart.spectrum",[At()])}function yt(){v=!1,I.removeClass(E),N.trigger("dragstop.spectrum",[At()])}function wt(){var t,e=Y.val();null!==e&&""!==e||!ut?(t=tinycolor(e)).isValid()?(Ft(t),Mt(),Ot()):Y.addClass("sp-validation-error"):(Ft(null),Mt(),Ot())}function _t(){(b?St:xt)()}function xt(){var t=qt.Event("beforeShow.spectrum");b?Tt():(N.trigger(t,[At()]),!1===p.beforeShow(At())||t.isDefaultPrevented()||(function(){for(var t=0;t<It.length;t++)It[t]&&It[t].hide()}(),b=!0,I.css("display","block"),qt(q).on("keydown.spectrum",kt),qt(q).on("click.spectrum",Ct),qt(window).on("resize.spectrum",g),nt.addClass("sp-active"),I.removeClass("sp-hidden"),Tt(),Ht(),lt=At(),vt(),p.show(lt),N.trigger("show.spectrum",[lt])))}function kt(t){27===t.keyCode&&St()}function Ct(t){2!=t.button&&(v||(ft?Ot(!0):Pt(),St()))}function St(){b&&!d&&(b=!1,qt(q).off("keydown.spectrum",kt),qt(q).off("click.spectrum",Ct),qt(window).off("resize.spectrum",g),I.css("display","none"),nt.removeClass("sp-active"),I.addClass("sp-hidden"),p.hide(At()),N.trigger("hide.spectrum",[At()]))}function Pt(){Ft(lt,!0),Ot(!0)}function Ft(t,e){var r,a;tinycolor.equals(t,At())?Ht():(!t&&ut?ht=!0:(ht=!1,a=(r=tinycolor(t)).toHsv(),S=a.h%360/360,P=a.s,F=a.v,A=a.a),Ht(),r&&r.isValid()&&!e&&(ct=u.preferredFormat||r.getFormat()))}function At(t){return t=t||{},ut&&ht?null:tinycolor.fromRatio({h:S,s:P,v:F,a:Math.round(1e3*A)/1e3},{format:t.format||ct})}function Mt(){Ht(),p.move(At()),N.trigger("move.spectrum",[At()])}function Ht(){Y.removeClass("sp-validation-error"),Rt();var t=tinycolor.fromRatio({h:S,s:1,v:1});z.css("background-color",t.toHexString());var e=ct;A<1&&(0!==A||"name"!==e)&&("hex"!==e&&"hex3"!==e&&"hex6"!==e&&"name"!==e||(e="rgb"));var r,a,n,o,i,s=At({format:e}),l="";it.removeClass("sp-clear-display"),it.css("background-color","transparent"),!s&&ut?it.addClass("sp-clear-display"):(r=s.toHexString(),a=s.toRgbString(),zt||1===s.alpha?it.css("background-color",a):(it.css("background-color","transparent"),it.css("filter",s.toFilter())),u.showAlpha&&((n=s.toRgb()).a=0,i="linear-gradient(left, "+(o=tinycolor(n).toRgbString())+", "+r+")",$t?V.css("filter",tinycolor(o).toFilter({gradientType:1},r)):(V.css("background","-webkit-"+i),V.css("background","-moz-"+i),V.css("background","-ms-"+i),V.css("background","linear-gradient(to right, "+o+", "+r+")"))),l=s.toString(e)),u.showInput&&Y.val(l),u.showPalette&&bt(),vt()}function Rt(){var t,e,r,a,n=P,o=F;ut&&ht?(X.hide(),K.hide(),B.hide()):(X.show(),K.show(),B.show(),t=n*m,e=y-o*y,t=Math.max(-w,Math.min(m-w,t-w)),e=Math.max(-w,Math.min(y-w,e-w)),B.css({top:e+"px",left:t+"px"}),r=A*x,X.css({left:r-k/2+"px"}),a=S*_,K.css({top:a-C+"px"}))}function Ot(t){var e=At(),r="",a=!tinycolor.equals(e,lt);e&&(r=e.toString(ct),gt(e)),et&&N.val(r),t&&a&&(p.change(e),N.trigger("change",[e]))}function Tt(){var t,e,r,a,n,o,i,s,l,c,f,h;b&&(m=z.width(),y=z.height(),w=B.height(),L.width(),_=L.height(),C=K.height(),x=W.width(),k=X.width(),I.css("display","block"),d||(I.css("position","absolute"),u.offset?I.offset(u.offset):I.offset((e=ot,r=(t=I).outerWidth(),a=t.outerHeight(),n=e.outerHeight(),o=t[0].ownerDocument,i=o.documentElement,s=i.clientWidth+qt(o).scrollLeft(),l=i.clientHeight+qt(o).scrollTop(),c=e.offset(),f=c.left,h=c.top,h+=n,f-=Math.min(f,s<f+r&&r<s?Math.abs(f+r-s):0),{top:h-=Math.min(h,l<h+a&&a<l?Math.abs(+(a+n)):0),bottom:c.bottom,left:f,right:c.right,width:c.width,height:c.height}))),Rt(),u.showPalette&&bt(),N.trigger("reflow.spectrum"))}function Et(){St(),D=!0,N.attr("disabled",!0),ot.addClass("sp-disabled")}!function(){var t;function e(t){return t.data&&t.data.ignore?(Ft(qt(t.target).closest(".sp-thumb-el").data("color")),Mt()):(Ft(qt(t.target).closest(".sp-thumb-el").data("color")),Mt(),u.hideAfterPaletteSelect?(Ot(!0),St()):Ot()),!1}$t&&I.find("*:not(input)").attr("unselectable","on"),dt(),at&&N.after(nt).hide(),ut||U.hide(),d?N.after(I).hide():(1!==(t="parent"===u.appendTo?N.parent():qt(u.appendTo)).length&&(t=qt("body")),t.append(I)),pt(),ot.on("click.spectrum touchstart.spectrum",function(t){b=!1,I&&"block"==I.css("display")&&(b=!0),I&&(D||_t()),t.stopPropagation(),qt(t.target).is("input")||t.preventDefault()}),!N.is(":disabled")&&!0!==u.disabled||Et(),I.click(Vt),Y.change(wt),Y.on("paste",function(){setTimeout(wt,1)}),Y.keydown(function(t){13==t.keyCode&&wt()}),J.text(u.cancelText),J.on("click.spectrum",function(t){t.stopPropagation(),t.preventDefault(),Pt(),St()}),U.attr("title",u.clearText),U.on("click.spectrum",function(t){t.stopPropagation(),t.preventDefault(),ht=!0,Mt(),d&&Ot(!0)}),Z.text(u.chooseText),Z.on("click.spectrum",function(t){t.stopPropagation(),t.preventDefault(),$t&&Y.is(":focus")&&Y.trigger("change"),Y.hasClass("sp-validation-error")||(Ot(!0),St())}),tt.text(u.showPaletteOnly?u.togglePaletteMoreText:u.togglePaletteLessText),tt.on("click.spectrum",function(t){t.stopPropagation(),t.preventDefault(),u.showPaletteOnly=!u.showPaletteOnly,u.showPaletteOnly||d||I.css("left","-="+($.outerWidth(!0)+5)),dt()}),Xt(W,function(t,e,r){A=t/x,ht=!1,r.shiftKey&&(A=Math.round(10*A)/10),Mt()},mt,yt),Xt(L,function(t,e){S=parseFloat(e/_),ht=!1,u.showAlpha||(A=1),Mt()},mt,yt),Xt(z,function(t,e,r){var a,n,o;r.shiftKey?j||(a=P*m,n=y-F*y,o=Math.abs(t-a)>Math.abs(e-n),j=o?"x":"y"):j=null;var i=!j||"y"===j;j&&"x"!==j||(P=parseFloat(t/m)),i&&(F=parseFloat((y-e)/y)),ht=!1,u.showAlpha||(A=1),Mt()},mt,yt),st?(Ft(st),Ht(),ct=u.preferredFormat||tinycolor(st).format,gt(st)):Ht(),d&&xt();var r=$t?"mousedown.spectrum":"click.spectrum touchstart.spectrum";G.on(r,".sp-thumb-el",e),Q.on(r,".sp-thumb-el:nth-child(1)",{ignore:!0},e)}();var jt={show:xt,hide:St,toggle:_t,reflow:Tt,option:function(t,e){return t===Nt?qt.extend({},u):e===Nt?u[t]:(u[t]=e,"preferredFormat"===t&&(ct=u.preferredFormat),void dt())},enable:function(){D=!1,N.attr("disabled",!1),ot.removeClass("sp-disabled")},disable:Et,offset:function(t){u.offset=t,Tt()},set:function(t){Ft(t),Ot()},get:At,destroy:function(){N.show(),ot.off("click.spectrum touchstart.spectrum"),I.remove(),nt.remove(),It[jt.id]=null},container:I};return jt.id=It.push(jt)-1,jt}function r(){}function Vt(t){t.stopPropagation()}function Wt(t,e){var r=Array.prototype.slice,a=r.call(arguments,2);return function(){return t.apply(e,a.concat(r.call(arguments)))}}function Xt(i,s,e,t){s=s||function(){},e=e||function(){},t=t||function(){};var l=document,c=!1,f={},h=0,u=0,d="ontouchstart"in window,r={};function p(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),t.returnValue=!1}function a(t){if(c){if($t&&l.documentMode<9&&!t.button)return g();var e=t.originalEvent&&t.originalEvent.touches&&t.originalEvent.touches[0],r=e&&e.pageX||t.pageX,a=e&&e.pageY||t.pageY,n=Math.max(0,Math.min(r-f.left,u)),o=Math.max(0,Math.min(a-f.top,h));d&&p(t),s.apply(i,[n,o,t])}}function g(){c&&(qt(l).off(r),qt(l.body).removeClass("sp-dragging"),setTimeout(function(){t.apply(i,arguments)},0)),c=!1}r.selectstart=p,r.dragstart=p,r["touchmove mousemove"]=a,r["touchend mouseup"]=g,qt(i).on("touchstart mousedown",function(t){(t.which?3==t.which:2==t.button)||c||!1!==e.apply(i,arguments)&&(c=!0,h=qt(i).height(),u=qt(i).width(),f=qt(i).offset(),qt(l).on(r),qt(l.body).addClass("sp-dragging"),a(t),p(t))})}function Yt(){return qt.fn.spectrum.inputTypeColorSupport()}var i="spectrum.id";qt.fn.spectrum=function(r,t){if("string"!=typeof r)return this.spectrum("destroy").each(function(){var t=o(this,qt.extend({},qt(this).data(),r));qt(this).data(i,t.id)});var a=this,n=Array.prototype.slice.call(arguments,1);return this.each(function(){var t=It[qt(this).data(i)];if(t){var e=t[r];if(!e)throw new Error("Spectrum: no such method: '"+r+"'");"get"==r?a=t.get():"container"==r?a=t.container:"option"==r?a=t.option.apply(t,n):"destroy"==r?(t.destroy(),qt(this).removeData(i)):e.apply(t,n)}}),a},qt.fn.spectrum.load=!0,qt.fn.spectrum.loadOpts={},qt.fn.spectrum.draggable=Xt,qt.fn.spectrum.defaults=Dt,qt.fn.spectrum.inputTypeColorSupport=function t(){var e;return void 0===t._cachedResult&&(e=qt("<input type='color'/>")[0],t._cachedResult="color"===e.type&&""!==e.value),t._cachedResult},qt.spectrum={},qt.spectrum.localization={},qt.spectrum.palettes={},qt.fn.spectrum.processNativeColorInputs=function(){var t=qt("input[type=color]");t.length&&!Yt()&&t.spectrum({preferredFormat:"hex6"})},function(){var o=/^[\s,#]+/,i=/\s+$/,a=0,c=Math,s=c.round,f=c.min,h=c.max,t=c.random,u=function(t,e){if(e=e||{},(t=t||"")instanceof u)return t;if(!(this instanceof u))return new u(t,e);var r=function(t){var e={r:0,g:0,b:0},r=1,a=!1,n=!1;"string"==typeof t&&(t=function(t){t=t.replace(o,"").replace(i,"").toLowerCase();var e,r=!1;if(P[t])t=P[t],r=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};if(e=N.rgb.exec(t))return{r:e[1],g:e[2],b:e[3]};if(e=N.rgba.exec(t))return{r:e[1],g:e[2],b:e[3],a:e[4]};if(e=N.hsl.exec(t))return{h:e[1],s:e[2],l:e[3]};if(e=N.hsla.exec(t))return{h:e[1],s:e[2],l:e[3],a:e[4]};if(e=N.hsv.exec(t))return{h:e[1],s:e[2],v:e[3]};if(e=N.hsva.exec(t))return{h:e[1],s:e[2],v:e[3],a:e[4]};if(e=N.hex8.exec(t))return{a:function(t){return R(t)/255}(e[1]),r:R(e[2]),g:R(e[3]),b:R(e[4]),format:r?"name":"hex8"};if(e=N.hex6.exec(t))return{r:R(e[1]),g:R(e[2]),b:R(e[3]),format:r?"name":"hex"};if(e=N.hex3.exec(t))return{r:R(e[1]+""+e[1]),g:R(e[2]+""+e[2]),b:R(e[3]+""+e[3]),format:r?"name":"hex"};return!1}(t));"object"==typeof t&&(t.hasOwnProperty("r")&&t.hasOwnProperty("g")&&t.hasOwnProperty("b")?(e=function(t,e,r){return{r:255*M(t,255),g:255*M(e,255),b:255*M(r,255)}}(t.r,t.g,t.b),a=!0,n="%"===String(t.r).substr(-1)?"prgb":"rgb"):t.hasOwnProperty("h")&&t.hasOwnProperty("s")&&t.hasOwnProperty("v")?(t.s=T(t.s),t.v=T(t.v),e=function(t,e,r){t=6*M(t,360),e=M(e,100),r=M(r,100);var a=c.floor(t),n=t-a,o=r*(1-e),i=r*(1-n*e),s=r*(1-(1-n)*e),l=a%6;return{r:255*[r,i,o,o,s,r][l],g:255*[s,r,r,i,o,o][l],b:255*[o,o,s,r,r,i][l]}}(t.h,t.s,t.v),a=!0,n="hsv"):t.hasOwnProperty("h")&&t.hasOwnProperty("s")&&t.hasOwnProperty("l")&&(t.s=T(t.s),t.l=T(t.l),e=function(t,e,r){var a,n,o;function i(t,e,r){return r<0&&(r+=1),1<r&&--r,r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}{var s,l;t=M(t,360),e=M(e,100),r=M(r,100),0===e?a=n=o=r:(a=i(l=2*r-(s=r<.5?r*(1+e):r+e-r*e),s,t+1/3),n=i(l,s,t),o=i(l,s,t-1/3))}return{r:255*a,g:255*n,b:255*o}}(t.h,t.s,t.l),a=!0,n="hsl"),t.hasOwnProperty("a")&&(r=t.a));return r=A(r),{ok:a,format:t.format||n,r:f(255,h(e.r,0)),g:f(255,h(e.g,0)),b:f(255,h(e.b,0)),a:r}}(t);this._originalInput=t,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=s(1e3*this._a)/1e3,this._format=e.format||r.format,this._gradientType=e.gradientType,this._r<1&&(this._r=s(this._r)),this._g<1&&(this._g=s(this._g)),this._b<1&&(this._b=s(this._b)),this._ok=r.ok,this._tc_id=a++};function n(t,e,r){t=M(t,255),e=M(e,255),r=M(r,255);var a,n=h(t,e,r),o=f(t,e,r),i=(n+o)/2;if(n==o)a=l=0;else{var s=n-o,l=.5<i?s/(2-n-o):s/(n+o);switch(n){case t:a=(e-r)/s+(e<r?6:0);break;case e:a=(r-t)/s+2;break;case r:a=(t-e)/s+4}a/=6}return{h:a,s:l,l:i}}function l(t,e,r){t=M(t,255),e=M(e,255),r=M(r,255);var a,n=h(t,e,r),o=f(t,e,r),i=n,s=n-o,l=0===n?0:s/n;if(n==o)a=0;else{switch(n){case t:a=(e-r)/s+(e<r?6:0);break;case e:a=(r-t)/s+2;break;case r:a=(t-e)/s+4}a/=6}return{h:a,s:l,v:i}}function e(t,e,r,a){var n=[O(s(t).toString(16)),O(s(e).toString(16)),O(s(r).toString(16))];return a&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function d(t,e,r,a){var n;return[O((n=a,Math.round(255*parseFloat(n)).toString(16))),O(s(t).toString(16)),O(s(e).toString(16)),O(s(r).toString(16))].join("")}function r(t,e){e=0===e?0:e||10;var r=u(t).toHsl();return r.s-=e/100,r.s=H(r.s),u(r)}function p(t,e){e=0===e?0:e||10;var r=u(t).toHsl();return r.s+=e/100,r.s=H(r.s),u(r)}function g(t){return u(t).desaturate(100)}function b(t,e){e=0===e?0:e||10;var r=u(t).toHsl();return r.l+=e/100,r.l=H(r.l),u(r)}function v(t,e){e=0===e?0:e||10;var r=u(t).toRgb();return r.r=h(0,f(255,r.r-s(-e/100*255))),r.g=h(0,f(255,r.g-s(-e/100*255))),r.b=h(0,f(255,r.b-s(-e/100*255))),u(r)}function m(t,e){e=0===e?0:e||10;var r=u(t).toHsl();return r.l-=e/100,r.l=H(r.l),u(r)}function y(t,e){var r=u(t).toHsl(),a=(s(r.h)+e)%360;return r.h=a<0?360+a:a,u(r)}function w(t){var e=u(t).toHsl();return e.h=(e.h+180)%360,u(e)}function _(t){var e=u(t).toHsl(),r=e.h;return[u(t),u({h:(r+120)%360,s:e.s,l:e.l}),u({h:(r+240)%360,s:e.s,l:e.l})]}function x(t){var e=u(t).toHsl(),r=e.h;return[u(t),u({h:(r+90)%360,s:e.s,l:e.l}),u({h:(r+180)%360,s:e.s,l:e.l}),u({h:(r+270)%360,s:e.s,l:e.l})]}function k(t){var e=u(t).toHsl(),r=e.h;return[u(t),u({h:(r+72)%360,s:e.s,l:e.l}),u({h:(r+216)%360,s:e.s,l:e.l})]}function C(t,e,r){e=e||6,r=r||30;var a=u(t).toHsl(),n=360/r,o=[u(t)];for(a.h=(a.h-(n*e>>1)+720)%360;--e;)a.h=(a.h+n)%360,o.push(u(a));return o}function S(t,e){e=e||6;for(var r=u(t).toHsv(),a=r.h,n=r.s,o=r.v,i=[],s=1/e;e--;)i.push(u({h:a,s:n,v:o})),o=(o+s)%1;return i}u.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},setAlpha:function(t){return this._a=A(t),this._roundA=s(1e3*this._a)/1e3,this},toHsv:function(){var t=l(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=l(this._r,this._g,this._b),e=s(360*t.h),r=s(100*t.s),a=s(100*t.v);return 1==this._a?"hsv("+e+", "+r+"%, "+a+"%)":"hsva("+e+", "+r+"%, "+a+"%, "+this._roundA+")"},toHsl:function(){var t=n(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=n(this._r,this._g,this._b),e=s(360*t.h),r=s(100*t.s),a=s(100*t.l);return 1==this._a?"hsl("+e+", "+r+"%, "+a+"%)":"hsla("+e+", "+r+"%, "+a+"%, "+this._roundA+")"},toHex:function(t){return e(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(){return d(this._r,this._g,this._b,this._a)},toHex8String:function(){return"#"+this.toHex8()},toRgb:function(){return{r:s(this._r),g:s(this._g),b:s(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+s(this._r)+", "+s(this._g)+", "+s(this._b)+")":"rgba("+s(this._r)+", "+s(this._g)+", "+s(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:s(100*M(this._r,255))+"%",g:s(100*M(this._g,255))+"%",b:s(100*M(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+s(100*M(this._r,255))+"%, "+s(100*M(this._g,255))+"%, "+s(100*M(this._b,255))+"%)":"rgba("+s(100*M(this._r,255))+"%, "+s(100*M(this._g,255))+"%, "+s(100*M(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&F[e(this._r,this._g,this._b,!0)]||!1},toFilter:function(t){var e="#"+d(this._r,this._g,this._b,this._a),r=e,a=this._gradientType?"GradientType = 1, ":"";return t&&(r=u(t).toHex8String()),"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+e+",endColorstr="+r+")"},toString:function(t){var e=!!t;t=t||this._format;var r=!1,a=this._a<1&&0<=this._a;return e||!a||"hex"!==t&&"hex6"!==t&&"hex3"!==t&&"name"!==t?("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString()):"name"===t&&0===this._a?this.toName():this.toRgbString()},_applyModification:function(t,e){var r=t.apply(null,[this].concat([].slice.call(e)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(b,arguments)},brighten:function(){return this._applyModification(v,arguments)},darken:function(){return this._applyModification(m,arguments)},desaturate:function(){return this._applyModification(r,arguments)},saturate:function(){return this._applyModification(p,arguments)},greyscale:function(){return this._applyModification(g,arguments)},spin:function(){return this._applyModification(y,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(C,arguments)},complement:function(){return this._applyCombination(w,arguments)},monochromatic:function(){return this._applyCombination(S,arguments)},splitcomplement:function(){return this._applyCombination(k,arguments)},triad:function(){return this._applyCombination(_,arguments)},tetrad:function(){return this._applyCombination(x,arguments)}},u.fromRatio=function(t,e){if("object"==typeof t){var r={};for(var a in t)t.hasOwnProperty(a)&&(r[a]="a"===a?t[a]:T(t[a]));t=r}return u(t,e)},u.equals=function(t,e){return!(!t||!e)&&u(t).toRgbString()==u(e).toRgbString()},u.random=function(){return u.fromRatio({r:t(),g:t(),b:t()})},u.mix=function(t,e,r){r=0===r?0:r||50;var a=u(t).toRgb(),n=u(e).toRgb(),o=r/100,i=2*o-1,s=n.a-a.a,l=i*s==-1?i:(i+s)/(1+i*s),c=1-(l=(l+1)/2),f={r:n.r*l+a.r*c,g:n.g*l+a.g*c,b:n.b*l+a.b*c,a:n.a*o+a.a*(1-o)};return u(f)},u.readability=function(t,e){var r=u(t),a=u(e),n=r.toRgb(),o=a.toRgb(),i=r.getBrightness(),s=a.getBrightness(),l=Math.max(n.r,o.r)-Math.min(n.r,o.r)+Math.max(n.g,o.g)-Math.min(n.g,o.g)+Math.max(n.b,o.b)-Math.min(n.b,o.b);return{brightness:Math.abs(i-s),color:l}},u.isReadable=function(t,e){var r=u.readability(t,e);return 125<r.brightness&&500<r.color},u.mostReadable=function(t,e){for(var r=null,a=0,n=!1,o=0;o<e.length;o++){var i=u.readability(t,e[o]),s=125<i.brightness&&500<i.color,l=i.brightness/125*3+i.color/500;(s&&!n||s&&n&&a<l||!s&&!n&&a<l)&&(n=s,a=l,r=u(e[o]))}return r};var P=u.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},F=u.hexNames=function(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[t[r]]=r);return e}(P);function A(t){return t=parseFloat(t),(isNaN(t)||t<0||1<t)&&(t=1),t}function M(t,e){var r;"string"==typeof(r=t)&&-1!=r.indexOf(".")&&1===parseFloat(r)&&(t="100%");var a,n="string"==typeof(a=t)&&-1!=a.indexOf("%");return t=f(e,h(0,parseFloat(t))),n&&(t=parseInt(t*e,10)/100),c.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function H(t){return f(1,h(0,t))}function R(t){return parseInt(t,16)}function O(t){return 1==t.length?"0"+t:""+t}function T(t){return t<=1&&(t=100*t+"%"),t}var E,j,q,N=(j="[\\s|\\(]+("+(E="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+E+")[,|\\s]+("+E+")\\s*\\)?",q="[\\s|\\(]+("+E+")[,|\\s]+("+E+")[,|\\s]+("+E+")[,|\\s]+("+E+")\\s*\\)?",{rgb:new RegExp("rgb"+j),rgba:new RegExp("rgba"+q),hsl:new RegExp("hsl"+j),hsla:new RegExp("hsla"+q),hsv:new RegExp("hsv"+j),hsva:new RegExp("hsva"+q),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});window.tinycolor=u}(),qt(function(){qt.fn.spectrum.load&&qt.fn.spectrum.processNativeColorInputs()})}),function(){var t=$.fn.spectrum.defaults,e={};for(var r in t)"function"==typeof t[r]&&(e[r]=t[r]);$.extend(!0,t,{show:function(){return $(".mfColorPickerOptions").remove(),$(".sp-palette-container").prepend('<div class="mfColorPickerOptions"><div class="mfAddtoFav"><i class="ico-plus2"></i>Add</div><div class="mfManageFav"><i class="ico-checklist"></i>Manage</div></div>'),$(".mfAddtoFav,.mfManageFav").off("click"),$(".mfAddtoFav").on("click",mf_main.editorController.favouriteColorController.addFavColorHandler),$(".mfManageFav").click(function(){mf_main.editorController.favouriteColorController.manageFavColorHandler()}),0==mf_main.editorController.projectObj.favouriteColors.length?$(".mfColorPickerOptions").hide():$(".mfColorPickerOptions").show(),!0}})}();