"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLIF32HXNcjs = require('./chunk-LIF32HXN.cjs');


var _chunkMGF5REFBcjs = require('./chunk-MGF5REFB.cjs');


var _chunkTD2WYWGAcjs = require('./chunk-TD2WYWGA.cjs');


var _chunkOO7BVO2Hcjs = require('./chunk-OO7BVO2H.cjs');

// src/database/inputTypeSchemas/RelatedValuesCreateInputSchema.ts
var _zod = require('zod');
var RelatedValuesCreateInputSchema = _zod.z.object({
  input: _zod.z.union([_zod.z.lazy(() => _chunkTD2WYWGAcjs.JsonNullValueInputSchema), _chunkOO7BVO2Hcjs.InputJsonValueSchema]).optional(),
  output: _zod.z.number(),
  equationId: _zod.z.union([_zod.z.lazy(() => _chunkMGF5REFBcjs.RelatedValuesCreateequationIdInputSchema), _zod.z.number().int().array()]).optional(),
  equations: _zod.z.lazy(() => _chunkLIF32HXNcjs.EquationCreateNestedManyWithoutRelatedValuesInputSchema).optional()
}).strict();
var RelatedValuesCreateInputSchema_default = RelatedValuesCreateInputSchema;




exports.RelatedValuesCreateInputSchema = RelatedValuesCreateInputSchema; exports.RelatedValuesCreateInputSchema_default = RelatedValuesCreateInputSchema_default;
//# sourceMappingURL=chunk-YSUS63CY.cjs.map