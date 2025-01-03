import { z } from "zod";
import { transformExportStringArray } from "@ulld/utilities/transformExportString";
import { AdditionalImportsConfig } from "./types/additionalImportsConfig.js";

export const additionalImportsConfigSchema: z.ZodType<AdditionalImportsConfig> =
    z.object({
        root: z
            .string()
            .array()
            .default([])
            .describe(
                "Additional imports to add to the RootLayout. These will not be added to the dom, but may be used to import files that don't need to be executed like css or scss files. Must match export in package.json",
            )
            .transform(transformExportStringArray),
        mdx: z
            .string()
            .array()
            .default([])
            .describe(
                "Similar to additionalImports.root, but only applied to pages with rendered mdx content.",
            )
            .transform(transformExportStringArray),
    });
