import { UnifiedMdxParser } from "../../../types";

interface ExtendedFrontMatter {
    links: string[];
}

export const parseQuickLinks: UnifiedMdxParser<ExtendedFrontMatter> = async (
    data,
) => {
    let reg =
        /\[(?<label>[^\]]*)\]\(note:(?<content>[\w|\-|\d]*)#?(?<id>[\w|\-|\d]*)\)/gm;
    let c = data.content;
    let m;
    let links = [];
    do {
        m = reg.exec(c);
        if (m && m.groups && Boolean(m.groups?.label && m.groups?.content)) {
            const res = await data.serverClient.universalNotes.getQuickLinkHref(
                m.groups.content,
            );
            if (res && res.href) {
                links.push(m.groups.content);
                let _link = `[${m.groups.label}](${res.href}${m.groups.id ? `#${m.groups.id}` : ""})`;
                c = `${c.slice(0, m.index)}${_link}${c.slice(m.index + m[0].length, c.length)}`;
            }
        }
    } while (m);

    return {
        content: c,
        data: {
            ...data.data,
            links: links,
        },
    };
};
