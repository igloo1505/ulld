"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/developer/styleSchema.ts
var _zod = require('zod');
var styleExtensionSchema = _zod.z.object({
  tailwindExport: _zod.z.string().describe(
    "The export in your package.json that matches your tailwindConfig.ts file."
  ),
  DANGER_disableBaselineTailwind: _zod.z.boolean().default(false).describe(
    "In most cases this should only be applied for apps in personal use. Adding multiple plugins that relies on the baseline configuration and disabling that configuration can have unforseen consequences for a wide range of users."
  ),
  DANGER_disableDefaultMDXStyles: _zod.z.boolean().default(false).describe(
    "This will disable the import of css files that pertain specifically to rendered mdx content."
  )
});


exports.styleExtensionSchema = styleExtensionSchema;
//# sourceMappingURL=styleSchema.cjs.map