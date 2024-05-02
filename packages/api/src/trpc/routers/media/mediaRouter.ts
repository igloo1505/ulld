import { z } from "zod"
import { publicProcedure, router } from "../../trpc"
import { getImagesInDir } from "../../../trpcInternalMethods/filesystem/getImagesInDir"
import { prisma } from "@ulld/database/db"


export const mediaRouter = router({
    getImagesInDir: publicProcedure.input(z.object({
        path: z.string(),
        recursive: z.boolean().optional().default(false)
    })).query(async (opts) => {
        return await getImagesInDir(opts.input)
    }),
    getRandomBackgroundSettings: publicProcedure.query(async () => {
        let randomImage = await prisma.randomImage.findFirst({})
        let res = await prisma.settings.findFirst({
            select: {
                landingImageAlign: true,
                lockedLandingImage: true
            }
        })
        return {
            ...res,
            ...randomImage
        }
    }),
    deleteRandomImage: publicProcedure.input(z.object({
        path: z.string()
    })).mutation(async ({ input }) => {
        return await prisma.randomImage.delete({
            where: {
                path: input.path
            }
        })
    }),
    updateRandomImageBackground: publicProcedure.input(z.object({ path: z.string() })).mutation(async ({ input }) => {
        return await prisma.randomImage.create({
            data: {
                path: input.path
            }
        })
    })
})
