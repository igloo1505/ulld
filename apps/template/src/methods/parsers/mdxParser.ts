import type { UnifiedMdxParser } from "@ulld/api/types";
import  mdxParserList  from "./parserLists/mdx";
import { applyRecursiveMdxParsers } from "@ulld/api/applyRecursiveMdxParser";

export const unifiedMdxParser: UnifiedMdxParser = async (
    props
) => {
    return await applyRecursiveMdxParsers(props, mdxParserList)
};
