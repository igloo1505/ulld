import { AppConfigSchemaOutput } from "@ulld/types";
import { glob } from "glob";
import { z } from "zod";
import fs from "fs";
import path from "path";
import { filePathGlobPropsSchema } from "../../schemas/filePath/filePathInput.js";
import { withForwardSlash } from "../fsUtils.js";

export type GlobInput = z.input<typeof filePathGlobPropsSchema>;

export const getGlobServerSide = async (
    props: GlobInput,
    appConfig: AppConfigSchemaOutput,
) => {
    let input = filePathGlobPropsSchema.parse(props);
    let res = (await glob(
        input.glob,
        {
            cwd: appConfig.fsRoot,
            ignore: input.ignore || undefined,
            nodir: input.type === "files",
        },
    )) as string[];
    let returnAbsolute = input.returnAs === "absolute";
    if (returnAbsolute) {
        res = res.map((x) => path.join(appConfig.fsRoot, x));
    } else {
        res = res.map((x) => withForwardSlash(x));
    }
    if (input.type === "dirs") {
        res = res.filter((x) =>
            fs
                .statSync(returnAbsolute ? x : path.join(appConfig.fsRoot, x))
                .isDirectory(),
        );
    }
    return res;
};
