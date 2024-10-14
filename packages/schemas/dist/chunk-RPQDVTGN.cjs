"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkE6ZPEEM6cjs = require('./chunk-E6ZPEEM6.cjs');


var _chunkT67QX5PGcjs = require('./chunk-T67QX5PG.cjs');


var _chunkZI4N5EPRcjs = require('./chunk-ZI4N5EPR.cjs');


var _chunkCPSW4INCcjs = require('./chunk-CPSW4INC.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');

// src/database/inputTypeSchemas/RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema.ts
var _zod = require('zod');
var RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  input: _zod.z.union([_zod.z.lazy(() => _chunkZI4N5EPRcjs.JsonNullValueInputSchema), _chunkCPSW4INCcjs.InputJsonValueSchema]).optional(),
  output: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT67QX5PGcjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  equationId: _zod.z.union([_zod.z.lazy(() => _chunkE6ZPEEM6cjs.RelatedValuesUpdateequationIdInputSchema), _zod.z.number().int().array()]).optional()
}).strict();
var RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema_default = RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema;




exports.RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema = RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema; exports.RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema_default = RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema_default;
//# sourceMappingURL=chunk-RPQDVTGN.cjs.map