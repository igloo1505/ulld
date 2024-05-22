import fs from "fs";

export class MdxFile {
    content: string;
    constructor(public path: string) {
        if (!fs.existsSync(path)) {
            throw new Error(
                `Path provided to MdxFile does not exist. Check: ${path}`,
            );
        }
        this.content = fs.readFileSync(path, { encoding: "utf-8" });
    }
}
