import { defaultComponentConfigRoot } from "../static/paths.js";
import { globSync } from "glob";
export class DocumentationManager {
    constructor() { }
    async generateComponentDocs(componentConfigRoot = defaultComponentConfigRoot) {
        const files = globSync(`${componentConfigRoot}/**.{ts,tsx}`, {
            absolute: true,
        });
        for await (const f of files) {
            let file = await import(f.replace(".tsx", ""));
            console.log("file: ", file);
        }
        console.log("files: ", files);
    }
}
