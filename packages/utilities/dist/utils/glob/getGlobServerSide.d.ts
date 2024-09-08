import { AppConfigSchemaOutput } from "@ulld/types";
import { z } from "zod";
import { filePathGlobPropsSchema } from "../../schemas/filePath/filePathInput.js";
export type GlobInput = z.input<typeof filePathGlobPropsSchema>;
export declare const getGlobServerSide: (props: GlobInput, appConfig: AppConfigSchemaOutput) => Promise<string[]>;
//# sourceMappingURL=getGlobServerSide.d.ts.map