"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkE6ZPEEM6cjs = require('./chunk-E6ZPEEM6.cjs');


var _chunkT67QX5PGcjs = require('./chunk-T67QX5PG.cjs');


var _chunkZI4N5EPRcjs = require('./chunk-ZI4N5EPR.cjs');


var _chunkCPSW4INCcjs = require('./chunk-CPSW4INC.cjs');

// src/database/inputTypeSchemas/RelatedValuesUpdateManyMutationInputSchema.ts
var _zod = require('zod');
var RelatedValuesUpdateManyMutationInputSchema = _zod.z.object({
  input: _zod.z.union([_zod.z.lazy(() => _chunkZI4N5EPRcjs.JsonNullValueInputSchema), _chunkCPSW4INCcjs.InputJsonValueSchema]).optional(),
  output: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT67QX5PGcjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  equationId: _zod.z.union([_zod.z.lazy(() => _chunkE6ZPEEM6cjs.RelatedValuesUpdateequationIdInputSchema), _zod.z.number().int().array()]).optional()
}).strict();
var RelatedValuesUpdateManyMutationInputSchema_default = RelatedValuesUpdateManyMutationInputSchema;




exports.RelatedValuesUpdateManyMutationInputSchema = RelatedValuesUpdateManyMutationInputSchema; exports.RelatedValuesUpdateManyMutationInputSchema_default = RelatedValuesUpdateManyMutationInputSchema_default;
//# sourceMappingURL=chunk-3D7SM4DL.cjs.map