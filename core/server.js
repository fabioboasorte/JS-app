export default (() => {
    const $Server = {
        $options() {
            return {
                formatters: {
                    'text/html': function (req, res, body) {
                        return body;
                    },

                    'application/json': function (req, res, body) {
                        if (req.params.callback) {
                            var callbackFunctionName = req.params.callback.replace(/[^A-Za-z0-9_\.]/g, '');
                            return callbackFunctionName + "(" + JSON.stringify(body) + ");";
                        } else {
                            return JSON.stringify(body);
                        }
                    },

                    'text/css': function formatCSS(req, res, body) {
                        if (typeof (body) === 'string')
                            return body;

                        return '';
                    },

                    'text/javascript': function format(req, res, body) {
                        if (typeof (body) === 'string')
                            return body;

                        return '';
                    },

                    'image/png': function formatPNG(req, res, body) {
                        return body;
                    }
                }
            };
        },

        $init() {
            //console.log($Libs, $Libs.$restify);
            const restify = $Libs.$restify;
            const connect = $Libs.$connect;
            const serveStatic = $Libs.$serveStatic;
            
            const restifyServer = restify.createServer($Server.$options());
            //const restifyServer = restify.createServer();
            const cors = $Libs.$restifyCors({
                preflightMaxAge: 5,
                origins: ['*'],
                allowHeaders: ['*'],
                exposeHeaders: ['*']
            });

            const excludedRoutes = ['/', '/auth'];

            restifyServer.pre(cors.preflight);
            restifyServer.use(cors.actual);
            restifyServer.use(restify.plugins.bodyParser());
            restifyServer.use(restify.plugins.queryParser());

            return restifyServer;
        },
    };

    return $Server;
})();