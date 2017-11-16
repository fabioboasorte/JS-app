export default (() => {
    const $Views = {
        $parse(template, data) {
            return $Libs.$mustache.render(template, data);
        },

        $load(view, data) {
            let template = false;

            try {
                template = $Libs.$files.readFileSync(`views/${view}.html`, 'utf8');
            } catch (e) {

            }

            if (template) {
                return $Views.$parse(template, data);
            } else {
                return false;
            }

        }
    };

    return $Views;
})();