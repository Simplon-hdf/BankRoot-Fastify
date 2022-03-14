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
    console.log( 'getSenderAccount' + JSON.stringify(getSenderAccount))

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
    console.log( 'sender' + JSON.stringify(sender))
    
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
    console.log( 'getRecipientPerson' + JSON.stringify(getRecipientPerson))

    const getRecipientAccount = await prisma.account.findFirst({
      where: {
        personId: getRecipientPerson?.idPerson
      }
    })
    console.log( 'getRecipientAccount' + JSON.stringify(getRecipientAccount))

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
    console.log('recipient' + JSON.stringify(recipient))
    return recipient
  })
}


// async function main() {
//   // This transfer is successful
//   await transfer(4, 3, 100)
// }


// main()
//   .catch(console.error)
//   .finally(() => {
//     prisma.$disconnect()
//   })