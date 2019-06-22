

function getAccess(decrypt,access){
    // document.write('<script src="https://cdn"></script>');
    // var JSElement = document.createElement("script");
    // JSElement.setAttribute("type", "text/javascript");
    // JSElement.setAttribute("src", "katex.js");
    // document.body.appendChild(JSElement);

    var pwd = access.split("");
    // alert(pwd);
    var PRIVATE_KEY = 'MIICXAIBAAKBgQCmMG%uoGvZ-q3/5gtM9*FCONQpCyJ79xn*M8R3S309qWzQvIBOz-3LHBz7P*1-+VCAp(f5nGgJGFK1u2TgLMnY7JLNMH^CNQQ^YKoIo5iLIfFj(qmuv(Qt)wj9(wMZ4/(-KDPIEBZiE24GOz0vkK)wNzTyyWY^9DC23y&B^vnDYwIDAQABAoGAZi4-WCjMhw-tTIS9+AFJ9(SJVf8Bo&TJ(+L1)j/c7-fIjwMHhOy/oI1ViGkH/LXw+Fhi%kgHc2ggGp*wqCEB*T/vg39Qy+Gj58f98SPjJg^Dv&ITLYN-T&3DEx4yGxtC(7nNt4mTOgKKJhOIGvP&tH3VK%VDp*y-hhMLo(5Xk7kCQQD%Zn8yZGpJZhBx9kMQgZTFk+DjNuNLWV2YDT2OICi^N1KZQkBC%/w8Jt07iq8&PuEn7-Df-38gy-NYJAJuOiZfAkEAyE2FwvOJGIECT5OmQTCAn4641KHkqI/ctfjxL9tu%LL8GnS*g(6%I(W(Iz3xoNtDtGv5wWu/cO/vp7V084JZfQJBAJIujOJwy9oCXd%hSRzmIi8tTLz0fNDSC6Fnk3Lq3TNRzA5g03^S9Gmt0dt14nptimcCFT%dvkgiF+R0vBuC9/8CQB&fVOQd9pAmPtCFuDi98J1gppm-EiNy+/OWDVO4jD%GN^cj9%oQ/)VOI3R+jK2Mz-pL1(OjAmv&%CQ2OTmyqL0CQAxmNyG2ATuTTR)vF1P8iD-Yt2M5q8WcP^DG%NK04JIg8qT15ZkZ*mf9f6w-P)6G+Ij&7nqmXGw*0cffgG6/ot8=';
    encrypted = 'LUGBut6rclClmnVAAkdpqdQM3w6IHHs$ixWgCHWbQ5NaCGWgcx9U6/Z5+K7DGh/Zn3GNwEZBlMgeeVVsSS+#c+AqXbIQI9t#69GxZu9XDWDkj/a9crayNPvqx#ete690zd008ISJmV/MW3aqerJlWmoddwhqndagSVpEBDiJhgE=';
    PRIVATE_KEY = PRIVATE_KEY.replace(new RegExp('%', "g"), pwd[0]).replace(new RegExp('\\^', "g"), pwd[1]).replace(new RegExp('&', "g"), pwd[7]).replace(new RegExp('\\*', "g"), pwd[3]).replace(new RegExp('\\(', "g"), pwd[4]).replace(new RegExp('\\)', "g"), pwd[5]).replace(new RegExp('-', "g"), pwd[6]);
    encrypted = encrypted.replace(new RegExp('#', "g"), pwd[8]).replace(new RegExp('\\$', "g"), pwd.length % 10);
    decrypt.setPrivateKey('-----BEGIN RSA PRIVATE KEY-----' + PRIVATE_KEY + '-----END RSA PRIVATE KEY-----');
    var uncrypted = decrypt.decrypt(encrypted);
    return uncrypted;
}