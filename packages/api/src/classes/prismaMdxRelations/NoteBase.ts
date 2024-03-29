import { getNoteTypeFromPath } from "@ulld/configschema/configUtilityTypes/general";
import type { Route } from "next";
import { getUniversalQuery } from "../../actions/universal/getUniversalClient";
import { replaceRecursively } from "@ulld/utilities/utils/general";
import { ParsableExtension } from "./zod/general";


export class NoteBase {
    rootRelativePath?: string | null
    ftExtension: string
    constructor(rootRelativePath?: string | null, extension: ParsableExtension = ".mdx") {
        this.rootRelativePath = rootRelativePath
        this.ftExtension = extension
    }

    // PRIORITY: Come back and handle this. Issue's popping up in the lawyerVid nested directory, but likely will creep up elsewhere if not resolved.
    getHref(): Route | undefined {
        let t = getNoteTypeFromPath(this.rootRelativePath)
        if (!t) {
            console.log(`No note href could be found for a note at path ${this.rootRelativePath}`)
            return
        }
        if (t === "RemoteNote"){
            console.log(`No noteType found. Interpreting note as remote.`)
            return
        }
        let rootRelativePath = this.rootRelativePath as string
        const _fs = t.fs as string
        const _url = t.url as string
        let subPath = rootRelativePath.startsWith(_fs) ? rootRelativePath.slice(_fs.length, rootRelativePath.length) : rootRelativePath.split(_fs)[1]
        if (subPath.endsWith(this.ftExtension)) {
            subPath = subPath.slice(0, subPath.length - this.ftExtension.length)
        }
        let urlSplit = _url.split("?")[0]
        return `${urlSplit || _url}${subPath}` as Route
    }

    async parseQuickLinks(content: string) {
        let reg = /\[(?<label>[^\]]*)\]\(note:(?<content>[\w|\-|\d]*)#?(?<id>[\w|\-|\d]*)\)/gm
        let c = content
        let m;
        let links = []
        do {
            m = reg.exec(c);
            if (m && m.groups && Boolean(m.groups?.label && m.groups?.content)) {
                const query = await getUniversalQuery("getQuickLinkHref")
                console.log("Finding note href for id: ", m.groups.content)
                let res = await query(m.groups.content)
                if (res && res.href) {
                    links.push(m.groups.content)
                    let _link = `[${m.groups.label}](${res.href}${m.groups.id ? `#${m.groups.id}` : ''})`
                    c = `${c.slice(0, m.index)}${_link}${c.slice(m.index + m[0].length, c.length)}`
                }
            }
        } while (m);
        return {
            content: c,
            links: links
        }
    }
    getLinkShortcutRegex(k: string) {
        return new RegExp(`\\[(?<base>[^\\]]*)\\]\\(_(?<abbrev>${k})_(?<pathname>[^\\)]*)\\)`)
    }
    parseLinkShortcuts(content: string) {
        let c = content
        // TODO: Use a field in appConfig to allow 'smartLinks', as either a function that takes the results of a regex and returns an href string, or as a base string to which the parsed syntax is appended to. This can be used form things linking directly to queries with search params or for commonly linked base paths with sub paths.
        // for (const k in internalConfig.remoteLinkAbbreviations) {
        //     // NOTE: Syntax requires a _someAbbreviation_ with the surrounding underscores to be found as an abbreviation.
        //     let regex = this.getLinkShortcutRegex(k)
        //     let m;
        //     do {
        //         m = regex.exec(c);
        //         if (m && m.groups?.value) {
        //             const _link = `[${m.groups.base}](${internalConfig.remoteLinkAbbreviations[k]}${withForwardSlash(m.groups.pathname)})`
        //             c = `${c.slice(0, m.index)}${_link}${c.slice(m.index + m[0].length, c.length)}`
        //         }
        //     } while (m);
        // }
        return c
    }
    formatTag(s: string) {
        return `<a className="queryLink queryTag" href="/searchAll?tags=${s}">#${s}</a>`
    }
    formatCitation(s: string, index: number) {
        return `<span style={{
width: "0.5rem",
height: "100%",
position: "relative"
}}><a href='#bib-${s}' className="citation citationAnchor" id="cit-${s}-idx-${index}">${index + 1}</a></span>`
    }
    formatVideoTimestampLink(m: RegExpExecArray) {
        const videoId = m.groups?.videoId
        const time = m.groups?.time
        if (!m || !videoId || !time) {
            return ""
        }
        const params = new URLSearchParams()
        params.set("vid", videoId)
        params.set("t", time)
        return `<VideoTimestampLink className="timestamp-link" role="button" videoId="${videoId}" timeStamp="${time}" >${m.groups?.label || m.groups?.time || ""}</VideoTimestampLink>`
    }
    parseVideoTimeLinks(content: string) {
        let regex = /\[(?<label>[^\]]*)\]\(videoLink\/(?<videoId>[^\/]*)\/(?<time>[\d|:]*)\)/gm
        let c = content
        let m;
        do {
            m = regex.exec(c)
            if (m && m.groups?.label && m.groups?.videoId && m.groups?.time) {
                c = `${c.slice(0, m.index)}${this.formatVideoTimestampLink(m)}${c.slice(m.index + m[0].length, c.length)}`
            }
        } while (m);
        return {
            content: c,
        }
    }
    parseTags(content: string) {
        const regex = /\[#(?<value>[\w|\d|\.|\-|_|\+|\=|\$|\!|\%|\*|\&]*)\]/gm
        let results: string[] = []
        let c = content
        let m;
        do {
            m = regex.exec(c);
            if (m && m.groups?.value && m.groups?.value.trim() !== "" && m.groups.value !== "\n") {
                let _link = this.formatTag(m.groups.value)
                // c = `${c.slice(0, m.index)}${_link}${c.slice(m.index + m[0].length, c.length)}`
                c = replaceRecursively(c, new RegExp(`\\[#${m.groups.value}\\]`, "gm"), _link)
                results.push(m.groups.value)
            }
        } while (m);
        let reg2 = /<TagBar>(?<content>[\w|\s|\d|\-|.]*)<\/TagBar>/gm
        let l;
        do {
            m = reg2.exec(c);
            let _results = m?.groups?.content.split(" ")
            if (_results) {
                for (const r of _results) {
                    let rt = r.trim()
                    if (rt.length !== 0 && rt !== "\n") {
                        results.push(rt)
                        // results = results.concat(m.groups.content.split(" "))
                    }
                }
            }
        } while (l);
        return {
            content: c,
            results: results
        }
    }
    parseEquationTags(content: string) {
        let results: string[] = []
        const regex = /\[eq:(?<equationId>[\w|\d]+)\]/gm
        let c = content
        let m;
        do {
            m = regex.exec(c);
            if (m && m.groups?.equationId && m.groups?.equationId.trim() !== "" && m.groups.equationId !== "\n") {
                let _link = `<EquationTag equationId="${m.groups.equationId}" />`
                // c = `${c.slice(0, m.index)}${_link}${c.slice(m.index + m[0].length, c.length)}`
                c = replaceRecursively(c, new RegExp(`\\[eq:${m.groups.equationId}\\]`, "gm"), _link)
                results.push(m.groups.value)
            }
        } while (m);
        return c
    }
    getEquationIds(content: string) {
        const regex = /<Equation\s+.*id={?"(?<equationId>\S*)"}?.*>/gm
        let results: string[] = []
        let m;
        do {
            m = regex.exec(content);
            if (m && m.groups?.equationId && m.groups?.equationId.trim() !== "") {
                if (!results.includes(m.groups.equationId)) {
                    results.push(m.groups.equationId)
                }
            }
        } while (m);
        return results
    }
    getDefinitionAnchorHtml(m: RegExpExecArray): string {
        const idString = m.groups?.definitionId ? `id="def-${m.groups.definitionId}"` : ""
        const contentString = m.groups?.content ? `<dd>
${m.groups.content}
</dd>` : ""
        return `<dl
            ${idString}
            className={"definitionAnchor"}
        >
            <dt>
                   ${m.groups?.label || m.groups?.definitionId || ""} 
            </dt> 
            ${contentString}
        </dl>
`
    }
    parseDefinitionTags(content: string) {
        let results: { id: string, content?: string, label?: string }[] = []
        const regex = /\[define:(?<definitionId>[\w|\d]+)\]({(?<label>.*)})?(\((?<content>[^\)]*)\))?/gm
        let c = content
        let m;
        do {
            m = regex.exec(c);
            if (m && m.groups?.definitionId && m.groups?.definitionId.trim() !== "" && m.groups.definitionId !== "\n") {
                const contentString = m.groups?.content ? `content={\`${m.groups.content}\`}` : ""
                const labelString = m.groups?.label ? `label={\`${m.groups.label}\`}` : ""
                // let _link = `<DefinitionTag isDefinition definitionId="${m.groups.definitionId}" ${labelString} ${contentString} />`
                let _link = this.getDefinitionAnchorHtml(m)
                c = replaceRecursively(c, m[0], _link)
                results.push({ id: m.groups.definitionId.trim(), content: m.groups?.content, label: m.groups?.label?.trim() })
            }
        } while (m);
        const regexTwo = /\[def:(?<definitionId>[\w|\d]+)\]/gm
        let l;
        do {
            l = regexTwo.exec(c);
            if (l && l.groups?.definitionId && l.groups?.definitionId.trim() !== "" && l.groups.definitionId !== "\n") {
                let _link = `<DefinitionTag definitionId="${l.groups.definitionId}" />`
                c = replaceRecursively(c, new RegExp(`\\[def:${l.groups.definitionId}\\]`, "gm"), _link)
            }
        } while (m);
        return {
            content: c,
            definitions: results
        }
    }
}
