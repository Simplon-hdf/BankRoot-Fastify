"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const root = async (fastify, opts) => {
    fastify.get('/', async function (request, reply) {
        return reply.view('src/views/home', { title: 'Home', pageTitle: 'Home', message: 'Client list : ' });
    });
    fastify.get('/client', async function (request, reply) {
        return reply.view('src/views/client', { title: 'Client', pageTitle: 'Client' });
    });
};
exports.default = root;
//# sourceMappingURL=root.js.map