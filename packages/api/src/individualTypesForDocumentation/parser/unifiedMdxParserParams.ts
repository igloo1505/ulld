import { FrontMatterType } from "@ulld/types";
import { serverClient } from "../../trpc/serverClient";
import { AppConfigSchemaOutput } from "@ulld/configschema/types";
import { MdxDetailsReturnType } from "../../types";
import { MinimalParsableAppConfigOutput } from "@ulld/schemas/mdx-parsing-params";


export interface UnifiedMdxParserParams {
    content: string;
    docTypeData: AppConfigSchemaOutput["noteTypes"][number] | {};
    data: Partial<FrontMatterType>
    appConfig: MinimalParsableAppConfigOutput
    serverClient: typeof serverClient // Trpc router
    db: MdxDetailsReturnType
}


