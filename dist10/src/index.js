"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("./lib/test");
const application_1 = require("./application");
exports.AppApplication = application_1.AppApplication;
async function main(options = {}) {
    console.log('hello', test_1.plus(1, 2));
    const app = new application_1.AppApplication(options);
    await app.boot();
    await app.start();
    const url = app.restServer.url;
    console.log(`Server is running at ${url}`);
    console.log(`Try ${url}/ping`);
    return app;
}
exports.main = main;
//# sourceMappingURL=index.js.map