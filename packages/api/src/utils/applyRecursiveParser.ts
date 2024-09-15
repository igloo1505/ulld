import { UnifiedMdxParserParams } from "../individualTypesForDocumentation/parser/unifiedMdxParserParams";
import { MdxParserReturnType, UnifiedMdxParser } from "../types";



export const applyRecursiveMdxParsers = async <T extends object = {}>(
    data: UnifiedMdxParserParams,
    parsers: UnifiedMdxParser[],
): Promise<MdxParserReturnType<T>> => {
    let content = data.content;
    let fm = (data.data || {}) satisfies object
    for await (const parser of parsers) {
        let res = await parser(
            {
                ...data,
                content,
                data: fm
            });
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
        data: fm as MdxParserReturnType<T>["data"],
    };
};
