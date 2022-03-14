import { FastifyPluginAsync } from 'fastify'
import { PrismaClient } from '@prisma/client'
import { transfer } from '../controllers/transfer'

const prisma = new PrismaClient()

interface GetClient {
   idPerson: String
}

interface GetAmount {
   amount_withdrawn: Number,
   amount_depose: Number,
   amount_transfer: number,
   person_id_origin: number,
   person_to_transfert: number
}

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {

   fastify.register(require('fastify-formbody'))

   fastify.get('/', async (request, reply:any) => {
      const balance = await prisma.account.findMany({
         orderBy: { personId: 'asc' }
      })
      const listPerson = await prisma.person.findMany({
         where: { roleId: 2 },
         orderBy: { idPerson: 'asc' }
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

   fastify.post('/addWithdrawn', async (request, reply:any) => {
      //const {amount_withdrawn} = request.body as GetAmount
      return request.body
   })

   fastify.post('/addDepose', async (request, reply:any) => {
      //const {amount_depose} = request.body as GetAmount
      return request.body
   })

   fastify.post('/addTransfer', async (request, reply:any) => {
      const {amount_transfer, person_id_origin, person_to_transfert} = request.body as GetAmount
      if (amount_transfer && person_id_origin && person_to_transfert) {
         return transfer(+person_id_origin, +person_to_transfert, +amount_transfer)
      }
      return request.body
   })
}

export default root;

