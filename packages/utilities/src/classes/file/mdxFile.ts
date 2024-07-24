import fs from "fs";
import path from "path";
import grayMatter from "gray-matter"
import { FileData } from "./main";

export class MdxFile extends FileData {
    frontMatter: unknown
    constructor(public path: string) {
        super(path);
    }
    parseFrontMatter() {
        let content = this.getContent();
        let gm = grayMatter(content)
        this.content = gm.content
        this.frontMatter = gm.data
        return gm
    }
}
