(function(a){a.fn.bgIframe=a.fn.bgiframe=function(c){if(a.browser.msie&&/6.0/.test(navigator.userAgent)){c=a.extend({top:"auto",left:"auto",width:"auto",height:"auto",opacity:true,src:"javascript:false;"},c||{});var d=function(e){return e&&e.constructor==Number?e+"px":e},b='<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+c.src+'"style="display:block;position:absolute;z-index:-1;'+(c.opacity!==false?"filter:Alpha(Opacity='0');":"")+"top:"+(c.top=="auto"?"expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+'px')":d(c.top))+";left:"+(c.left=="auto"?"expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+'px')":d(c.left))+";width:"+(c.width=="auto"?"expression(this.parentNode.offsetWidth+'px')":d(c.width))+";height:"+(c.height=="auto"?"expression(this.parentNode.offsetHeight+'px')":d(c.height))+';"/>';return this.each(function(){if(a("> iframe.bgiframe",this).length==0){this.insertBefore(document.createElement(b),this.firstChild)}})}return this}})(jQuery);