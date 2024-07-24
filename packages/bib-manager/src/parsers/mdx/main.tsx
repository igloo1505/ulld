import { UnifiedMdxParser } from "@ulld/api/types";
import { parseMdxCitations } from "./parseCitations";
import { applyRecursiveMdxParsers } from "@ulld/api/applyRecursiveMdxParser";

export const bibMdxParser: UnifiedMdxParser = async (data) => {
    return await applyRecursiveMdxParsers(data, [parseMdxCitations]);
};
