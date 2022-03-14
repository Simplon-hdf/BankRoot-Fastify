import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function transfer(from: number, to: number, amount: number) {
    return await prisma.$transaction(async (prisma) => {
    // 1. Decrement amount from the sender.
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
    
    // 2. Verify that the sender's balance didn't go below zero.
    if (sender.balance < 0) {
      throw new Error(`${from} doesn't have enough to send ${amount}`)
    }
   
    // 3. Increment the recipient's balance by amount
    const getRecipientPerson = await prisma.person.findUnique({
      where: {
        idPerson: to
      }
    })

    const getRecipientAccount = await prisma.account.findFirst({
      where: {
        personId: getRecipientPerson?.idPerson
      }
    })

    const recipient = prisma.account.update({
      data: {
        balance: {
          increment: amount,
        },
      },
      where: {
        idAccount: getRecipientAccount?.idAccount
      },
    })
    return recipient
  })
}