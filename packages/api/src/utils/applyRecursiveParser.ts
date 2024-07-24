import { UnifiedMdxParser, UnifiedMdxParserParams } from "#/types";

export const applyRecursiveMdxParsers = async (data: UnifiedMdxParserParams, parsers: UnifiedMdxParser[]) => {
    let content = data.content
    let fm = data.frontMatter
    for await (const parser of parsers) {
        let res = await parser(data) 
        content = res.content
        if(res.frontMatter){
            fm = res.frontMatter
        }
    }
    return {
        ...data,
        content,
        frontMatter: fm
    }
}
