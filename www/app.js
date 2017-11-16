global.$Libs = require('../core/libs.js').default;
global.$Server = require('../core/server.js').default;
global.$Views = require('../core/views.js').default;

global.$App = (() => {
    const $App = {
        $routes(server) {
            server.get('/', (req, res, next) => {
                let data = {
                    'name': 'Fábio'
                };

                let view = 'index';
                let responseText = $Views.$load(view, data);

                //res.setHeader('content-type', 'text/html');    
                res.send(responseText);

                next(false);
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