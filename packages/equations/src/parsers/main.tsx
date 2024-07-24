import { UnifiedMdxParser } from "@ulld/api/types";
import { parseMathTags } from "./mathTagParser";
import { applyRecursiveMdxParsers } from "@ulld/api/applyRecursiveMdxParser";


const mathParsers: UnifiedMdxParser = async (data) => {
    return applyRecursiveMdxParsers(data, [parseMathTags]);
}


export default mathParsers
