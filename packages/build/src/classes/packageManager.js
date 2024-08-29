import { FileData } from "@ulld/utilities/fileClass";
import path from 'path';
export class PackageManager {
    constructor(paths, type) {
        this.paths = paths;
        this.type = type;
    }
    writeData() {
        this.writeNpmrc();
    }
    writeNpmrc() {
        let contentPath = path.join(__dirname, `../fileContent/npmrc/${this.type}.txt`);
        let f = new FileData(contentPath, false);
        if (f.exists()) {
            let content = f.getContent();
            if (!content)
                return;
            let outputFile = new FileData(this.paths.joinPath("projectRoot", ".npmrc"), false);
            outputFile.writeContent(content);
        }
    }
}
