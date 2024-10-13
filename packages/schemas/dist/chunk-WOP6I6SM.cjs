"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/mdx/frontMatter/utility.ts
var _zod = require('zod');
var frontMatterTextStyleSchema = _zod.z.union([
  _zod.z.literal("base"),
  _zod.z.literal("lg"),
  _zod.z.literal("xl"),
  _zod.z.literal("small")
]);



exports.frontMatterTextStyleSchema = frontMatterTextStyleSchema;
//# sourceMappingURL=chunk-WOP6I6SM.cjs.map