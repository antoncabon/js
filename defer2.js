var disqus_shortname="antoncabon";
var disqus_url = disqus_blogger_current_url;

(function () {
    "use strict";
    var get_comment_block = function () {
        var block = document.getElementById('comments');
        if (!block) {
            block = document.getElementById('disqus-blogger-comment-block');
        }
        return block;
    };
    var comment_block = get_comment_block();
    if (!!comment_block) {
        var disqus_div = document.createElement('div');
        disqus_div.id = 'disqus_thread';
        comment_block.innerHTML = '';
        comment_block.appendChild(disqus_div);
        comment_block.style.display = 'block';
        var dsq = document.createElement('script');
        dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.body).appendChild(dsq);
    }
})();

var imgDefer=document.getElementsByTagName("img");for(var i=0;i<imgDefer.length;i++){if(imgDefer[i].getAttribute("data-src")){imgDefer[i].setAttribute("src",imgDefer[i].getAttribute("data-src"))}};

function resizeThumb(parentID, size, size2) {
    var parent = document.getElementById(parentID),
        image = parent.getElementsByTagName('img');
    for (var i = 0; i < image.length; i++) {
        image[i].src = image[i].src.replace(/\/s72\-c/, "/s" + size + "");
        image[i].width = size;
        image[i].height = size2;
    }
}
resizeThumb('PopularPosts1', 100, 70);

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


var mql = window.matchMedia('screen and (min-width: 60em)');if (mql.matches){
function makemeSticky(e){function t(){var e=s.getBoundingClientRect();e.top<0?(n.className=a+" makesticking",n.style.width=i+"px"):n.className=a}var n=document.getElementById(e),s=document.createElement("div");n.parentNode.insertBefore(s,n);var i=n.offsetWidth,a=n.className+" makesticky";window.addEventListener("scroll",t,!1)}makemeSticky("HTML1");
var pres=document.querySelectorAll("blockquote,pre,ul.emoji-list li span,.comment_body p i[rel=pre]");for(var i=0;i<pres.length;i++){pres[i].addEventListener("dblclick",function(){var e=getSelection();var t=document.createRange();t.selectNodeContents(this);e.removeAllRanges();e.addRange(t)},false)};
function convert(){var ele1 = document.getElementById("somewhere");var replaced;replaced = ele1.value;replaced = replaced.replace(/&/ig, "&amp;");replaced = replaced.replace(/</ig, "&lt;");replaced = replaced.replace(/>/ig, "&gt;");replaced = replaced.replace(/"/ig, "&quot;");replaced = replaced.replace(/&#177;/ig, "&plusmn;");replaced = replaced.replace(/&#169;/ig, "&copy;");replaced = replaced.replace(/&#174;/ig, "&reg;");replaced = replaced.replace(/ya'll/ig, "ya'll");ele1.value = replaced;};
function showhide(){var e=document.getElementById("share-menu");"block"!==e.style.display?e.style.display="block":e.style.display="none"};
function toggleNavPanel(e){var n=document.getElementById(e),l=document.getElementById("tombol-pesan"),t="block";n.style.display==t?(n.style.display="none",l.innerHTML="<i class='fa fa-plus-square-o'></i>"):(n.style.display="block",l.innerHTML="<i class='fa fa-minus-square-o'></i>")};
function toggleNavPanel2(e){var n=document.getElementById(e),l=document.getElementById("parser-button"),t="block";n.style.display==t?(n.style.display="none",l.innerHTML="Show Parser Box"):(n.style.display="block",l.innerHTML="Hide Parse Box")};
};

var boxArray=["share-menu"];window.addEventListener("mouseup",function(e){for(var r=0;r<boxArray.length;r++){var o=document.getElementById(boxArray[r]);e.target!=o&&e.target.parentNode!=o&&(o.style.display="none")}});

$(".commentbtn").click(function (e) {
$(this).addClass("btncurrent").siblings().removeClass("btncurrent");
});

function cdClear() {
  var wtarea = document.getElementById('codes');
  wtarea.value = '';
  wtarea.focus();
  document.getElementById('cvrt').disabled = false;
}

function cdConvert() {
  var ctarea = document.getElementById('codes'),
    cv = ctarea.value,
    opt1 = document.getElementById('opt1'),
    opt2 = document.getElementById('opt2'),
    opt3 = document.getElementById('opt3'),
    opt4 = document.getElementById('opt4'),
    opt5 = document.getElementById('opt5');
  cv = cv.replace(/\t/g, "    ");
  if (opt1.checked) cv = cv.replace(/&/g, "&amp;");
  if (opt2.checked) cv = cv.replace(/'/g, "&#039;");
  if (opt3.checked) cv = cv.replace(/"/g, "&quot;");
  if (opt4.checked) cv = cv.replace(/</g, "&lt;");
  if (opt5.checked) cv = cv.replace(/>/g, "&gt;");
  if (cv.lastIndexOf('\n') != -1 || cv.length > 40) {
    cv = cv.replace(/^/, "<i rel=\"pre\">");
  } else {
    cv = cv.replace(/^/, "<i rel=\"code\">");
  }
  cv = cv.replace(/$/, "</i>");
  ctarea.value = cv;
  ctarea.focus();
  ctarea.select();
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
