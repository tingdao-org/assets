_unique_doc = document.getElementsByTagName('head')[0];
_unique_js = document.createElement('script');
_unique_js.setAttribute('type', 'text/javascript');
_unique_js.setAttribute('src', "http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js");
_unique_doc.appendChild(_unique_js);
_unique_try2go = function() {
        if(typeof $ == 'function' && typeof $().jquery == 'string') {
                clearInterval(_unique_mainIntv);
                $(function () {alert("oked.111..");})
        }
}
var _unique_mainIntv = setInterval(_unique_try2go, 300);

var isJqueryLoaded = false;
function LoadJquery() {
    if (typeof(jQuery) == 'undefined') {
        if (!isJqueryLoaded) {
            isJqueryLoaded = true;
            document.write("<script type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js\"></script>");
        }
        setTimeout("LoadJquery()", 50);
    } else {
        //这里写Jquery加载后要执行的内容
        $(function () {
　　　　    alert("oked...");
        });
    }
}
//执行加载Jquery文件操作
//LoadJquery();