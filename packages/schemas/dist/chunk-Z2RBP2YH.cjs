"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZZPBWFLVcjs = require('./chunk-ZZPBWFLV.cjs');

// src/database/outputTypeSchemas/RelatedValuesCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var RelatedValuesCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkZZPBWFLVcjs.RelatedValuesCreateManyInputSchema, _chunkZZPBWFLVcjs.RelatedValuesCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var RelatedValuesCreateManyAndReturnArgsSchema_default = RelatedValuesCreateManyAndReturnArgsSchema;




exports.RelatedValuesCreateManyAndReturnArgsSchema = RelatedValuesCreateManyAndReturnArgsSchema; exports.RelatedValuesCreateManyAndReturnArgsSchema_default = RelatedValuesCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-Z2RBP2YH.cjs.map