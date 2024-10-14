"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUWWD2DIOcjs = require('./chunk-UWWD2DIO.cjs');


var _chunkL7ZRMRIIcjs = require('./chunk-L7ZRMRII.cjs');


var _chunk73VPHG2Fcjs = require('./chunk-73VPHG2F.cjs');


var _chunkE7BN4QPAcjs = require('./chunk-E7BN4QPA.cjs');

// src/database/inputTypeSchemas/RelatedValuesScalarWhereInputSchema.ts
var _zod = require('zod');
var RelatedValuesScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => RelatedValuesScalarWhereInputSchema), _zod.z.lazy(() => RelatedValuesScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => RelatedValuesScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => RelatedValuesScalarWhereInputSchema), _zod.z.lazy(() => RelatedValuesScalarWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  input: _zod.z.lazy(() => _chunkL7ZRMRIIcjs.JsonFilterSchema).optional(),
  output: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  equationId: _zod.z.lazy(() => _chunkUWWD2DIOcjs.IntNullableListFilterSchema).optional()
}).strict();
var RelatedValuesScalarWhereInputSchema_default = RelatedValuesScalarWhereInputSchema;




exports.RelatedValuesScalarWhereInputSchema = RelatedValuesScalarWhereInputSchema; exports.RelatedValuesScalarWhereInputSchema_default = RelatedValuesScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-FPOEIB3L.cjs.map