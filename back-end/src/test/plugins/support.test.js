"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tap_1 = require("tap");
const fastify_1 = __importDefault(require("fastify"));
const support_1 = __importDefault(require("../../src/plugins/support"));
(0, tap_1.test)('support works standalone', async (t) => {
    const fastify = (0, fastify_1.default)();
    void fastify.register(support_1.default);
    await fastify.ready();
    t.equal(fastify.someSupport(), 'hugs');
});
//# sourceMappingURL=support.test.js.map