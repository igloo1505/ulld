import { FrontMatterType } from "@ulld/types";
import { serverClient } from "../../trpc/serverClient";
import { AppConfigSchemaOutput } from "@ulld/configschema/types";
import { MdxDetailsReturnType } from "../../types";


export interface UnifiedMdxParserParams {
    content: string;
    docTypeData: AppConfigSchemaOutput["noteTypes"][number] | {};
    data: Partial<FrontMatterType>
    appConfig: AppConfigSchemaOutput
    serverClient: typeof serverClient // Trpc router
    db: MdxDetailsReturnType
}


