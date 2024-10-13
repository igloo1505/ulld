"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMGF5REFBcjs = require('./chunk-MGF5REFB.cjs');


var _chunkTD2WYWGAcjs = require('./chunk-TD2WYWGA.cjs');


var _chunkOO7BVO2Hcjs = require('./chunk-OO7BVO2H.cjs');

// src/database/inputTypeSchemas/RelatedValuesCreateManyInputSchema.ts
var _zod = require('zod');
var RelatedValuesCreateManyInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  input: _zod.z.union([_zod.z.lazy(() => _chunkTD2WYWGAcjs.JsonNullValueInputSchema), _chunkOO7BVO2Hcjs.InputJsonValueSchema]).optional(),
  output: _zod.z.number(),
  equationId: _zod.z.union([_zod.z.lazy(() => _chunkMGF5REFBcjs.RelatedValuesCreateequationIdInputSchema), _zod.z.number().int().array()]).optional()
}).strict();
var RelatedValuesCreateManyInputSchema_default = RelatedValuesCreateManyInputSchema;




exports.RelatedValuesCreateManyInputSchema = RelatedValuesCreateManyInputSchema; exports.RelatedValuesCreateManyInputSchema_default = RelatedValuesCreateManyInputSchema_default;
//# sourceMappingURL=chunk-ZZPBWFLV.cjs.map