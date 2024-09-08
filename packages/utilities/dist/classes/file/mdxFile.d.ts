import grayMatter from "gray-matter";
import { FileData } from "./main";
export declare class MdxFile extends FileData {
    path: string;
    frontMatter: unknown;
    constructor(path: string);
    parseFrontMatter(): grayMatter.GrayMatterFile<string>;
}
//# sourceMappingURL=mdxFile.d.ts.map