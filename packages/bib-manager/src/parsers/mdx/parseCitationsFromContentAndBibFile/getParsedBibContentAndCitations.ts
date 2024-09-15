import { replaceRecursively } from "@ulld/utilities/general";
import { formatCitation } from "./formatCitation";

export const getParsedMdxContent = (content: string) => {
    let c = content;
    const regex = /\[@(?<value>[\w|\d|\.|\-|_|\+|\=|\$|\!|\%|\*|\&]*)\]/gm;
    let results: { value: string; length: number; index: number }[] = [];
    let m;
    do {
        m = regex.exec(c);
        if (m && m.groups?.value) {
            results.push({
                value: m.groups.value,
                index: m.index,
                length: m[0].length,
            });
        }
    } while (m);
    const rList = results.map((k) => k.value.toLowerCase());
    for (const citation of results) {
        const rIndex = rList.indexOf(citation.value.toLowerCase());
        let _link = formatCitation(citation.value.toLowerCase(), rIndex);
        c = replaceRecursively(
            c,
            new RegExp(`\\[@${citation.value}\\]`, "gmi"),
            _link,
        );
    }

    return {
        results,
        content: c,
    };
};
