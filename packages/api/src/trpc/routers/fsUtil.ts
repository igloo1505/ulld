import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import fs from "fs";
import path from "path";
import {
    currentParsableExtensions,
    ParsableExtensions,
} from "@ulld/configschema/zod/secondaryConfigParse/getParsableExtensions";
import { getInternalConfig } from "@ulld/configschema/zod/getInternalConfig";
import { getRootRelativePathSchema } from "../../schemas/filesystem/rootRelativePathSchema";
import { getRootRelativePathsOfFiletype } from "../../trpcInternalMethods/filesystem/getRootRelativePathsOfFiletype";
import { checkParsableFiletypesAtPath } from "../../trpcInternalMethods/filesystem/checkParsableFiletypesAtPath";
import { clearTempDir } from "../../trpcInternalMethods/filesystem/clearTempDir";
import { filePathGlobPropsSchema } from "@ulld/utilities/filePathSchemas";
import { readAppConfig } from "@ulld/developer/readAppConfig";
import { zodWithForwardSlashTransform } from "@ulld/configschema/zod/configUtilitySchemas";

export const fsUtilRouter = router({
    getParsableFiletypesAtPath: publicProcedure
        .input(z.string())
        .query(async (opts) => {
            return (await checkParsableFiletypesAtPath(
                opts.input,
                getInternalConfig().fsRoot,
            )) as { [k in ParsableExtensions]: boolean };
        }),
    getAllRootRelativePathsOfFiletype: publicProcedure
        .input(currentParsableExtensions)
        .query(async (opts) => {
            return await getRootRelativePathsOfFiletype(opts.input);
        }),
    clearTempDir: publicProcedure.mutation(async (opts) => {
        return await clearTempDir();
    }),
    getFsRootGlob: publicProcedure
        .input(filePathGlobPropsSchema)
        .query(async ({ input }) => {
            let appConfig = await readAppConfig();
            let glob = await import("glob").then((x) => x.glob)
            let res = await glob(input.glob, {
                cwd: appConfig.fsRoot,
                ignore: input.ignore || undefined,
                nodir: input.type === "files",
            });
            console.log("res: ", res);
            let returnAbsolute = input.returnAs === "absolute";
            if (returnAbsolute) {
                res = res.map((x) => path.join(appConfig.fsRoot, x));
            } else {
                res = res.map((x) => zodWithForwardSlashTransform(x));
            }
            if (input.type === "dirs") {
                res = res.filter((x) =>
                    fs
                        .statSync(returnAbsolute ? x : path.join(appConfig.fsRoot, x))
                        .isDirectory(),
                );
            }
            return res;
        }),
    getUtf8File: publicProcedure
        .input(
            z.object({
                rootRelativePath: z.string(),
                useProcessRoot: z.boolean().default(false),
            }),
        )
        .query(async (opts) => {
            const _root = opts.input.useProcessRoot
                ? process.cwd()
                : getInternalConfig().fsRoot;
            console.log("_root: ", _root);
            const f = getRootRelativePathSchema(_root).parse(
                opts.input.rootRelativePath,
            );
            let fileContent = await fs.promises.readFile(`${_root}${f}`, {
                encoding: "utf-8",
            });
            return fileContent;
        }),
});
