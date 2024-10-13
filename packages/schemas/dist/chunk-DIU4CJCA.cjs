"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMGF5REFBcjs = require('./chunk-MGF5REFB.cjs');


var _chunkTD2WYWGAcjs = require('./chunk-TD2WYWGA.cjs');


var _chunkOO7BVO2Hcjs = require('./chunk-OO7BVO2H.cjs');

// src/database/inputTypeSchemas/RelatedValuesCreateWithoutEquationsInputSchema.ts
var _zod = require('zod');
var RelatedValuesCreateWithoutEquationsInputSchema = _zod.z.object({
  input: _zod.z.union([_zod.z.lazy(() => _chunkTD2WYWGAcjs.JsonNullValueInputSchema), _chunkOO7BVO2Hcjs.InputJsonValueSchema]).optional(),
  output: _zod.z.number(),
  equationId: _zod.z.union([_zod.z.lazy(() => _chunkMGF5REFBcjs.RelatedValuesCreateequationIdInputSchema), _zod.z.number().int().array()]).optional()
}).strict();
var RelatedValuesCreateWithoutEquationsInputSchema_default = RelatedValuesCreateWithoutEquationsInputSchema;




exports.RelatedValuesCreateWithoutEquationsInputSchema = RelatedValuesCreateWithoutEquationsInputSchema; exports.RelatedValuesCreateWithoutEquationsInputSchema_default = RelatedValuesCreateWithoutEquationsInputSchema_default;
//# sourceMappingURL=chunk-DIU4CJCA.cjs.map