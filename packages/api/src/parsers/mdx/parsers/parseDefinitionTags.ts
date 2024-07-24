import { replaceRecursively } from "@ulld/utilities/general";
import { Definition } from "../../../classes/prismaMdxRelations/definition";
import { UnifiedMdxParser } from "../../../types";

const getDefinitionAnchorHtml = (m: RegExpExecArray): string => {
    const idString = m.groups?.definitionId
        ? `id="def-${m.groups.definitionId}"`
        : "";
    const contentString = m.groups?.content
        ? `<dd>
${m.groups.content}
</dd>`
        : "";
    return `<dl
            ${idString}
            className={"definitionAnchor"}
        >
            <dt>
                   ${m.groups?.label || m.groups?.definitionId || ""} 
            </dt> 
            ${contentString}
        </dl>
`;
};

interface ExtendedFrontMatter {
    definitions: Definition[];
}

export const parseDefinitionTags: UnifiedMdxParser<
    ExtendedFrontMatter
> = async (data) => {
    let results: { id: string; content?: string; label?: string }[] = [];
    const regex =
        /\[define:(?<definitionId>[\w|\d]+)\]({(?<label>.*)})?(\((?<content>[^\)]*)\))?/gm;
    let c = data.content;
    let m;
    do {
        m = regex.exec(c);
        if (
            m &&
            m.groups?.definitionId &&
            m.groups?.definitionId.trim() !== "" &&
            m.groups.definitionId !== "\n"
        ) {
            let _link = getDefinitionAnchorHtml(m);
            c = replaceRecursively(c, m[0], _link);
            results.push({
                id: m.groups.definitionId.trim(),
                content: m.groups?.content,
                label: m.groups?.label?.trim(),
            });
        }
    } while (m);
    const regexTwo = /\[def:(?<definitionId>[\w|\d]+)\]/gm;
    let l;
    do {
        l = regexTwo.exec(c);
        if (
            l &&
            l.groups?.definitionId &&
            l.groups?.definitionId.trim() !== "" &&
            l.groups.definitionId !== "\n"
        ) {
            let _link = `<DefinitionTag definitionId="${l.groups.definitionId}" />`;
            c = replaceRecursively(
                c,
                new RegExp(`\\[def:${l.groups.definitionId}\\]`, "gm"),
                _link,
            );
        }
    } while (m);
    return {
        content: c,
        frontMatter: {
            ...data.frontMatter,
            definitions: results.map(
                (d) =>
                    new Definition({
                        id: d.id,
                        content: d.content,
                        label: d.label,
                        mdxNoteId: data.db.noteId,
                    }),
            ),
        },
    };
};
