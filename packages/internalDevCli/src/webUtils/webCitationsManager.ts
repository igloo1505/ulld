import { globSync } from "glob";
import { MdxFile } from "../utilClasses/mdxFile.js";
import path from "path";
import fs from "fs";
import "@citation-js/plugin-bibtex";
import Cite from "citation-js";
import { parseBibFile } from "bibtex";

export class WebCitationsManager {
    files: MdxFile[] = [];
    constructor(
        public root: string,
        public bibFile: string = "citations.bib",
    ) { }

    gather() {
        let found = globSync(`${this.root}/**/*.mdx`, {
            ignore: "**/node_modules/**",
            absolute: true,
        });
        this.files = found.map((a) => new MdxFile(a));
    }

    private async getBibContent() {
        let p = path.join(this.root, "citations.bib");
        if (!fs.existsSync(p)) {
            throw new Error(`No bib file was found as ${p}`);
        }
        const content = fs.readFileSync(p, { encoding: "utf-8" });
        let config = Cite.plugins.config.get("@csl");
        config.templates.add("user-defined", content);
        const parsedBibFile = parseBibFile(content)
        console.log("parsedBibFile: ", parsedBibFile)
        return {
            bib: parsedBibFile,
            raw: content,
        };
    }

    private async gatherCitations() {
        let bibContent = await this.getBibContent();
        if (!bibContent) {
            throw new Error(
                "No bib content was found by the WebCitationsManager class.",
            );
        }
        let citations: any[] = [];
        for await (const k of this.files) {
            let a = await k.getCitations(bibContent.bib, bibContent.raw);
            citations.push(a);
        }
        console.log("citations: ", citations);
    }

    async generate() {
        this.gather();
        await this.gatherCitations();
    }
}
