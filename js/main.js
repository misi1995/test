window.onload = function() {
    var slider = $("slider");
    var slider_main = $("slider_main");
    var slider_ctl = $("slider_ctl");
    var slider_ctl_prev = slider_ctl.children[0];
    var slider_ctl_next = slider_ctl.children[1];
    var lis = slider_main.children;

    var json = [{ //  1
        width: 400,
        top: 20,
        left: 50,
        opacity: 0.2,
        zIndex: 2
    }, { // 2
        width: 600,
        top: 70,
        left: 0,
        opacity: 0.8,
        zIndex: 3
    }, { // 3
        width: 800,
        top: 100,
        left: 200,
        opacity: 1,
        zIndex: 4
    }, { // 4
        width: 600,
        top: 70,
        left: 600,
        opacity: 0.8,
        zIndex: 3
    }, { //5
        width: 400,
        top: 20,
        left: 750,
        opacity: 0.2,
        zIndex: 2
    }];
    slider.onmouseover = function() {
        slider_ctl.style.display = "block";
    }

    slider.onmouseout = function() {
        slider_ctl.style.display = "none";
    }

    sort();

    slider_ctl_prev.onclick = function() {
        json.push(json.shift());
        sort();
    }

    slider_ctl_next.onclick = function() {
        json.unshift(json.pop());
        sort();
    }

    function sort() {
        for (var i = 0; i < json.length; i++) {
            buffer(lis[i], json[i]);
        }
    }
};