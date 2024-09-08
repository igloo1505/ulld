import { z } from 'zod';
import { transformExportStringArray } from '@ulld/utilities/transformExportString';

// src/developer/additionalImportsConfigSchema.ts
var additionalImportsConfigSchema = z.object({
  root: z.string().array().default([]).describe(
    "Additional imports to add to the RootLayout. These will not be added to the dom, but may be used to import files that don't need to be executed like css or scss files. Must match export in package.json"
  ).transform(transformExportStringArray),
  mdx: z.string().array().default([]).describe(
    "Similar to additionalImports.root, but only applied to pages with rendered mdx content."
  ).transform(transformExportStringArray)
});

export { additionalImportsConfigSchema };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-4UU4HTMV.js.map