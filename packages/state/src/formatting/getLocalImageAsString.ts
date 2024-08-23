import fs from "fs";
import { makeAbsolute } from "@ulld/utilities/pathUtilsServerSide";

export const imageToBase64Url = async (p: string, fsRoot: string) => {
    let absPath = makeAbsolute(p, fsRoot)
    if(!fs.existsSync(absPath)){
        console.error(`Cannot read image at ${absPath}`)
        return false
    }
    let bitmap = await fs.promises.readFile(absPath);
    return bitmap.toString("base64");
};
