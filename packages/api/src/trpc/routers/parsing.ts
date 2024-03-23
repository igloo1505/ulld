import { latexStringToPdf, latexStringToPdfPropSchema } from "@ulld/parsers/latex/latexToPdf";
import { publicProcedure, router } from "../trpc";
import { zodSerializeMdxInputSchema } from "../../schemas/contentParsing/mdx";
import { serializeMdxContent } from "@ulld/parsers/mdx/compiler/main";


export const parsingProcedure = router({
    serializeMdxString: publicProcedure.input(zodSerializeMdxInputSchema).mutation(async ({ input }) => {
        return await serializeMdxContent(input.content, typeof input?.rsc === "boolean" ? input.rsc : true, input.config)
    }),
    latexStringToPdf: publicProcedure.input(latexStringToPdfPropSchema).mutation(async ({ input }) => {
        return await latexStringToPdf(input)
    })
})
