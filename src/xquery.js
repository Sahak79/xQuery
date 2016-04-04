var __xQuery__ = (function() {

    var selectedElements = [];


    function select(selector) {
        if(selector.substr(0, 1) === ".") {
            selectedElements.concat(document.getElementsByClassName(selector.substr(1, selector.length - 1)));
        }else if(selector.substr(0, 1) === "#") {
            selectedElements.push(document.getElementById(selector.substr(1, selector.length - 1)));
        }else if(/^[a-zA-Z]+$/.test(selector)) {
            selectedElements.concat(document.getElementsByTagName(selector));
        }
        return this;
    }

    /**  attach styles for element/elements  */
    function css() {

        var stylesArray = [];
        var styleItem;

        if(arguments.length == 1) {
            for (var key in arguments[0]) {
                if(arguments[0].hasOwnProperty(key)) {
                    styleItem = {name : key, value : arguments[0][key]};
                    stylesArray.push(styleItem);
                }
            }
        }else if(arguments.length == 2) {
            styleItem = {name : arguments[0], value : arguments[1]};
            stylesArray.push(styleItem);
        }


//        var style = {};
//        var styleContainer = [];
//        if(param1 !== undefined && param2 !== undefined) {
//            style.name = param1;
//            style.value = param2;
//            styleContainer[0] = style;
//            attachStyles(styleContainer);
//        }else if(param1 !== undefined && typeof param1 === 'object' && param2 === undefined) {
//            attachMultipleStyles(param1);
//        }
        return this;
    }

    // check whether element selected or elements and attache style/styles
    function attachStyles(styles) {
        if(selectedElements !== undefined) {
            for(var i=0; i<selectedElements.length; i++) {
                attachStylesForCurrentElement(selectedElements[i], styles);
            }
        }else if(selectedElement !== undefined) {
            attachStylesForCurrentElement(selectedElement, styles);
        }
    }

    // if there is an multiple type style argument then we build an
    // appropriate array of styles and pass it to function attachStyles()
    function attachMultipleStyles(styles) {
        var styleContainer = [];
        for (var key in styles) {
            if (styles.hasOwnProperty(key)) {
                var styleItem = {name : key, value : styles[key]};
                styleContainer.push(styleItem);
            }
        }
        attachStyles(styleContainer);
    }

    // when we discover element which should have defined style we call this function
    function attachStylesForCurrentElement(element, styles) {
        for(var j=0; j<styles.length; j++) {
            element.style[styles[j].name] = styles[j].value;
        }
    }

    // ----------------
    function myMove() {
        var elem = document.getElementById("animate");
        var pos = 0;
        var id = setInterval(frame, 5);
        function frame() {
            if (pos == 350) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';
            }
        }
    }

    function hide() {
        var opacity0 = 0;
        var caller = setInterval();
    }





    return{
        select: select,
        css: css
    }

})();

var xQuery = function(selector) {
    return __xQuery__.select(selector);
};
