import { latexStringToPdf, latexStringToPdfPropSchema } from "@ulld/parsers/latex/latexToPdf";
import { publicProcedure, router } from "../trpc";
import { parseMdxString } from "@ulld/parsers/mdx";
import { parseMdxProps } from "@ulld/utilities/schemas/mdx/parseMdxStringProps"


export const parsingProcedure = router({
    serializeMdxString: publicProcedure.input(parseMdxProps).mutation(async ({ input }) => {
        return await parseMdxString(input)
    }),
    latexStringToPdf: publicProcedure.input(latexStringToPdfPropSchema).mutation(async ({ input }) => {
        return await latexStringToPdf(input)
    })
})
