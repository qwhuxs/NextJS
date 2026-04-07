import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const article = await prisma.article.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'Моя перша стаття з БД',
      content: 'Це контент, який ми додали через Seed файл.',
    },
  })
  console.log({ article })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })