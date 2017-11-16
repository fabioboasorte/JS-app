export default (() => {
    const $Libs = {
        $files: require('fs'),
        $gulp: require('gulp'),
        $restify: require('restify'),
        $restifyCors: require('restify-cors-middleware'),
        $mustache: require('mustache'),
    };

    return $Libs;
})();