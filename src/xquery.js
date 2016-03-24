var __xQuery__ = (function() {

    var element;
    var elements;

    function select(selector) {
        window.onload = function() {

            if(selector.substr(0, 1) === ".") {
                elements = document.getElementsByClassName(selector.substr(1, selector.length - 1));
            }else if(selector.substr(0, 1) === "#") {
                element = document.getElementById(selector.substr(1, selector.length - 1));
            }else if(/^[a-zA-Z]+$/.test(selector)) {
                elements = document.getElementsByTagName(selector);
            }else {
                throw "No such selector ["+selector+"]";
            }

            if(element !== undefined) {
                return element;
            }else if(elements !== undefined) {
                return element;
            }
        };
    }

    function css(param1, param2) {
        
        if(param2 === undefined) {

        }else {

        }
    }

    return{
        select: select
    }

})();

var xQuery = function(selector) {
    __xQuery__.select(selector);
};
