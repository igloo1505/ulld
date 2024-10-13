"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2X62PCXRcjs = require('./chunk-2X62PCXR.cjs');

// src/database/outputTypeSchemas/TagCreateManyArgsSchema.ts
var _zod = require('zod');
var TagCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk2X62PCXRcjs.TagCreateManyInputSchema, _chunk2X62PCXRcjs.TagCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var TagCreateManyArgsSchema_default = TagCreateManyArgsSchema;




exports.TagCreateManyArgsSchema = TagCreateManyArgsSchema; exports.TagCreateManyArgsSchema_default = TagCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-ZUN35D52.cjs.map