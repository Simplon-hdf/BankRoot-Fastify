"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = exports.config = void 0;
const fastify_1 = __importDefault(require("fastify"));
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const app_1 = __importDefault(require("../src/app"));
async function config() {
    return {};
}
exports.config = config;
async function build(t) {
    const app = (0, fastify_1.default)();
    void app.register((0, fastify_plugin_1.default)(app_1.default), await config());
    await app.ready();
    t.teardown(() => void app.close());
    return app;
}
exports.build = build;
//# sourceMappingURL=helper.js.map