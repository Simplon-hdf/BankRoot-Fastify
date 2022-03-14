import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function deposite(to: number, amount: number) {
    return await prisma.$transaction(async (prisma) => {

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