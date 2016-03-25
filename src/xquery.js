var __xQuery__ = (function() {
    var selectedElement;
    var selectedElements;

    function select(selector) {
        selectedElement = undefined;
        selectedElements = undefined;
        if(selector.substr(0, 1) === ".") {
            selectedElements = document.getElementsByClassName(selector.substr(1, selector.length - 1));
        }else if(selector.substr(0, 1) === "#") {
            selectedElement = document.getElementById(selector.substr(1, selector.length - 1));
        }else if(/^[a-zA-Z]+$/.test(selector)) {
            selectedElements = document.getElementsByTagName(selector);
        }else {
            throw "No such selector ["+selector+"]";
        }
        return this;
    }

    /** attach styles for element/elements  */
    function css(param1, param2) {
        var style = {};
        var styleContainer = [];
        if(param1 !== undefined && param2 !== undefined) {
            style.name = param1;
            style.value = param2;
            styleContainer[0] = style;
            attachStyles(styleContainer);
        }else if(param1 !== undefined && typeof param1 === 'object' && param2 === undefined) {
            attachMultipleStyles(param1);
        }else {
            throw "Provided style can't be applied";
        }
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

    return{
        select: select,
        css: css
    }

})();

var xQuery = function(selector) {
    return __xQuery__.select(selector);
};
