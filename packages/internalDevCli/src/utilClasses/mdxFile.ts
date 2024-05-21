import fs from "fs";
import path from "path";
import Cite from "citation-js";
import { parseBibFile, BibEntry } from "bibtex";

type BibContent = ReturnType<typeof parseBibFile>;

const replaceRecursively = (
    value: string,
    replace: string | RegExp,
    replaceWith: string = "",
): string => {
    if (typeof replace === "string") {
        if (value.includes(replace)) {
            return replaceRecursively(
                value.replace(replace, replaceWith),
                replace,
                replaceWith,
            );
        }
        return value;
    }
    if (replace.test(value)) {
        return replaceRecursively(
            value.replace(replace, replaceWith),
            replace,
            replaceWith,
        );
    }
    return value;
};

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
