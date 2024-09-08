'use strict';

var zod = require('zod');

// src/schemas/mdx/parseMdxStringProps.ts
var parseMdxProps = zod.z.object({
  content: zod.z.string(),
  display: zod.z.union([zod.z.literal("display"), zod.z.literal("inline")]).default("display")
});

exports.parseMdxProps = parseMdxProps;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=parseMdxStringProps.cjs.map