'use strict';

var main = window.main || {};
main.warnSite = window.main.warnSite || {};
main.warnSite = function (window, undefined) {

    function person() {
        var person = { name: 'Fabio', age: 26 };
        var name = person.name,
            age = person.age;

        console.log(name);
        console.log(age);
    };

    return {
        init: function init() {
            person();
        }
    };
}(window);
main.warnSite.init();