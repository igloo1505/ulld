import { UnifiedMdxParserParams } from "../individualTypesForDocumentation/parser/unifiedMdxParserParams";
import { MdxParserReturnType, UnifiedMdxParser } from "../types";

export const applyRecursiveMdxParsers = async (
    data: UnifiedMdxParserParams,
    parsers: UnifiedMdxParser[],
): Promise<MdxParserReturnType<any>> => {
    let content = data.content;
    let fm = data.data || {};
    for await (const parser of parsers) {
        let res = await parser(data);
        if (res.content) {
            content = res.content;
        }
        if (res.data) {
            fm = {
                ...fm,
                ...res.data,
            };
        }
    }
    return {
        content,
        data: fm,
    };
};
