export default function (app) {
    return function ({method, url, action, middlewares}) {
        app[method](url, middlewares, action);
    };
}
