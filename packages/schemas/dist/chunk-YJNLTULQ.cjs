"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWOP6I6SMcjs = require('./chunk-WOP6I6SM.cjs');

// src/mdx/frontMatter/tableStyles.ts
var _zod = require('zod');
var zodFrontMatterTableStylesObject = _zod.z.object({
  fullWidth: _zod.z.boolean().nullish().default(false),
  text: _chunkWOP6I6SMcjs.frontMatterTextStyleSchema.nullish(),
  math: _chunkWOP6I6SMcjs.frontMatterTextStyleSchema.nullish(),
  tableCenter: _zod.z.coerce.boolean().nullish().default(false),
  textCenter: _zod.z.coerce.boolean().nullish().default(false),
  headingCenter: _zod.z.coerce.boolean().nullish().default(false),
  float: _zod.z.enum(["right", "left"]).nullish(),
  noMax: _zod.z.coerce.boolean().nullish().default(false),
  expand: _zod.z.coerce.boolean().nullish().default(false)
});



exports.zodFrontMatterTableStylesObject = zodFrontMatterTableStylesObject;
//# sourceMappingURL=chunk-YJNLTULQ.cjs.map