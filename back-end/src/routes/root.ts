import { FastifyPluginAsync } from 'fastify'

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply:any) {
     return reply.view('src/views/home', { title: 'Home', pageTitle: 'Home', message: 'Client list : ' }) 
  })

  fastify.get('/client', async function (request, reply:any) {
    return reply.view('src/views/client', { title: 'Client', pageTitle: 'Client' }) 
 })

}

export default root;
