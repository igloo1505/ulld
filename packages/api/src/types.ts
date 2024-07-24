import { AppConfigSchemaOutput, FrontMatterType, ParserKey } from "@ulld/types";
import { serverClient } from "./trpc/serverClient";
export { UnifiedMdxParserParams } from "./individualTypesForDocumentation/parser/unifiedMdxParserParams";

type MdxParserReturnType<T extends unknown = {}> = {
  content: string;
  data?: FrontMatterType & T;
};

export type UnifiedMdxParser<ExtendedFrontMatterType extends unknown = {}> = (
  parserProps: UnifiedMdxParserParams,
) => Promise<MdxParserReturnType<ExtendedFrontMatterType>>;

type UnifiedParserMap<ExtendedFrontMatterType extends unknown = {}> = {
  mdx: UnifiedMdxParser<ExtendedFrontMatterType>;
};

export type UnifiedParserOfType<
  T extends ParserKey,
  ExtendedFrontMatterType extends unknown = {},
> = UnifiedParserMap<ExtendedFrontMatterType>[T];
