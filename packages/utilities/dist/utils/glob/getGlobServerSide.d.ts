import type { AppConfigSchemaOutput } from "@ulld/types";
import type { z } from "zod";
import { filePathGlobPropsSchema } from "../../schemas/filePath/filePathInput.js";
export type GlobInput = z.input<typeof filePathGlobPropsSchema>;
export declare const getGlobServerSide: (props: GlobInput, appConfig: AppConfigSchemaOutput) => Promise<string[]>;
//# sourceMappingURL=getGlobServerSide.d.ts.map