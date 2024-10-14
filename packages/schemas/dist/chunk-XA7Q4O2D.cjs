"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDZMYDVTOcjs = require('./chunk-DZMYDVTO.cjs');


var _chunkVYMA4VCAcjs = require('./chunk-VYMA4VCA.cjs');


var _chunkUWWD2DIOcjs = require('./chunk-UWWD2DIO.cjs');


var _chunkYSVCS7P6cjs = require('./chunk-YSVCS7P6.cjs');

// src/database/inputTypeSchemas/RelatedValuesScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var RelatedValuesScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => RelatedValuesScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => RelatedValuesScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => RelatedValuesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => RelatedValuesScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => RelatedValuesScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  input: _zod.z.lazy(() => _chunkVYMA4VCAcjs.JsonWithAggregatesFilterSchema).optional(),
  output: _zod.z.union([_zod.z.lazy(() => _chunkDZMYDVTOcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  equationId: _zod.z.lazy(() => _chunkUWWD2DIOcjs.IntNullableListFilterSchema).optional()
}).strict();
var RelatedValuesScalarWhereWithAggregatesInputSchema_default = RelatedValuesScalarWhereWithAggregatesInputSchema;




exports.RelatedValuesScalarWhereWithAggregatesInputSchema = RelatedValuesScalarWhereWithAggregatesInputSchema; exports.RelatedValuesScalarWhereWithAggregatesInputSchema_default = RelatedValuesScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-XA7Q4O2D.cjs.map