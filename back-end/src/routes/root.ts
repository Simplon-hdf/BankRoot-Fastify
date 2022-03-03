import { FastifyPluginAsync } from 'fastify'

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply:any) {
    reply.send('../views/home.pug', {title: 'Home', message: 'Home'}) 
  })
}

export default root;
