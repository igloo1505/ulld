"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/zod/ui/tableConfig.ts
var _zod = require('zod');
var tableUIConfigSchema = _zod.z.object({
  maxHeight: _zod.z.union([_zod.z.string(), _zod.z.number()]).default(300).describe("The default height at which to limit tables. This can be overridden for each not individually in that note's front matter. If the value is a string, it must be able to be interpretted by css-in-tsx syntax. Numbers will automatically be interpreted as pixels.").transform((a) => typeof a === "number" ? `${a}px` : a)
}).default({});
var tableUIConfigSchemaOutput = _zod.z.object({
  maxHeight: _zod.z.string()
});




exports.tableUIConfigSchema = tableUIConfigSchema; exports.tableUIConfigSchemaOutput = tableUIConfigSchemaOutput;
//# sourceMappingURL=chunk-DPP2DGFK.cjs.map