import { FastifyPluginAsync } from 'fastify'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
//   fastify.get('/', async function (request, reply:any) {
//      return reply.view('src/views/home', { title: 'Home', pageTitle: 'Home', message: 'Client list : ' }) 
//   })

  fastify.get('/', async (req, res) => {
   const posts = await prisma.person.findMany({
     where: { firstName: "marie" }
   })
   res.send(posts)
 })

  fastify.get('/client', async function (request, reply:any) {
    return reply.view('src/views/client', { title: 'Client', pageTitle: 'Client' }) 
 })
}

export default root;
