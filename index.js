export default function (app) {
    return function ({method, url, action}) {
        app[method](url, action);
    };
}
