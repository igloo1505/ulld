import { UnifiedMdxParser } from "../../types";
import { applyRecursiveMdxParsers } from "../../utils/applyRecursiveParser";
import { parseDefinitionTags } from "./parsers/parseDefinitionTags";
import { parseQuickLinks } from "./parsers/parseQuickLinks";
import { parseTags } from "./parsers/parseTags";
import { parseVideoTimeStampLinks } from "./parsers/parseVideoTimeStampLinks";

const coreMdxParser: UnifiedMdxParser = async (data) => {
  return applyRecursiveMdxParsers(data, [
        parseDefinitionTags,
        parseTags,
        parseVideoTimeStampLinks,
        parseQuickLinks
    ]);
};

export default coreMdxParser;
