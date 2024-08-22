import fs from "fs";
import { makeAbsolute } from "@ulld/utilities/pathUtilsClientSide";

export const imageToBase64Url = async (p: string, fsRoot: string) => {
    let absPath = makeAbsolute(p, fsRoot)
    console.log("absPath: ", absPath)
    let bitmap = await fs.promises.readFile(absPath);
    return new Buffer(bitmap).toString("base64");
};
