import Fastify from 'fastify'
import {PrismaClient} from '@prisma/client'
import cors  from '@fastify/cors'
import {z} from 'zod'
import shortUniqueId from 'short-unique-id'




const prisma = new PrismaClient({
    log: ['query']
})

async function bootstrap(){
    const fastify = Fastify({
        logger: true
    })

    fastify.register(cors,{
        origin: true
    })

    fastify.get('/users/count', async () => {
        const count = await prisma.user.count()

        return {
            count
        }
    })

    fastify.get('/guesses/count', async () => {
        const count = await prisma.guess.count()
        
        return {
            count: count
        }
    })

    fastify.get('/pools/count', async () => {
        const count = await prisma.pool.count()
        
        return {
            count: count
        }
    })

    fastify.post('/pools', async (request, reply) => {
        
        const createPoolBody = z.object({
            title: z.string()
        })


        try {
            const {title}  = createPoolBody.parse(request.body)
            const generate = new shortUniqueId({length: 6})
            const code = String(generate()).toUpperCase()
          
            await prisma.pool.create({
                data: {
                    title,
                    code

                }
            })

            return reply.status(201).send({code})



        } catch (error) {
            return reply.status(406).send({
                error: error
            })
        }

    })

    await fastify.listen({port: 3333})
}

bootstrap()