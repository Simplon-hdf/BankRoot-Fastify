import { FastifyPluginAsync } from 'fastify'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface GetClient {
   idPerson: String
}

interface Test {
   amount_withdrawn: Number,
   amount_depose: Number,
   amount_transfer: Number
}

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {

   fastify.register(require('fastify-formbody'))

   fastify.get('/', async (request, reply:any) => {
      const balance = await prisma.account.findMany()
      // console.log("..#" + balance)
      const listPerson = await prisma.person.findMany({
         where: { roleId: 2 }
      })
      reply.view('src/views/home', { listPerson: listPerson, balance: balance })
      
   })
   
   fastify.get('/client/:idPerson', async (request, reply:any) => {
      let objet = request.params as GetClient

      const client = await prisma.person.findUnique({
         where: { idPerson: Number(objet.idPerson) }
      })

      const listPerson = await prisma.person.findMany({
         where: { roleId: 2 }
      })
      
      reply.view('src/views/client', { person: client, listPerson: listPerson })
   })

   fastify.post('/add', async (request, reply:any) => {
      const {amount_withdrawn, amount_depose, amount_transfer} = request.body as Test

      console.log(amount_withdrawn, amount_depose, amount_transfer)

      return request.body
   })
}
export default root;

