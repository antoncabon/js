(function() {
    var bloggerjs = document.createElement('script');
    bloggerjs.type = 'text/javascript';
    bloggerjs.async = true;
    bloggerjs.src = '//'+disqus_shortname+'.disqus.com/blogger_item.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(bloggerjs);
})();
(function() {
    var bloggerjs = document.createElement('script');
    bloggerjs.type = 'text/javascript';
    bloggerjs.async = true;
    bloggerjs.src = '//'+disqus_shortname+'.disqus.com/blogger_index.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(bloggerjs);
})();

  (function() {
    var dr = document.createElement('script');
    dr.type = 'text/javascript'; dr.async = true;
    dr.src = '//share.donreach.com/buttons.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dr);
  })();

var imgDefer=document.getElementsByTagName("img");for(var i=0;i<imgDefer.length;i++){if(imgDefer[i].getAttribute("data-src")){imgDefer[i].setAttribute("src",imgDefer[i].getAttribute("data-src"))}};

var mql = window.matchMedia('screen and (min-width: 60em)');if (mql.matches){
function makemeSticky(e){function t(){var e=s.getBoundingClientRect();e.top<0?(n.className=a+" makesticking",n.style.width=i+"px"):n.className=a}var n=document.getElementById(e),s=document.createElement("div");n.parentNode.insertBefore(s,n);var i=n.offsetWidth,a=n.className+" makesticky";window.addEventListener("scroll",t,!1)}makemeSticky("HTML1");
};

!function(e,n,t){var o,c=e.getElementsByTagName(n)[0];e.getElementById(t)||(o=e.createElement(n),o.id=t,o.src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3",c.parentNode.insertBefore(o,c))}(document,"script","facebook-jssdk");

    var divs = ["disqus-box", "blogger-box", "facebook-box"];
    var visibleDivId = null;
    function toggleVisibility(divId) {
      if(visibleDivId === divId) {
        visibleDivId = null;
      } else {
        visibleDivId = divId;
      }
      hideNonVisibleDivs();
    }
    function hideNonVisibleDivs() {
      var i, divId, div;
      for(i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);
        if(visibleDivId === divId) {
          div.style.display = "block";
        } else {
          div.style.display = "none";
        }
      }
    }


var pres=document.querySelectorAll("blockquote,pre,ul.emoji-list li span,.comment_body p i[rel=pre]");for(var i=0;i<pres.length;i++){pres[i].addEventListener("dblclick",function(){var e=getSelection();var t=document.createRange();t.selectNodeContents(this);e.removeAllRanges();e.addRange(t)},false)};

function toggleNavPanel(e){var n=document.getElementById(e),l=document.getElementById("tombol-pesan"),t="block";n.style.display==t?(n.style.display="none",l.innerHTML="<i class='fa fa-plus-square-o'></i>"):(n.style.display="block",l.innerHTML="<i class='fa fa-minus-square-o'></i>")};
function toggleNavPanel2(e){var n=document.getElementById(e),l=document.getElementById("parser-button"),t="block";n.style.display==t?(n.style.display="none",l.innerHTML="Show Parser Box"):(n.style.display="block",l.innerHTML="Hide Parse Box")};
function makemeSticky3(e){function t(){var e=s.getBoundingClientRect();e.top<0?(n.className=a+" makesticking3",n.style.width=i+"px"):n.className=a}var n=document.getElementById(e),s=document.createElement("div");n.parentNode.insertBefore(s,n);var i=n.offsetWidth,a=n.className+" makesticky3";window.addEventListener("scroll",t,!1)}makemeSticky3("pesan-komentar");

$(".commentbtn").click(function (e) {
$(this).addClass("btncurrent").siblings().removeClass("btncurrent");
});

$('i[rel="pre"]').replaceWith(function() { return $('<pre><code>' + $(this).html() + '</code></pre>'); });

function cdClear() {
  var wtarea = document.getElementById('codes');
  wtarea.value = '';
  wtarea.focus();
  var clears = document.querySelectorAll('#cvrt3, #cvrt4, #cvrt5, #cvrt6, #cvrt7, #cvrt8, #cvrt9, #cvrt10, #cvrt11')
  for (var i = 0; i < clears.length; i++)
{
  clears[i].disabled = false
}
}
function cdClear2() {
  var wtarea = document.getElementById('codes2');
  wtarea.value = '';
  wtarea.focus();
  var clears = document.querySelectorAll('#cvrt, #cvrt2')
  for (var i = 0; i < clears.length; i++)
{
  clears[i].disabled = false
}
}

function preConvert() {
var ctarea = document.getElementById('codes'),
    cv = ctarea.value,
    opt1 = document.getElementById('opt1'),
    opt2 = document.getElementById('opt2'),
    opt3 = document.getElementById('opt3'),
    opt4 = document.getElementById('opt4'),
    opt5 = document.getElementById('opt5'),
    opt10 = document.getElementById('opt10');
  cv = cv.replace(/\t/g, "    ");
 if (opt10.checked) { if (opt1.checked) cv = cv.replace(/&/g, "&amp;");
  if (opt2.checked) cv = cv.replace(/'/g, "&#039;");
  if (opt3.checked) cv = cv.replace(/"/g, "&quot;");
  if (opt4.checked) cv = cv.replace(/</g, "&lt;");
  if (opt5.checked) cv = cv.replace(/>/g, "&gt;");
  cv = cv.replace(/^/, "<pre>");
      cv = cv.replace(/$/, "</pre>");
  ctarea.value = cv;
  ctarea.focus();
  ctarea.select();}
};
function codeConvert() {
var ctarea = document.getElementById('codes'),
    cv = ctarea.value,
    opt1 = document.getElementById('opt1'),
    opt2 = document.getElementById('opt2'),
    opt3 = document.getElementById('opt3'),
    opt4 = document.getElementById('opt4'),
    opt5 = document.getElementById('opt5'),
    opt11 = document.getElementById('opt11');
  cv = cv.replace(/\t/g, "    ");
  if (opt11.checked) { if (opt1.checked) cv = cv.replace(/&/g, "&amp;");
  if (opt2.checked) cv = cv.replace(/'/g, "&#039;");
  if (opt3.checked) cv = cv.replace(/"/g, "&quot;");
  if (opt4.checked) cv = cv.replace(/</g, "&lt;");
  if (opt5.checked) cv = cv.replace(/>/g, "&gt;");
  cv = cv.replace(/^/, "<code>");
      cv = cv.replace(/$/, "</code>");
  ctarea.value = cv;
  ctarea.focus();
  ctarea.select();}
};
function precodeConvert() {
var ctarea = document.getElementById('codes'),
    cv = ctarea.value,
    opt1 = document.getElementById('opt1'),
    opt2 = document.getElementById('opt2'),
    opt3 = document.getElementById('opt3'),
    opt4 = document.getElementById('opt4'),
    opt5 = document.getElementById('opt5'),
    opt12 = document.getElementById('opt12');
  cv = cv.replace(/\t/g, "    ");
  if (opt12.checked) { if (opt1.checked) cv = cv.replace(/&/g, "&amp;");
  if (opt2.checked) cv = cv.replace(/'/g, "&#039;");
  if (opt3.checked) cv = cv.replace(/"/g, "&quot;");
  if (opt4.checked) cv = cv.replace(/</g, "&lt;");
  if (opt5.checked) cv = cv.replace(/>/g, "&gt;");
  cv = cv.replace(/^/, "<pre><code>");
      cv = cv.replace(/$/, "</code></pre>");
  ctarea.value = cv;
  ctarea.focus();
  ctarea.select();}
};
function spoilerConvert() {
var ctarea = document.getElementById('codes'),
    cv = ctarea.value,
    opt13 = document.getElementById('opt13')
  cv = cv.replace(/\t/g, "    ");
    if (opt13.checked) {cv = cv.replace(/^/, "<spoiler>");
      cv = cv.replace(/$/, "</spoiler>");
  ctarea.value = cv;
  ctarea.focus();
  ctarea.select();}
};
function strongConvert() {
var ctarea = document.getElementById('codes'),
    cv = ctarea.value,
    opt6 = document.getElementById('opt6')
  cv = cv.replace(/\t/g, "    ");
    if (opt6.checked) {cv = cv.replace(/^/, "<strong>");
      cv = cv.replace(/$/, "</strong>");
  ctarea.value = cv;
  ctarea.focus();
  ctarea.select();}
};
function emConvert() {
var ctarea = document.getElementById('codes'),
    cv = ctarea.value,
    opt7 = document.getElementById('opt7')
  cv = cv.replace(/\t/g, "    ");
    if (opt7.checked) {cv = cv.replace(/^/, "<em>");
      cv = cv.replace(/$/, "</em>");
  ctarea.value = cv;
  ctarea.focus();
  ctarea.select();}
};

function uConvert() {
var ctarea = document.getElementById('codes'),
    cv = ctarea.value,
    opt8 = document.getElementById('opt8')
  cv = cv.replace(/\t/g, "    ");
    if (opt8.checked) {cv = cv.replace(/^/, "<u>");
      cv = cv.replace(/$/, "</u>");
  ctarea.value = cv;
  ctarea.focus();
  ctarea.select();}
};
function strikeConvert() {
var ctarea = document.getElementById('codes'),
    cv = ctarea.value,
    opt9 = document.getElementById('opt9')
  cv = cv.replace(/\t/g, "    ");
    if (opt9.checked) {cv = cv.replace(/^/, "<strike>");
      cv = cv.replace(/$/, "</strike>");
  ctarea.value = cv;
  ctarea.focus();
  ctarea.select();}
};
function embedConvert() {
var ctarea = document.getElementById('codes'),
    cv = ctarea.value,
    opt20 = document.getElementById('opt20')
  cv = cv.replace(/\t/g, "    ");
    if (opt20.checked){ cv = cv.replace(/^/, "<iframe src=\"https://embed.disqus.com/p/");
      cv = cv.replace(/$/, "\" style=\"border:0;width:100%;height:300px;\" seamless=\"seamless\" scrolling=\"no\" allowtransparency=\"true\"><\/iframe>");
  ctarea.value = cv;
  ctarea.focus();
  ctarea.select();}
};

function cdConvert() {
  var ctarea = document.getElementById('codes2'),
    cv = ctarea.value,
    opt14 = document.getElementById('opt14'),
    opt15 = document.getElementById('opt15'),
    opt16 = document.getElementById('opt16'),
    opt17 = document.getElementById('opt17'),
    opt18 = document.getElementById('opt18')
  cv = cv.replace(/\t/g, "    ");
  if (opt14.checked) cv = cv.replace(/&/g, "&amp;");
  if (opt15.checked) cv = cv.replace(/'/g, "&#039;");
  if (opt16.checked) cv = cv.replace(/"/g, "&quot;");
  if (opt17.checked) cv = cv.replace(/</g, "&lt;");
  if (opt18.checked) cv = cv.replace(/>/g, "&gt;");
  if (cv.lastIndexOf('\n') != -1 || cv.length > 40) {
    cv = cv.replace(/^/, "<i rel=\"pre\">");
  } else {
    cv = cv.replace(/^/, "<i rel=\"code\">");
  };
  cv = cv.replace(/$/, "</i>");
  ctarea.value = cv;
  ctarea.focus();
  ctarea.select();
};
function imgConvert() {
var ctarea = document.getElementById('codes2'),
    cv = ctarea.value,
    opt19 = document.getElementById('opt19')
  cv = cv.replace(/\t/g, "    ");
    if (opt19.checked){ cv = cv.replace(/^/, "<i rel=\"image\">");
      cv = cv.replace(/$/, "</i>");
  ctarea.value = cv;
  ctarea.focus();
  ctarea.select();}
};

function toggleNavPanel5(e) {
  var n = document.getElementById(e),
    l = document.getElementById("tombol-open"),
    t = "block";
  n.style.display == t ? (n.style.display = "none", l.innerHTML = "<i class='fa fa-plus-square-o'></i>") : (n.style.display = "block", l.innerHTML = "<i class='fa fa-minus-square-o'></i>")
};

    function loadscript(filename) {
      var scr=document.createElement('script');
      scr.setAttribute("type","text/javascript");
      scr.setAttribute("src",filename);
      document.getElementsByTagName("head")[0].appendChild(scr);
    }
    var waitElm=null;
    function urltinyfyprompt_callback(response) {
      if(waitElm) waitElm.style.display="none";
      var txt="Short URL";
      if(response.title && response.title!="") txt+=' for "'+response.title+'"';
      else if(response.longurl && response.longurl!="") txt+=" for "+response.longurl;
      if(response.tinyurl && response.tinyurl!="")
        prompt(txt+":", response.tinyurl);
      else
        alert("Could not get short URL, try again later." + ((response.error && response.error != "") ? ("nError: " + response.error) : ""));
    }
    function shortenUrl(elm, long_url, service) {
      waitElm=elm.parentNode.nextSibling;
      if(waitElm) waitElm.style.display="inline";
      loadscript("http://urltinyfy.appspot.com/"+service+"?unify=1&url="+encodeURIComponent(long_url) + "&callback=urltinyfyprompt_callback");
    }

(function($){    
    var newerLink = $('a.blog-pager-newer-link'); 
    var olderLink = $('a.blog-pager-older-link'); 
    $.get(newerLink.attr('href'), function (data) { 
     newerLink.html($(data).find('.post h1.post-title').text());    
    },"html"); 
    $.get(olderLink.attr('href'), function (data2) { 
     olderLink.html($(data2).find('.post h1.post-title').text());    
    },"html"); 
})(jQuery);

function popup(o){var t=650,n=400,e=(screen.width-t)/2,i=(screen.height-n)/2,s="width="+t+", height="+n;return s+=", top="+i+", left="+e,s+=", directories=no",s+=", location=no",s+=", menubar=no",s+=", resizable=no",s+=", scrollbars=no",s+=", status=no",s+=", toolbar=no",newwin=window.open(o,"windowname5",s),window.focus&&newwin.focus(),!1};
function showShoutmix(){document.getElementById("chat_box2").style.display="block";document.getElementById("authorbox").style.display="none"};function hideShoutmix(){document.getElementById("chat_box2").style.display="none";document.getElementById("authorbox").style.display="block"}

/*! highlight.js v9.3.0 | BSD3 License | git.io/hljslicense */
!function(e){var n="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):n&&(n.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return n.hljs}))}(function(e){function n(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0==t.index}function a(e){return/^(no-?highlight|plain|text)$/i.test(e)}function i(e){var n,t,r,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",t=/\blang(?:uage)?-([\w-]+)\b/i.exec(i))return w(t[1])?t[1]:"no-highlight";for(i=i.split(/\s+/),n=0,r=i.length;r>n;n++)if(w(i[n])||a(i[n]))return i[n]}function o(e,n){var t,r={};for(t in e)r[t]=e[t];if(n)for(t in n)r[t]=n[t];return r}function u(e){var n=[];return function r(e,a){for(var i=e.firstChild;i;i=i.nextSibling)3==i.nodeType?a+=i.nodeValue.length:1==i.nodeType&&(n.push({event:"start",offset:a,node:i}),a=r(i,a),t(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:i}));return a}(e,0),n}function c(e,r,a){function i(){return e.length&&r.length?e[0].offset!=r[0].offset?e[0].offset<r[0].offset?e:r:"start"==r[0].event?e:r:e.length?e:r}function o(e){function r(e){return" "+e.nodeName+'="'+n(e.value)+'"'}f+="<"+t(e)+Array.prototype.map.call(e.attributes,r).join("")+">"}function u(e){f+="</"+t(e)+">"}function c(e){("start"==e.event?o:u)(e.node)}for(var s=0,f="",l=[];e.length||r.length;){var g=i();if(f+=n(a.substr(s,g[0].offset-s)),s=g[0].offset,g==e){l.reverse().forEach(u);do c(g.splice(0,1)[0]),g=i();while(g==e&&g.length&&g[0].offset==s);l.reverse().forEach(o)}else"start"==g[0].event?l.push(g[0].node):l.pop(),c(g.splice(0,1)[0])}return f+n(a.substr(s))}function s(e){function n(e){return e&&e.source||e}function t(t,r){return new RegExp(n(t),"m"+(e.cI?"i":"")+(r?"g":""))}function r(a,i){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var u={},c=function(n,t){e.cI&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");u[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof a.k?c("keyword",a.k):Object.keys(a.k).forEach(function(e){c(e,a.k[e])}),a.k=u}a.lR=t(a.l||/\w+/,!0),i&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=t(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=t(a.e)),a.tE=n(a.e)||"",a.eW&&i.tE&&(a.tE+=(a.e?"|":"")+i.tE)),a.i&&(a.iR=t(a.i)),void 0===a.r&&(a.r=1),a.c||(a.c=[]);var s=[];a.c.forEach(function(e){e.v?e.v.forEach(function(n){s.push(o(e,n))}):s.push("self"==e?a:e)}),a.c=s,a.c.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,i);var f=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(n).filter(Boolean);a.t=f.length?t(f.join("|"),!0):{exec:function(){return null}}}}r(e)}function f(e,t,a,i){function o(e,n){for(var t=0;t<n.c.length;t++)if(r(n.c[t].bR,e))return n.c[t]}function u(e,n){if(r(e.eR,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?u(e.parent,n):void 0}function c(e,n){return!a&&r(n.iR,e)}function g(e,n){var t=N.cI?n[0].toLowerCase():n[0];return e.k.hasOwnProperty(t)&&e.k[t]}function p(e,n,t,r){var a=r?"":E.classPrefix,i='<span class="'+a,o=t?"":"</span>";return i+=e+'">',i+n+o}function h(){if(!k.k)return n(M);var e="",t=0;k.lR.lastIndex=0;for(var r=k.lR.exec(M);r;){e+=n(M.substr(t,r.index-t));var a=g(k,r);a?(B+=a[1],e+=p(a[0],n(r[0]))):e+=n(r[0]),t=k.lR.lastIndex,r=k.lR.exec(M)}return e+n(M.substr(t))}function d(){var e="string"==typeof k.sL;if(e&&!R[k.sL])return n(M);var t=e?f(k.sL,M,!0,y[k.sL]):l(M,k.sL.length?k.sL:void 0);return k.r>0&&(B+=t.r),e&&(y[k.sL]=t.top),p(t.language,t.value,!1,!0)}function b(){L+=void 0!==k.sL?d():h(),M=""}function v(e,n){L+=e.cN?p(e.cN,"",!0):"",k=Object.create(e,{parent:{value:k}})}function m(e,n){if(M+=e,void 0===n)return b(),0;var t=o(n,k);if(t)return t.skip?M+=n:(t.eB&&(M+=n),b(),t.rB||t.eB||(M=n)),v(t,n),t.rB?0:n.length;var r=u(k,n);if(r){var a=k;a.skip?M+=n:(a.rE||a.eE||(M+=n),b(),a.eE&&(M=n));do k.cN&&(L+="</span>"),k.skip||(B+=k.r),k=k.parent;while(k!=r.parent);return r.starts&&v(r.starts,""),a.rE?0:n.length}if(c(n,k))throw new Error('Illegal lexeme "'+n+'" for mode "'+(k.cN||"<unnamed>")+'"');return M+=n,n.length||1}var N=w(e);if(!N)throw new Error('Unknown language: "'+e+'"');s(N);var x,k=i||N,y={},L="";for(x=k;x!=N;x=x.parent)x.cN&&(L=p(x.cN,"",!0)+L);var M="",B=0;try{for(var C,j,I=0;;){if(k.t.lastIndex=I,C=k.t.exec(t),!C)break;j=m(t.substr(I,C.index-I),C[0]),I=C.index+j}for(m(t.substr(I)),x=k;x.parent;x=x.parent)x.cN&&(L+="</span>");return{r:B,value:L,language:e,top:k}}catch(O){if(-1!=O.message.indexOf("Illegal"))return{r:0,value:n(t)};throw O}}function l(e,t){t=t||E.languages||Object.keys(R);var r={r:0,value:n(e)},a=r;return t.filter(w).forEach(function(n){var t=f(n,e,!1);t.language=n,t.r>a.r&&(a=t),t.r>r.r&&(a=r,r=t)}),a.language&&(r.second_best=a),r}function g(e){return E.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,n){return n.replace(/\t/g,E.tabReplace)})),E.useBR&&(e=e.replace(/\n/g,"<br>")),e}function p(e,n,t){var r=n?x[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}function h(e){var n=i(e);if(!a(n)){var t;E.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e;var r=t.textContent,o=n?f(n,r,!0):l(r),s=u(t);if(s.length){var h=document.createElementNS("http://www.w3.org/1999/xhtml","div");h.innerHTML=o.value,o.value=c(s,u(h),r)}o.value=g(o.value),e.innerHTML=o.value,e.className=p(e.className,n,o.language),e.result={language:o.language,re:o.r},o.second_best&&(e.second_best={language:o.second_best.language,re:o.second_best.r})}}function d(e){E=o(E,e)}function b(){if(!b.called){b.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,h)}}function v(){addEventListener("DOMContentLoaded",b,!1),addEventListener("load",b,!1)}function m(n,t){var r=R[n]=t(e);r.aliases&&r.aliases.forEach(function(e){x[e]=n})}function N(){return Object.keys(R)}function w(e){return e=(e||"").toLowerCase(),R[e]||R[x[e]]}var E={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},R={},x={};return e.highlight=f,e.highlightAuto=l,e.fixMarkup=g,e.highlightBlock=h,e.configure=d,e.initHighlighting=b,e.initHighlightingOnLoad=v,e.registerLanguage=m,e.listLanguages=N,e.getLanguage=w,e.inherit=o,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/},e.C=function(n,t,r){var a=e.inherit({cN:"comment",b:n,e:t,c:[]},r||{});return a.c.push(e.PWM),a.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e.METHOD_GUARD={b:"\\.\\s*"+e.UIR,r:0},e});hljs.registerLanguage("css",function(e){var c="[a-zA-Z-][a-zA-Z0-9_-]*",t={b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{eW:!0,eE:!0,c:[{b:/[\w-]+\(/,rB:!0,c:[{cN:"built_in",b:/[\w-]+/},{b:/\(/,e:/\)/,c:[e.ASM,e.QSM]}]},e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"number",b:"#[0-9A-Fa-f]+"},{cN:"meta",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,{cN:"selector-id",b:/#[A-Za-z0-9_-]+/},{cN:"selector-class",b:/\.[A-Za-z0-9_-]+/},{cN:"selector-attr",b:/\[/,e:/\]/,i:"$"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{b:"@",e:"[{;]",i:/:/,c:[{cN:"keyword",b:/\w+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[e.ASM,e.QSM,e.CSSNM]}]},{cN:"selector-tag",b:c,r:0},{b:"{",e:"}",i:/\S/,c:[e.CBCM,t]}]}});hljs.registerLanguage("php",function(e){var c={b:"\\$+[a-zA-Z_-ÃƒÂ¯Ã‚Â¿Ã‚Â½][a-zA-Z0-9_-ÃƒÂ¯Ã‚Â¿Ã‚Â½]*"},a={cN:"meta",b:/<\?(php)?|\?>/},i={cN:"string",c:[e.BE,a],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},e.inherit(e.ASM,{i:null}),e.inherit(e.QSM,{i:null})]},t={v:[e.BNM,e.CNM]};return{aliases:["php3","php4","php5","php6"],cI:!0,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[e.HCM,e.C("//","$",{c:[a]}),e.C("/\\*","\\*/",{c:[{cN:"doctag",b:"@[A-Za-z]+"}]}),e.C("__halt_compiler.+?;",!1,{eW:!0,k:"__halt_compiler",l:e.UIR}),{cN:"string",b:/<<<['"]?\w+['"]?$/,e:/^\w+;?$/,c:[e.BE,{cN:"subst",v:[{b:/\$\w+/},{b:/\{\$/,e:/\}/}]}]},a,c,{b:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{cN:"function",bK:"function",e:/[;{]/,eE:!0,i:"\\$|\\[|%",c:[e.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",c,e.CBCM,i,t]}]},{cN:"class",bK:"class interface",e:"{",eE:!0,i:/[:\(\$"]/,c:[{bK:"extends implements"},e.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[e.UTM]},{bK:"use",e:";",c:[e.UTM]},{b:"=>"},i,t]}});hljs.registerLanguage("javascript",function(e){return{aliases:["js","jsx"],k:{keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},e.ASM,e.QSM,{cN:"string",b:"`",e:"`",c:[e.BE,{cN:"subst",b:"\\$\\{",e:"\\}"}]},e.CLCM,e.CBCM,{cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{b:/</,e:/(\/\w+|\w+\/)>/,sL:"xml",c:[{b:/<\w+\s*\/>/,skip:!0},{b:/<\w+/,e:/(\/\w+|\w+\/)>/,skip:!0,c:["self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:[e.CLCM,e.CBCM]}],i:/\[|%/},{b:/\$[(.]/},e.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]},{bK:"constructor",e:/\{/,eE:!0}],i:/#(?!!)/}});hljs.registerLanguage("xml",function(s){var e="[A-Za-z0-9\\._:-]+",t={eW:!0,i:/</,r:0,c:[{cN:"attr",b:e,r:0},{b:/=\s*/,r:0,c:[{cN:"string",endsParent:!0,v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xsl","plist"],cI:!0,c:[{cN:"meta",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},s.C("<!--","-->",{r:10}),{b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{b:/<\?(php)?/,e:/\?>/,sL:"php",c:[{b:"/\\*",e:"\\*/",skip:!0}]},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{name:"style"},c:[t],starts:{e:"</style>",rE:!0,sL:["css","xml"]}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{name:"script"},c:[t],starts:{e:"</script>",rE:!0,sL:["actionscript","javascript","handlebars","xml"]}},{cN:"meta",v:[{b:/<\?xml/,e:/\?>/,r:10},{b:/<\?\w+/,e:/\?>/}]},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"name",b:/[^\/><\s]+/,r:0},t]}]}});hljs.initHighlighting();

!function(){/*

 Copyright (C) 2013 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 Copyright (C) 2006 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
(function(){function ba(g){function k(){try{M.doScroll("left")}catch(g){t.setTimeout(k,50);return}z("poll")}function z(k){if("readystatechange"!=k.type||"complete"==A.readyState)("load"==k.type?t:A)[B](p+k.type,z,!1),!q&&(q=!0)&&g.call(t,k.type||k)}var Y=A.addEventListener,q=!1,C=!0,x=Y?"addEventListener":"attachEvent",B=Y?"removeEventListener":"detachEvent",p=Y?"":"on";if("complete"==A.readyState)g.call(t,"lazy");else{if(A.createEventObject&&M.doScroll){try{C=!t.frameElement}catch(da){}C&&k()}A[x](p+
"DOMContentLoaded",z,!1);A[x](p+"readystatechange",z,!1);t[x](p+"load",z,!1)}}function U(){V&&ba(function(){var g=N.length;ca(g?function(){for(var k=0;k<g;++k)(function(g){t.setTimeout(function(){t.exports[N[g]].apply(t,arguments)},0)})(k)}:void 0)})}for(var t=window,A=document,M=A.documentElement,O=A.head||A.getElementsByTagName("head")[0]||M,B="",F=A.getElementsByTagName("script"),q=F.length;0<=--q;){var P=F[q],Z=P.src.match(/^[^?#]*\/run_prettify\.js(\?[^#]*)?(?:#.*)?$/);if(Z){B=Z[1]||"";P.parentNode.removeChild(P);
break}}var V=!0,H=[],Q=[],N=[];B.replace(/[?&]([^&=]+)=([^&]+)/g,function(g,k,z){z=decodeURIComponent(z);k=decodeURIComponent(k);"autorun"==k?V=!/^[0fn]/i.test(z):"lang"==k?H.push(z):"skin"==k?Q.push(z):"callback"==k&&N.push(z)});q=0;for(B=H.length;q<B;++q)(function(){var g=A.createElement("script");g.onload=g.onerror=g.onreadystatechange=function(){!g||g.readyState&&!/loaded|complete/.test(g.readyState)||(g.onerror=g.onload=g.onreadystatechange=null,--T,T||t.setTimeout(U,0),g.parentNode&&g.parentNode.removeChild(g),
g=null)};g.type="text/javascript";g.src="https://cdn.rawgit.com/google/code-prettify/master/loader/lang-"+encodeURIComponent(H[q])+".js";O.insertBefore(g,O.firstChild)})(H[q]);for(var T=H.length,F=[],q=0,B=Q.length;q<B;++q)F.push("https://cdn.rawgit.com/google/code-prettify/master/loader/skins/"+encodeURIComponent(Q[q])+".css");F.push("https://cdn.rawgit.com/google/code-prettify/master/loader/prettify.css");(function(g){function k(q){if(q!==z){var t=A.createElement("link");t.rel="stylesheet";t.type=
"text/css";q+1<z&&(t.error=t.onerror=function(){k(q+1)});t.href=g[q];O.appendChild(t)}}var z=g.length;k(0)})(F);var ca=function(){window.PR_SHOULD_USE_CONTINUATION=!0;var g;(function(){function k(a){function d(e){var b=e.charCodeAt(0);if(92!==b)return b;var a=e.charAt(1);return(b=W[a])?b:"0"<=a&&"7">=a?parseInt(e.substring(1),8):"u"===a||"x"===a?parseInt(e.substring(2),16):e.charCodeAt(1)}function f(e){if(32>e)return(16>e?"\\x0":"\\x")+e.toString(16);e=String.fromCharCode(e);return"\\"===e||"-"===
e||"]"===e||"^"===e?"\\"+e:e}function b(e){var b=e.substring(1,e.length-1).match(/\\u[0-9A-Fa-f]{4}|\\x[0-9A-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\s\S]|-|[^-\\]/g);e=[];var a="^"===b[0],c=["["];a&&c.push("^");for(var a=a?1:0,h=b.length;a<h;++a){var l=b[a];if(/\\[bdsw]/i.test(l))c.push(l);else{var l=d(l),n;a+2<h&&"-"===b[a+1]?(n=d(b[a+2]),a+=2):n=l;e.push([l,n]);65>n||122<l||(65>n||90<l||e.push([Math.max(65,l)|32,Math.min(n,90)|32]),97>n||122<l||e.push([Math.max(97,l)&-33,Math.min(n,122)&-33]))}}e.sort(function(e,
a){return e[0]-a[0]||a[1]-e[1]});b=[];h=[];for(a=0;a<e.length;++a)l=e[a],l[0]<=h[1]+1?h[1]=Math.max(h[1],l[1]):b.push(h=l);for(a=0;a<b.length;++a)l=b[a],c.push(f(l[0])),l[1]>l[0]&&(l[1]+1>l[0]&&c.push("-"),c.push(f(l[1])));c.push("]");return c.join("")}function g(e){for(var a=e.source.match(/(?:\[(?:[^\x5C\x5D]|\\[\s\S])*\]|\\u[A-Fa-f0-9]{4}|\\x[A-Fa-f0-9]{2}|\\[0-9]+|\\[^ux0-9]|\(\?[:!=]|[\(\)\^]|[^\x5B\x5C\(\)\^]+)/g),c=a.length,d=[],h=0,l=0;h<c;++h){var n=a[h];"("===n?++l:"\\"===n.charAt(0)&&(n=
+n.substring(1))&&(n<=l?d[n]=-1:a[h]=f(n))}for(h=1;h<d.length;++h)-1===d[h]&&(d[h]=++k);for(l=h=0;h<c;++h)n=a[h],"("===n?(++l,d[l]||(a[h]="(?:")):"\\"===n.charAt(0)&&(n=+n.substring(1))&&n<=l&&(a[h]="\\"+d[n]);for(h=0;h<c;++h)"^"===a[h]&&"^"!==a[h+1]&&(a[h]="");if(e.ignoreCase&&I)for(h=0;h<c;++h)n=a[h],e=n.charAt(0),2<=n.length&&"["===e?a[h]=b(n):"\\"!==e&&(a[h]=n.replace(/[a-zA-Z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return a.join("")}for(var k=0,I=!1,
m=!1,J=0,c=a.length;J<c;++J){var r=a[J];if(r.ignoreCase)m=!0;else if(/[a-z]/i.test(r.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){I=!0;m=!1;break}}for(var W={b:8,t:9,n:10,v:11,f:12,r:13},u=[],J=0,c=a.length;J<c;++J){r=a[J];if(r.global||r.multiline)throw Error(""+r);u.push("(?:"+g(r)+")")}return new RegExp(u.join("|"),m?"gi":"g")}function q(a,d){function f(a){var c=a.nodeType;if(1==c){if(!b.test(a.className)){for(c=a.firstChild;c;c=c.nextSibling)f(c);c=a.nodeName.toLowerCase();if("br"===
c||"li"===c)g[m]="\n",I[m<<1]=k++,I[m++<<1|1]=a}}else if(3==c||4==c)c=a.nodeValue,c.length&&(c=d?c.replace(/\r\n?/g,"\n"):c.replace(/[ \t\r\n]+/g," "),g[m]=c,I[m<<1]=k,k+=c.length,I[m++<<1|1]=a)}var b=/(?:^|\s)nocode(?:\s|$)/,g=[],k=0,I=[],m=0;f(a);return{a:g.join("").replace(/\n$/,""),c:I}}function t(a,d,f,b,g){f&&(a={h:a,l:1,j:null,m:null,a:f,c:null,i:d,g:null},b(a),g.push.apply(g,a.g))}function A(a){for(var d=void 0,f=a.firstChild;f;f=f.nextSibling)var b=f.nodeType,d=1===b?d?a:f:3===b?T.test(f.nodeValue)?
a:d:d;return d===a?void 0:d}function C(a,d){function f(a){for(var m=a.i,k=a.h,c=[m,"pln"],r=0,W=a.a.match(g)||[],u={},e=0,q=W.length;e<q;++e){var D=W[e],w=u[D],h=void 0,l;if("string"===typeof w)l=!1;else{var n=b[D.charAt(0)];if(n)h=D.match(n[1]),w=n[0];else{for(l=0;l<p;++l)if(n=d[l],h=D.match(n[1])){w=n[0];break}h||(w="pln")}!(l=5<=w.length&&"lang-"===w.substring(0,5))||h&&"string"===typeof h[1]||(l=!1,w="src");l||(u[D]=w)}n=r;r+=D.length;if(l){l=h[1];var E=D.indexOf(l),G=E+l.length;h[2]&&(G=D.length-
h[2].length,E=G-l.length);w=w.substring(5);t(k,m+n,D.substring(0,E),f,c);t(k,m+n+E,l,F(w,l),c);t(k,m+n+G,D.substring(G),f,c)}else c.push(m+n,w)}a.g=c}var b={},g;(function(){for(var f=a.concat(d),m=[],p={},c=0,r=f.length;c<r;++c){var q=f[c],u=q[3];if(u)for(var e=u.length;0<=--e;)b[u.charAt(e)]=q;q=q[1];u=""+q;p.hasOwnProperty(u)||(m.push(q),p[u]=null)}m.push(/[\0-\uffff]/);g=k(m)})();var p=d.length;return f}function x(a){var d=[],f=[];a.tripleQuotedStrings?d.push(["str",/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,
null,"'\""]):a.multiLineStrings?d.push(["str",/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):d.push(["str",/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]);a.verbatimStrings&&f.push(["str",/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var b=a.hashComments;b&&(a.cStyleComments?(1<b?d.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):d.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,
null,"#"]),f.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):d.push(["com",/^#[^\r\n]*/,null,"#"]));a.cStyleComments&&(f.push(["com",/^\/\/[^\r\n]*/,null]),f.push(["com",/^\/\*[\s\S]*?(?:\*\/|$)/,null]));if(b=a.regexLiterals){var g=(b=1<b?"":"\n\r")?".":"[\\S\\s]";f.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+
("/(?=[^/*"+b+"])(?:[^/\\x5B\\x5C"+b+"]|\\x5C"+g+"|\\x5B(?:[^\\x5C\\x5D"+b+"]|\\x5C"+g+")*(?:\\x5D|$))+/")+")")])}(b=a.types)&&f.push(["typ",b]);b=(""+a.keywords).replace(/^ | $/g,"");b.length&&f.push(["kwd",new RegExp("^(?:"+b.replace(/[\s,]+/g,"|")+")\\b"),null]);d.push(["pln",/^\s+/,null," \r\n\t\u00a0"]);b="^.[^\\s\\w.$@'\"`/\\\\]*";a.regexLiterals&&(b+="(?!s*/)");f.push(["lit",/^@[a-z_$][a-z_$@0-9]*/i,null],["typ",/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],["pln",/^[a-z_$][a-z_$@0-9]*/i,
null],["lit",/^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i,null,"0123456789"],["pln",/^\\[\s\S]?/,null],["pun",new RegExp(b),null]);return C(d,f)}function B(a,d,f){function b(a){var c=a.nodeType;if(1==c&&!k.test(a.className))if("br"===a.nodeName)g(a),a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)b(a);else if((3==c||4==c)&&f){var d=a.nodeValue,p=d.match(q);p&&(c=d.substring(0,p.index),a.nodeValue=c,(d=d.substring(p.index+p[0].length))&&
a.parentNode.insertBefore(m.createTextNode(d),a.nextSibling),g(a),c||a.parentNode.removeChild(a))}}function g(a){function b(a,c){var d=c?a.cloneNode(!1):a,n=a.parentNode;if(n){var n=b(n,1),e=a.nextSibling;n.appendChild(d);for(var f=e;f;f=e)e=f.nextSibling,n.appendChild(f)}return d}for(;!a.nextSibling;)if(a=a.parentNode,!a)return;a=b(a.nextSibling,0);for(var d;(d=a.parentNode)&&1===d.nodeType;)a=d;c.push(a)}for(var k=/(?:^|\s)nocode(?:\s|$)/,q=/\r\n?|\n/,m=a.ownerDocument,p=m.createElement("li");a.firstChild;)p.appendChild(a.firstChild);
for(var c=[p],r=0;r<c.length;++r)b(c[r]);d===(d|0)&&c[0].setAttribute("value",d);var t=m.createElement("ol");t.className="linenums";d=Math.max(0,d-1|0)||0;for(var r=0,u=c.length;r<u;++r)p=c[r],p.className="L"+(r+d)%10,p.firstChild||p.appendChild(m.createTextNode("\u00a0")),t.appendChild(p);a.appendChild(t)}function p(a,d){for(var f=d.length;0<=--f;){var b=d[f];X.hasOwnProperty(b)?R.console&&console.warn("cannot override language handler %s",b):X[b]=a}}function F(a,d){a&&X.hasOwnProperty(a)||(a=/^\s*</.test(d)?
"default-markup":"default-code");return X[a]}function H(a){var d=a.j;try{var f=q(a.h,a.l),b=f.a;a.a=b;a.c=f.c;a.i=0;F(d,b)(a);var g=/\bMSIE\s(\d+)/.exec(navigator.userAgent),g=g&&8>=+g[1],d=/\n/g,p=a.a,k=p.length,f=0,m=a.c,t=m.length,b=0,c=a.g,r=c.length,x=0;c[r]=k;var u,e;for(e=u=0;e<r;)c[e]!==c[e+2]?(c[u++]=c[e++],c[u++]=c[e++]):e+=2;r=u;for(e=u=0;e<r;){for(var A=c[e],D=c[e+1],w=e+2;w+2<=r&&c[w+1]===D;)w+=2;c[u++]=A;c[u++]=D;e=w}c.length=u;var h=a.h;a="";h&&(a=h.style.display,h.style.display="none");
try{for(;b<t;){var l=m[b+2]||k,n=c[x+2]||k,w=Math.min(l,n),E=m[b+1],G;if(1!==E.nodeType&&(G=p.substring(f,w))){g&&(G=G.replace(d,"\r"));E.nodeValue=G;var aa=E.ownerDocument,v=aa.createElement("span");v.className=c[x+1];var B=E.parentNode;B.replaceChild(v,E);v.appendChild(E);f<l&&(m[b+1]=E=aa.createTextNode(p.substring(w,l)),B.insertBefore(E,v.nextSibling))}f=w;f>=l&&(b+=2);f>=n&&(x+=2)}}finally{h&&(h.style.display=a)}}catch(y){R.console&&console.log(y&&y.stack||y)}}var R=window,K=["break,continue,do,else,for,if,return,while"],
L=[[K,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],S=[L,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],
M=[L,"abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],N=[L,"abstract,as,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,group,implicit,in,interface,internal,into,is,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],L=[L,"debugger,eval,export,function,get,instanceof,null,set,undefined,var,with,Infinity,NaN"],
O=[K,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],P=[K,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],K=[K,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],Q=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,
T=/\S/,U=x({keywords:[S,N,M,L,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",O,P,K],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),X={};p(U,["default-code"]);p(C([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",
/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),"default-markup htm html mxml xhtml xml xsl".split(" "));p(C([["pln",/^[\s]+/,null," \t\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],
["pun",/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]);p(C([],[["atv",/^[\s\S]+/]]),["uq.val"]);p(x({keywords:S,hashComments:!0,cStyleComments:!0,types:Q}),"c cc cpp cxx cyc m".split(" "));p(x({keywords:"null,true,false"}),["json"]);p(x({keywords:N,hashComments:!0,cStyleComments:!0,
verbatimStrings:!0,types:Q}),["cs"]);p(x({keywords:M,cStyleComments:!0}),["java"]);p(x({keywords:K,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]);p(x({keywords:O,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]);p(x({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),
["perl","pl","pm"]);p(x({keywords:P,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]);p(x({keywords:L,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]);p(x({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);p(C([],[["str",/^[\s\S]+/]]),["regex"]);
var V=R.PR={createSimpleLexer:C,registerLangHandler:p,sourceDecorator:x,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:function(a,d,f){f=f||!1;d=d||null;var b=document.createElement("div");b.innerHTML="<pre>"+a+"</pre>";b=b.firstChild;f&&B(b,f,!0);H({j:d,m:f,h:b,l:1,a:null,i:null,c:null,g:null});return b.innerHTML},
prettyPrint:g=g=function(a,d){function f(){for(var b=R.PR_SHOULD_USE_CONTINUATION?c.now()+250:Infinity;r<p.length&&c.now()<b;r++){for(var d=p[r],k=h,q=d;q=q.previousSibling;){var m=q.nodeType,v=(7===m||8===m)&&q.nodeValue;if(v?!/^\??prettify\b/.test(v):3!==m||/\S/.test(q.nodeValue))break;if(v){k={};v.replace(/\b(\w+)=([\w:.%+-]+)/g,function(a,b,c){k[b]=c});break}}q=d.className;if((k!==h||u.test(q))&&!e.test(q)){m=!1;for(v=d.parentNode;v;v=v.parentNode)if(w.test(v.tagName)&&v.className&&u.test(v.className)){m=
!0;break}if(!m){d.className+=" prettyprinted";m=k.lang;if(!m){var m=q.match(t),C;!m&&(C=A(d))&&z.test(C.tagName)&&(m=C.className.match(t));m&&(m=m[1])}if(x.test(d.tagName))v=1;else var v=d.currentStyle,y=g.defaultView,v=(v=v?v.whiteSpace:y&&y.getComputedStyle?y.getComputedStyle(d,null).getPropertyValue("white-space"):0)&&"pre"===v.substring(0,3);y=k.linenums;(y="true"===y||+y)||(y=(y=q.match(/\blinenums\b(?::(\d+))?/))?y[1]&&y[1].length?+y[1]:!0:!1);y&&B(d,y,v);H({j:m,h:d,m:y,l:v,a:null,i:null,c:null,
g:null})}}}r<p.length?R.setTimeout(f,250):"function"===typeof a&&a()}for(var b=d||document.body,g=b.ownerDocument||document,b=[b.getElementsByTagName("pre"),b.getElementsByTagName("code"),b.getElementsByTagName("xmp")],p=[],k=0;k<b.length;++k)for(var m=0,q=b[k].length;m<q;++m)p.push(b[k][m]);var b=null,c=Date;c.now||(c={now:function(){return+new Date}});var r=0,t=/\blang(?:uage)?-([\w.]+)(?!\S)/,u=/\bprettyprint\b/,e=/\bprettyprinted\b/,x=/pre|xmp/i,z=/^code$/i,w=/^(?:pre|code|xmp)$/i,h={};f()}},
S=R.define;"function"===typeof S&&S.amd&&S("google-code-prettify",[],function(){return V})})();return g}();T||t.setTimeout(U,0)})();}()
