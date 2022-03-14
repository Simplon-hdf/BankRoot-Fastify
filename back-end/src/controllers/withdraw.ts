import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function withdraw(from: number, amount: number) {
    return await prisma.$transaction(async (prisma) => {

    const getSenderPerson = await prisma.person.findUnique({
      where: {
        idPerson: from
      }
    })

    const getSenderAccount = await prisma.account.findFirst({
      where: {
        personId: getSenderPerson?.idPerson
      }
    })

    const sender = await prisma.account.update({
      data: {
        balance: {
          decrement: amount,
        },
      },
      where: {
        idAccount: getSenderAccount?.idAccount
      },
    })
    
    // Verify that the sender's balance didn't go below zero.
    if (sender.balance < 0) {
      throw new Error(`${from} doesn't have enough to send ${amount}`)
    }
   
    return sender
  })
}