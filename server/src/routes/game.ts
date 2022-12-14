import { FastifyInstance } from "fastify";
import { string, z } from "zod";
import { prisma } from "../libs/prisma";
import { authenticate } from "../plugins/authenticate";


export async function gameRoutes(fastify: FastifyInstance){
    fastify.get('/pools/:id/games',{
        onRequest: authenticate
    }, async (request, reply) => {
        const getPoolsParams =  z.object({
            id: string()
        })

        const {id} = getPoolsParams.parse(request.params)

        const games = await prisma.game.findMany({
            orderBy:{
                date: 'desc'
            },
            include: {
                guesses: {
                    where: {
                        participant: {
                            userId: request.user.sub,
                            poolId: id
                        }
                    }
                }
            }
        })

        const gamesFormated = games.map(game => {
            return {
                ...game,
                guess: game.guesses.length > 0 ? game.guesses[0] : null,
                guesses: undefined
            }
        })

        return {gamesFormated}
    })
}