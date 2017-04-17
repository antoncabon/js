var currentURL=location.href;
var str = currentURL;
var res = str.replace("http://blog.antoncabon.us/p/convert.html?id=", "");
$(".Visit_Link").hide();
function changeLink(){
    var decodedString = Base64.decode(res);
    window.open(decodedString,'_self');
    
}
