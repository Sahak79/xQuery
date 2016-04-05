var __xQuery__ = (function() {

    var selectedElements;

    function select(selector) {
        selectedElements = [];
        if(selector.substr(0, 1) === ".") {
            selectedElements = Array.prototype.slice.call(document.getElementsByClassName(selector.substr(1, selector.length - 1)), 0);
        }else if(selector.substr(0, 1) === "#") {
            selectedElements.push(document.getElementById(selector.substr(1, selector.length - 1)));
        }else if(/^[a-zA-Z]+$/.test(selector)) {
            selectedElements = Array.prototype.slice.call(document.getElementsByTagName(selector), 0);
        }
        return this;
    }

    /**  attach styles for element/elements  */
    function css() {
        if(arguments.length == 1) {
            for (var key in arguments[0]) {
                if(arguments[0].hasOwnProperty(key)) {
                    attacheStyle({name : key, value : arguments[0][key]});
                }
            }
        }else if(arguments.length == 2) {
            attacheStyle({name : arguments[0], value : arguments[1]});
        }
        return this;
    }

    function attacheStyle(styleObj) {
        for(var j =0; j<selectedElements.length; j++) {
            selectedElements[j].style[styleObj.name] = styleObj.value;
        }
    }

    function hide() {
        var duration = 1000;
        if(arguments.length == 1) {
            duration = arguments[0];
        }
        for(var j =0; j<selectedElements.length; j++) {
            attacheHide(selectedElements[j], duration);
        }
        return this;
    }

    function attacheHide(elem, duration) {
        var initialOpacity = 1;
        var delta = (1/duration)*100;
        var id = setInterval(reduceOpacity, 100);
        function reduceOpacity() {
            if(initialOpacity < 0.1) {
                clearInterval(id);
                elem.style.opacity = 0;
                elem.style.display = 'none';
            } else {
                initialOpacity -= delta;
                elem.style.opacity = initialOpacity;
            }
        }
    }

    return{
        select: select,
        css: css,
        hide: hide
    }
})();

var xQuery = function(selector) {
    return __xQuery__.select(selector);
};
