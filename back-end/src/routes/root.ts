import { FastifyPluginAsync } from 'fastify'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {

  fastify.get('/', async (request, reply:any) => {
      const listPerson = await prisma.person.findMany({
         where: { roleId: 2 }
      })
      reply.view('src/views/home', { h3: JSON.stringify(listPerson) })
   })

   fastify.get('/client', async function (request, reply:any) {
      reply.view('src/views/client', { title: 'Client', pageTitle: 'Client' }) 
   })

}

export default root;
