import { AppConfigSchemaOutput, FrontMatterType, ParserKey } from "@ulld/types";
import { serverClient } from "./trpc/serverClient";
export interface UnifiedMdxParserParams {
    content: string;
    docTypeData: AppConfigSchemaOutput["noteTypes"][number];
    frontMatter: Partial<FrontMatterType>;
    appConfig: AppConfigSchemaOutput;
    serverClient: typeof serverClient;
    db: {
        noteId?: number | null;
    };
}
type MdxParserReturnType<T extends unknown = {}> = {
    content: string;
    frontMatter?: FrontMatterType<T>;
};
export type UnifiedMdxParser<ExtendedFrontMatterType extends unknown = {}> = (parserProps: UnifiedMdxParserParams) => Promise<MdxParserReturnType<ExtendedFrontMatterType>>;
type UnifiedParserMap<ExtendedFrontMatterType extends unknown = {}> = {
    mdx: UnifiedMdxParser<ExtendedFrontMatterType>;
};
export type UnifiedParserOfType<T extends ParserKey, ExtendedFrontMatterType extends unknown = {}> = UnifiedParserMap[T];
export {};
//# sourceMappingURL=types.d.ts.map