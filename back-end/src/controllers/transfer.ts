import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function transfer(from: string, to: string, amount: number) {
    return await prisma.$transaction(async (prisma) => {
    // 1. Decrement amount from the sender.
    const getPerson = await prisma.person.findUnique({
      where: {
        mail: from,
      }
    })

    const sender = await prisma.account.update({
      data: {
        balance: {
          decrement: amount,
        },
      },
      where: {
        idAccount: 1
      },
    })
    
    // 2. Verify that the sender's balance didn't go below zero.
    if (sender.balance < 0) {
      throw new Error(`${from} doesn't have enough to send ${amount}`)
    }
   
    // 3. Increment the recipient's balance by amount
    const recipient = prisma.account.update({
      data: {
        balance: {
          increment: amount,
        },
      },
      where: {
        mail: to,
      },
    })
    return recipient
  })
}


async function main() {
  // This transfer is successful
  await transfer('dp@gmail.com', 'xp@gmail.com', 100)
}


main()
  .catch(console.error)
  .finally(() => {
    prisma.$disconnect()
  })