import { AppConfigSchemaOutput } from "@ulld/types";

export interface UnifiedMdxParserParams {
    content: string;
    docTypeData: AppConfigSchemaOutput["noteTypes"][number];
}

export type UnifiedMdxParser = (parserProps: UnifiedMdxParserParams) => Promise<string>
