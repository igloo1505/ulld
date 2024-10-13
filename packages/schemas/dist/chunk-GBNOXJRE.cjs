"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6FLEAVANcjs = require('./chunk-6FLEAVAN.cjs');


var _chunkKWUU5WKFcjs = require('./chunk-KWUU5WKF.cjs');


var _chunk5OM742D4cjs = require('./chunk-5OM742D4.cjs');


var _chunkTD2WYWGAcjs = require('./chunk-TD2WYWGA.cjs');


var _chunkOO7BVO2Hcjs = require('./chunk-OO7BVO2H.cjs');

// src/database/inputTypeSchemas/RelatedValuesUpdateInputSchema.ts
var _zod = require('zod');
var RelatedValuesUpdateInputSchema = _zod.z.object({
  input: _zod.z.union([_zod.z.lazy(() => _chunkTD2WYWGAcjs.JsonNullValueInputSchema), _chunkOO7BVO2Hcjs.InputJsonValueSchema]).optional(),
  output: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunk5OM742D4cjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  equationId: _zod.z.union([_zod.z.lazy(() => _chunkKWUU5WKFcjs.RelatedValuesUpdateequationIdInputSchema), _zod.z.number().int().array()]).optional(),
  equations: _zod.z.lazy(() => _chunk6FLEAVANcjs.EquationUpdateManyWithoutRelatedValuesNestedInputSchema).optional()
}).strict();
var RelatedValuesUpdateInputSchema_default = RelatedValuesUpdateInputSchema;




exports.RelatedValuesUpdateInputSchema = RelatedValuesUpdateInputSchema; exports.RelatedValuesUpdateInputSchema_default = RelatedValuesUpdateInputSchema_default;
//# sourceMappingURL=chunk-GBNOXJRE.cjs.map