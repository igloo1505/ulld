export type * from "./components/modularDashboard/types.ts"
import { serverClient } from "@ulld/api/serverClient";
import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";

export interface LandingPageProps {
    config: AppConfigSchemaOutput
}

