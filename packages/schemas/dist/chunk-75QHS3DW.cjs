"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6K3KJUC2cjs = require('./chunk-6K3KJUC2.cjs');


var _chunkZI4N5EPRcjs = require('./chunk-ZI4N5EPR.cjs');


var _chunkCPSW4INCcjs = require('./chunk-CPSW4INC.cjs');

// src/database/inputTypeSchemas/RelatedValuesCreateWithoutEquationsInputSchema.ts
var _zod = require('zod');
var RelatedValuesCreateWithoutEquationsInputSchema = _zod.z.object({
  input: _zod.z.union([_zod.z.lazy(() => _chunkZI4N5EPRcjs.JsonNullValueInputSchema), _chunkCPSW4INCcjs.InputJsonValueSchema]).optional(),
  output: _zod.z.number(),
  equationId: _zod.z.union([_zod.z.lazy(() => _chunk6K3KJUC2cjs.RelatedValuesCreateequationIdInputSchema), _zod.z.number().int().array()]).optional()
}).strict();
var RelatedValuesCreateWithoutEquationsInputSchema_default = RelatedValuesCreateWithoutEquationsInputSchema;




exports.RelatedValuesCreateWithoutEquationsInputSchema = RelatedValuesCreateWithoutEquationsInputSchema; exports.RelatedValuesCreateWithoutEquationsInputSchema_default = RelatedValuesCreateWithoutEquationsInputSchema_default;
//# sourceMappingURL=chunk-75QHS3DW.cjs.map