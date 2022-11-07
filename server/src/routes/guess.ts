import { FastifyInstance } from "fastify"
import { string, z } from "zod"
import { prisma } from "../libs/prisma"
import { authenticate } from "../plugins/authenticate"

export async function guessRoutes(fastify: FastifyInstance){
    fastify.get('/guesses/count', async () => {
        const count = await prisma.guess.count()
        
        return {
            count: count
        }
    })

    fastify.post('/pools/:poolId/games/:gameId',{
        onRequest: [authenticate]
    }, async (request, reply) => {
        
        const createGuessParms = z.object({
            poolId: string(),
            gameId: string()
        })

        
        const createGuessBody = z.object({
            firstTeamPoints : z.number(),
            secondTeamPoints : z.number()
        })

        const {poolId,gameId} = createGuessParms.parse(request.params)
        const {firstTeamPoints,secondTeamPoints} = createGuessBody.parse(request.body)

        const participant = await prisma.participant.findUnique({
            where: {
                userId_poolId: {
                    poolId,
                    userId: request.user.sub

                }
            }
        })

        if(!participant){
            return reply.status(400).send({
                message: "You're not allowed to create a guess inside the pool"
            })
        }

        const guess = await  prisma.guess.findUnique({
            where: {
                participantId_gameId: {
                    participantId: participant!.id,
                    gameId
                }
            }
        })

        if(guess){
            return reply.status(400).send({
                message: 'You already create a guess in this game.'
            })
        }

        const game = await prisma.game.findUnique({
            where: {
                id: gameId
            }
        })

        if(!game){
           return reply.status(400).send({
                message: 'Game not found'
            })
        }

        if(game.date < new Date() ){
            return reply.status(400).send({
                message: 'You cannot send guessses after the game data;'
            })
        }

        await prisma.guess.create({
            data: {
                participantId: participant.id,
                gameId,
                firstTeamPoints,
                secondTeamPoints
            }
        })

        return reply.status(201).send()

        

      


    })
}