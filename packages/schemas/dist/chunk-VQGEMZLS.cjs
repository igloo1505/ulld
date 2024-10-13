"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKWUU5WKFcjs = require('./chunk-KWUU5WKF.cjs');


var _chunk5OM742D4cjs = require('./chunk-5OM742D4.cjs');


var _chunkTD2WYWGAcjs = require('./chunk-TD2WYWGA.cjs');


var _chunkOO7BVO2Hcjs = require('./chunk-OO7BVO2H.cjs');

// src/database/inputTypeSchemas/RelatedValuesUpdateManyMutationInputSchema.ts
var _zod = require('zod');
var RelatedValuesUpdateManyMutationInputSchema = _zod.z.object({
  input: _zod.z.union([_zod.z.lazy(() => _chunkTD2WYWGAcjs.JsonNullValueInputSchema), _chunkOO7BVO2Hcjs.InputJsonValueSchema]).optional(),
  output: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunk5OM742D4cjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  equationId: _zod.z.union([_zod.z.lazy(() => _chunkKWUU5WKFcjs.RelatedValuesUpdateequationIdInputSchema), _zod.z.number().int().array()]).optional()
}).strict();
var RelatedValuesUpdateManyMutationInputSchema_default = RelatedValuesUpdateManyMutationInputSchema;




exports.RelatedValuesUpdateManyMutationInputSchema = RelatedValuesUpdateManyMutationInputSchema; exports.RelatedValuesUpdateManyMutationInputSchema_default = RelatedValuesUpdateManyMutationInputSchema_default;
//# sourceMappingURL=chunk-VQGEMZLS.cjs.map