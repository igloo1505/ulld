import { publicProcedure, router } from "../trpc";
import {z} from 'zod'
import {parseMdxString} from "@ulld/parsers/mdxBeta"



export const betaRouter = router({
     parseMdxString: publicProcedure.input(z.object({
        content: z.string()
    })).mutation(async ({input}) => {
       return await parseMdxString(input);
    })
})
