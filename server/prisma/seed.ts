import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient({})

async function main(){
    const user = await prisma.user.create({
        data:{
            name: 'John Doe',
            email: 'johnDoe@gmail.com',
            avatarUrl: 'https://github.com/joao472762.png',
            
        }
    })

    const pool =  await prisma.pool.create({
        data:{
             title: 'Exemplo Poll',
             code: 'BOL322',
             ownerId: user.id,

             participants:{
                create: {
                    userId: user.id
                }
             }
        }
    })

    await prisma.game.create({
    data: {
        date: '2022-11-05T12:00:00.933Z',
        firstTeamCountryCode: 'BR',
        secondTeamCountryCode: 'DE'
    }
   })

   await prisma.game.create({
    data: {
        date: '2022-11-06T12:00:00.933Z',
        firstTeamCountryCode: 'BR',
        secondTeamCountryCode: 'AR',

        guesses: {
            create: {
                firstTeamPoints: 2,
                secondTeamPoints: 1,

                participant: {
                    connect: {
                        userId_poolId: {
                            userId: user.id,
                            poolId: pool.id
                        }
                    }
                }
            }
        }
    }
   })
}

main()