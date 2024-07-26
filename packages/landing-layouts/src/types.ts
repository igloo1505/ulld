export type * from "./components/modularDashboard/types.ts"
import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";

export interface LandingPageProps {
    config: AppConfigSchemaOutput
}
