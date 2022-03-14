// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// export async function deposite(from: number, to: number, amount: number) {
//     return await prisma.$transaction(async (prisma) => {

//     const getRecipientPerson = await prisma.person.findUnique({
//       where: {
//         idPerson: to
//       }
//     })

//     const getRecipientAccount = await prisma.account.findFirst({
//       where: {
//         personId: getRecipientPerson?.idPerson
//       }
//     })

//     const recipient = prisma.account.update({
//       data: {
//         balance: {
//           increment: amount,
//         },
//       },
//       where: {
//         idAccount: getRecipientAccount?.idAccount
//       },
//     })

//     // Verify that the sender's balance didn't go below zero.
//     // if (recipient.balance < 0) {
//     //     throw new Error(`${from} doesn't have enough to send ${amount}`)
//     //   }

    
//     return deposite
//   })
// }