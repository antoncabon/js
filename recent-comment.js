function commentswidget(e) {
    var t;
    t = '<ul class="commentswidget">';
    for (var n = 0; n < numComments; n++) {
        var r, i, s, o;
        if (n == e.feed.entry.length) break;
        t += "<li>";
        var u = e.feed.entry[n];
        for (var a = 0; a < u.link.length; a++) {
            if (u.link[a].rel == "alternate") {
                r = u.link[a].href
            }
        }
        for (var f = 0; f < u.author.length; f++) {
            i = u.author[f].name.$t;
            s = u.author[f].gd$image.src
        }
        if (s.indexOf("/s1600/") != -1) {
            s = s.replace("/s1600/", "/s" + avatarSize + "-c/")
        } else if (s.indexOf("/s220/") != -1) {
            s = s.replace("/s220/", "/s" + avatarSize + "-c/")
        } else if (s.indexOf("/s512-c/") != -1 && s.indexOf("http:") != 0) {
            s = "http:" + s.replace("/s512-c/", "/s" + avatarSize + "-c/")
        } else if (s.indexOf("blogblog.com/img/b16-rounded.gif") != -1) {
            s = "https://1.bp.blogspot.com/-7bkcAKdpGXI/UrbyQRqvSKI/AAAAAAAAFmI/oBv_yMeYnMQ/s" + avatarSize + "/blogger.png"
        } else if (s.indexOf("blogblog.com/img/openid16-rounded.gif") != -1) {
            s = "https://2.bp.blogspot.com/-VgnInuIUKBU/UrbzyXTYWRI/AAAAAAAAFmU/3f_Vfj3TI6A/s" + avatarSize + "/openid.png"
        } else if (s.indexOf("blogblog.com/img/blank.gif") != -1) {
            if (defaultAvatar.indexOf("gravatar.com") != -1) {
                s = defaultAvatar + "&s=" + avatarSize
            } else {
                s = defaultAvatar
            }
        } else {
            s = s
        }
        if (showAvatar == true) {
            if (roundAvatar == true) {
                o = "avatarRound"
            } else {
                o = ""
            }
            t += '<div class="avatarImage ' + o + '"><img class="' + o + '" src="' + s + '" alt="' + i + '" width="' + avatarSize + '" height="' + avatarSize + '"/></div>'
        }
        t += '<a href="' + r + '">' + i + "</a>";
        var l = u.content.$t;
        var c = l.replace(/(<([^>]+)>)/ig, "");
        if (c != "" && c.length > characters) {
            c = c.substring(0, characters);
            c += "&hellip;";
            if (showMorelink == true) {
                c += '<a href="' + r + '">' + moreLinktext + "</a>"
            }
        } else {
            c = c
        }
        t += "<span>" + c + "</span>";
        t += "</li>"
    }
    t += "</ul>";
    document.write(t)
}
