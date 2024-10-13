"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKWUU5WKFcjs = require('./chunk-KWUU5WKF.cjs');


var _chunk5OM742D4cjs = require('./chunk-5OM742D4.cjs');


var _chunkTD2WYWGAcjs = require('./chunk-TD2WYWGA.cjs');


var _chunkOO7BVO2Hcjs = require('./chunk-OO7BVO2H.cjs');


var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');

// src/database/inputTypeSchemas/RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema.ts
var _zod = require('zod');
var RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  input: _zod.z.union([_zod.z.lazy(() => _chunkTD2WYWGAcjs.JsonNullValueInputSchema), _chunkOO7BVO2Hcjs.InputJsonValueSchema]).optional(),
  output: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunk5OM742D4cjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  equationId: _zod.z.union([_zod.z.lazy(() => _chunkKWUU5WKFcjs.RelatedValuesUpdateequationIdInputSchema), _zod.z.number().int().array()]).optional()
}).strict();
var RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema_default = RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema;




exports.RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema = RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema; exports.RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema_default = RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema_default;
//# sourceMappingURL=chunk-KAJUJ36E.cjs.map