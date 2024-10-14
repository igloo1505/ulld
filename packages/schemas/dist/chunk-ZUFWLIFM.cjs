"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFZ6FVAFEcjs = require('./chunk-FZ6FVAFE.cjs');

// src/database/outputTypeSchemas/TagCreateManyArgsSchema.ts
var _zod = require('zod');
var TagCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkFZ6FVAFEcjs.TagCreateManyInputSchema, _chunkFZ6FVAFEcjs.TagCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var TagCreateManyArgsSchema_default = TagCreateManyArgsSchema;




exports.TagCreateManyArgsSchema = TagCreateManyArgsSchema; exports.TagCreateManyArgsSchema_default = TagCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-ZUFWLIFM.cjs.map