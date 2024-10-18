// src/developer/styleSchema.ts
import { z } from "zod";
var styleExtensionSchema = z.object({
  tailwindExport: z.string().describe(
    "The export in your package.json that matches your tailwindConfig.ts file."
  ),
  DANGER_disableBaselineTailwind: z.boolean().default(false).describe(
    "In most cases this should only be applied for apps in personal use. Adding multiple plugins that relies on the baseline configuration and disabling that configuration can have unforseen consequences for a wide range of users."
  ),
  DANGER_disableDefaultMDXStyles: z.boolean().default(false).describe(
    "This will disable the import of css files that pertain specifically to rendered mdx content."
  )
});
export {
  styleExtensionSchema
};
//# sourceMappingURL=styleSchema.mjs.map