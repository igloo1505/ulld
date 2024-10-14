"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSKU73CEAcjs = require('./chunk-SKU73CEA.cjs');


var _chunkE6ZPEEM6cjs = require('./chunk-E6ZPEEM6.cjs');


var _chunkT67QX5PGcjs = require('./chunk-T67QX5PG.cjs');


var _chunkZI4N5EPRcjs = require('./chunk-ZI4N5EPR.cjs');


var _chunkCPSW4INCcjs = require('./chunk-CPSW4INC.cjs');

// src/database/inputTypeSchemas/RelatedValuesUpdateInputSchema.ts
var _zod = require('zod');
var RelatedValuesUpdateInputSchema = _zod.z.object({
  input: _zod.z.union([_zod.z.lazy(() => _chunkZI4N5EPRcjs.JsonNullValueInputSchema), _chunkCPSW4INCcjs.InputJsonValueSchema]).optional(),
  output: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT67QX5PGcjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  equationId: _zod.z.union([_zod.z.lazy(() => _chunkE6ZPEEM6cjs.RelatedValuesUpdateequationIdInputSchema), _zod.z.number().int().array()]).optional(),
  equations: _zod.z.lazy(() => _chunkSKU73CEAcjs.EquationUpdateManyWithoutRelatedValuesNestedInputSchema).optional()
}).strict();
var RelatedValuesUpdateInputSchema_default = RelatedValuesUpdateInputSchema;




exports.RelatedValuesUpdateInputSchema = RelatedValuesUpdateInputSchema; exports.RelatedValuesUpdateInputSchema_default = RelatedValuesUpdateInputSchema_default;
//# sourceMappingURL=chunk-3GWQ67UW.cjs.map