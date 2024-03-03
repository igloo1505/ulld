import { prisma } from "#/db";
import { publicProcedure, router } from "#/trpc/trpc";
import { z } from 'zod'
import { Prisma } from '@prisma/client'
import { dietOnlySchema } from "#/schemas/health/diet";

const dietFilterObject = z.object({
    name: z.string()
})

const getDietWhereFilter = (d: z.infer<typeof dietFilterObject>): Prisma.DietWhereInput => {
    if (d.name) {
        return {
            name: d.name
        }
    } else {
        return {
            ...d
        }
    }
}


export const dietRouter = router({
    createDiet: publicProcedure.input(dietOnlySchema).mutation(async ({ input }) => {
        return await prisma.diet.create({
            data: {
                ...input,
            }
        })
    }),
    getDietDetails: publicProcedure.input(dietFilterObject).query(async ({ input }) => {
        return await prisma.diet.findFirst({
            where: getDietWhereFilter(input),
            include: {
                periodsFollowed: true
            }
        })
    }),
    getDietForEditing: publicProcedure.input(z.string()).query(async ({ input }) => {
        return await prisma.diet.findFirst({
            where: {
                name: input
            },
            include: {
                periodsFollowed: true
            }
        })
    }),
})
