
import { getImagesInDir } from "#/trpcInternalMethods/filesystem/getImagesInDir"
import { z } from "zod"
import { publicProcedure, router } from "../../trpc"


export const mediaRouter = router({
    getImagesInDir: publicProcedure.input(z.object({
        path: z.string(),
        recursive: z.boolean().optional().default(false)
    })).query(async (opts) => {
        return await getImagesInDir(opts.input)
    }),
})
