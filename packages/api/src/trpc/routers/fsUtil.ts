import { z } from "zod"
import { publicProcedure, router } from "../trpc"
import fs from 'fs'
import { currentParsableExtensions, ParsableExtensions } from "@ulld/configschema/zod/secondaryConfigParse/getParsableExtensions"
import { getInternalConfig } from "@ulld/configschema/zod/getInternalConfig"
import { getRootRelativePathSchema } from "../../schemas/filesystem/rootRelativePathSchema"
import { getRootRelativePathsOfFiletype } from "../../trpcInternalMethods/filesystem/getRootRelativePathsOfFiletype"
import { checkParsableFiletypesAtPath } from "../../trpcInternalMethods/filesystem/checkParsableFiletypesAtPath"
import { clearTempDir } from "../../trpcInternalMethods/filesystem/clearTempDir"



export const fsUtilRouter = router({
    getParsableFiletypesAtPath: publicProcedure.input(z.string()).query(async (opts) => {
        return await checkParsableFiletypesAtPath(opts.input, getInternalConfig().fsRoot) as { [k in ParsableExtensions]: boolean }
    }),
    getAllRootRelativePathsOfFiletype: publicProcedure.input(currentParsableExtensions).query(async (opts) => {
        return await getRootRelativePathsOfFiletype(opts.input)
    }),
    clearTempDir: publicProcedure.mutation(async (opts) => {
        return await clearTempDir()
    }),
    getUtf8File: publicProcedure.input(z.string()).query(async (opts) => {
        const appConfig = getInternalConfig()
        const f = getRootRelativePathSchema(appConfig.fsRoot).parse(opts.input)
        let fileContent = await fs.promises.readFile(`${appConfig.fsRoot}${f}`, { encoding: "utf-8" })
        return fileContent
    }),
})
