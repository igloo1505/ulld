"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFE23CYUYcjs = require('./chunk-FE23CYUY.cjs');


var _chunkXFYVMGLCcjs = require('./chunk-XFYVMGLC.cjs');


var _chunk7EO2LNCHcjs = require('./chunk-7EO2LNCH.cjs');


var _chunkVYYZSYF5cjs = require('./chunk-VYYZSYF5.cjs');

// src/database/inputTypeSchemas/RelatedValuesScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var RelatedValuesScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => RelatedValuesScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => RelatedValuesScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => RelatedValuesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => RelatedValuesScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => RelatedValuesScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  input: _zod.z.lazy(() => _chunkXFYVMGLCcjs.JsonWithAggregatesFilterSchema).optional(),
  output: _zod.z.union([_zod.z.lazy(() => _chunkFE23CYUYcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  equationId: _zod.z.lazy(() => _chunk7EO2LNCHcjs.IntNullableListFilterSchema).optional()
}).strict();
var RelatedValuesScalarWhereWithAggregatesInputSchema_default = RelatedValuesScalarWhereWithAggregatesInputSchema;




exports.RelatedValuesScalarWhereWithAggregatesInputSchema = RelatedValuesScalarWhereWithAggregatesInputSchema; exports.RelatedValuesScalarWhereWithAggregatesInputSchema_default = RelatedValuesScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-BYMIIP6N.cjs.map