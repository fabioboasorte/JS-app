global.$Libs = require('../core/libs.js').default;
global.$Server = require('../core/server.js').default;
global.$Views = require('../core/views.js').default;
global.$appRoot = $Libs.$path.resolve(__dirname);

global.$App = (() => {
    const $App = {
        $routes(server) {
            const restify = $Libs.$restify;
            
            server.get('/', (req, res, next) => {
                let data = {
                    'name': 'Fábio'
                };

                let view = 'index';
                let responseText = $Views.$load(view, data);

                res.setHeader('content-type', 'text/html');    
                res.send(responseText);
                next(false);
            });

            /*static-files*/
            server.get(/\/css\/?.*/, function (req, res, next) {
                $Libs.$files.readFile('./static/build/' + req.url, 'utf8', function (err, file) {
                    if (err) {
                        res.send(500);
                        return next();
                    }
                    res.setHeader('content-type', 'text/css');    
                    res.write(file);
                    res.end();
                    next(false);
                });
            });

            server.get(/\/js\/?.*/, function (req, res, next) {
                $Libs.$files.readFile('./static/build/' + req.url, 'utf8', function (err, file) {
                    if (err) {
                        res.send(500);
                        return next();
                    }
                    res.setHeader('content-type', 'application/javascript');
                    res.write(file);
                    res.end();
                    next(false);
                });
            });

            server.listen(process.env.PORT || 1818);
        },

        $init() {
            //console.log('$ServerApp', $Server, $Libs);
            const server = $Server.$init();
            $App.$routes(server);
        }
    };

    return $App;
})();

$App.$init();