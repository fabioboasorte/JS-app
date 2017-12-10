const main = window.main || {};
main.warnSite = window.main.warnSite || {};
main.warnSite = (function (window, undefined) {

    function person(){
        const person = { name: 'Fabio', age: 26 }
        const { name, age } = person
        console.log (name)
        console.log (age)
    };

    return {
        init: function () {
            person();
        }
    }

})(window);
main.warnSite.init();