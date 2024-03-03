import { latexStringToPdf, latexStringToPdfPropSchema, serializeMdxContent } from "@ulld/parsers";
import { publicProcedure, router } from "../trpc";
import { zodSerializeMdxInputSchema } from "#/schemas/contentParsing/mdx";


export const parsingProcedure = router({
    serializeMdxString: publicProcedure.input(zodSerializeMdxInputSchema).mutation(async ({ input }) => {
        return await serializeMdxContent(input.content, typeof input?.rsc === "boolean" ? input.rsc : true, input.config)
    }),
    latexStringToPdf: publicProcedure.input(latexStringToPdfPropSchema).mutation(async ({ input }) => {
        return await latexStringToPdf(input)
    })
})
