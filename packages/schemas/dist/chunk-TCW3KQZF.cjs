"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZZPBWFLVcjs = require('./chunk-ZZPBWFLV.cjs');

// src/database/outputTypeSchemas/RelatedValuesCreateManyArgsSchema.ts
var _zod = require('zod');
var RelatedValuesCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkZZPBWFLVcjs.RelatedValuesCreateManyInputSchema, _chunkZZPBWFLVcjs.RelatedValuesCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var RelatedValuesCreateManyArgsSchema_default = RelatedValuesCreateManyArgsSchema;




exports.RelatedValuesCreateManyArgsSchema = RelatedValuesCreateManyArgsSchema; exports.RelatedValuesCreateManyArgsSchema_default = RelatedValuesCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-TCW3KQZF.cjs.map