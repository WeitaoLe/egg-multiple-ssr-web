module.exports = app => {

    return class ErrorController extends app.Controller {

        async error() {
            const {
                ctx
            } = this;
        }

    };
};