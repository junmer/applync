(function (global, factory) {

    if (typeof define === 'function' && define.amd) {
        define([], factory);
    }
    else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    }
    else {
        global.applync = factory();
    }

}(this, (function () {

    var doc = document;
    var ua = window.navigator.userAgent;
    var isChrome = !!window.chrome;
    var isIos = ua.match(/iPhone|iPad|iPod/);
    var isIos9Safari = (function () {
        var ret = false;
        var version = '0.0.0';
        var matched;

        if (isIos && ua.match(/Safari/) && (matched = ua.match(/Version\/([\d\.]+)/))) {
            version = matched[1] || version;

            if (compareVersion(version, '9.0') > 0) {
                ret = true;
            }
        }
        return ret;
    }());

    function compareVersion(v1, v2) {

        v1 = v1.toString().split('.');
        v2 = v2.toString().split('.');

        for (var i = 0; i < v1.length || i < v2.length; i++) {
            var n1 = parseInt(v1[i], 10);
            var n2 = parseInt(v2[i], 10);

            if (isNaN(n1)) {
                n1 = 0;
            }

            if (isNaN(n2)) {
                n2 = 0;
            }

            if (n1 < n2) {
                return -1;
            }
            else if (n1 > n2) {
                return 1;
            }
        }
        return 0;
    }

    var iframe;

    function callByIframe(url) {
        if (!iframe) {
            iframe = doc.createElement('iframe');
            iframe.style.display = 'none';
            doc.body.appendChild(iframe);
        }
        iframe.src = url;
    }

    function callByAnchor(url) {
        var a = doc.createElement('a');
        a.setAttribute('href', url);
        a.style.display = 'none';
        doc.body.appendChild(a);
        var e = doc.createEvent('HTMLEvents');
        e.initEvent('click', false, false);
        a.dispatchEvent(e);
    }

    function applync(url) {

        if (isIos9Safari) {
            callByAnchor(url);
        }
        else if (isChrome) {
            setTimeout(function () {
                location.href = url;
            }, 0);
        }
        else {
            callByIframe(url);
        }
    }

    return applync;

})));
