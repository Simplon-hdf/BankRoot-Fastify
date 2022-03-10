import { FastifyPluginAsync } from 'fastify'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {

   fastify.get('/', async (request, reply:any) => {
      const balance = await prisma.account.findMany()
      const listPerson = await prisma.person.findMany({
         where: { roleId: 2 }
      })
      reply.view('src/views/home', { listPerson: listPerson, balance: balance })
   })

   fastify.get('/client/:idPerson', async (request, reply:any) => {
      const listPerson = await prisma.person.findMany()
      reply.view('src/views/client', { listPerson: listPerson })
   })
}

export default root;
