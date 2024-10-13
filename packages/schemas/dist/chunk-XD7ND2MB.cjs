"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXXM5436Hcjs = require('./chunk-XXM5436H.cjs');


var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');

// src/database/outputTypeSchemas/TagArgsSchema.ts
var _zod = require('zod');
var TagArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkXXM5436Hcjs.TagSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunk2TN6PYK3cjs.TagIncludeSchema).optional()
}).strict();
var TagArgsSchema_default = TagArgsSchema;




exports.TagArgsSchema = TagArgsSchema; exports.TagArgsSchema_default = TagArgsSchema_default;
//# sourceMappingURL=chunk-XD7ND2MB.cjs.map