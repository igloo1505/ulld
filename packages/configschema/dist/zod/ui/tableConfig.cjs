'use strict';

var zod = require('zod');

// src/zod/ui/tableConfig.ts
var tableUIConfigSchema = zod.z.object({
  maxHeight: zod.z.union([zod.z.string(), zod.z.number()]).default(300).describe("The default height at which to limit tables. This can be overridden for each not individually in that note's front matter. If the value is a string, it must be able to be interpretted by css-in-tsx syntax. Numbers will automatically be interpreted as pixels.").transform((a) => typeof a === "number" ? `${a}px` : a)
}).default({});

exports.tableUIConfigSchema = tableUIConfigSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=tableConfig.cjs.map