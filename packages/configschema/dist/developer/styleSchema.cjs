'use strict';

var zod = require('zod');

// src/developer/styleSchema.ts
var styleExtensionSchema = zod.z.object({
  tailwindExport: zod.z.string().describe(
    "The export in your package.json that matches your tailwindConfig.ts file."
  ),
  DANGER_disableBaselineTailwind: zod.z.boolean().default(false).describe(
    "In most cases this should only be applied for apps in personal use. Adding multiple plugins that relies on the baseline configuration and disabling that configuration can have unforseen consequences for a wide range of users."
  ),
  DANGER_disableDefaultMDXStyles: zod.z.boolean().default(false).describe(
    "This will disable the import of css files that pertain specifically to rendered mdx content."
  )
});

exports.styleExtensionSchema = styleExtensionSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=styleSchema.cjs.map