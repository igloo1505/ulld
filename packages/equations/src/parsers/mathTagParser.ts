import { UnifiedMdxParser } from "@ulld/api/types";
import { replaceRecursively } from "@ulld/utilities/general";

export const parseMathTags: UnifiedMdxParser = async (data) => {
    let results: string[] = [];
    const regex = /\[eq:(?<equationId>[\w|\d]+)\]/gm;
    let c = data.content;
    let m;
    do {
        m = regex.exec(c);
        if (
            m &&
            m.groups?.equationId &&
            m.groups?.equationId.trim() !== "" &&
            m.groups.equationId !== "\n"
        ) {
            let _link = `<EquationTag equationId="${m.groups.equationId}" />`;
            // c = `${c.slice(0, m.index)}${_link}${c.slice(m.index + m[0].length, c.length)}`
            c = replaceRecursively(
                c,
                new RegExp(`\\[eq:${m.groups.equationId}\\]`, "gm"),
                _link,
            );
            results.push(m.groups.equationId);
        }
    } while (m);
    return {
        content: c,
        data: {
            ...data.data,
            equationIds: results
        }
    };
};

