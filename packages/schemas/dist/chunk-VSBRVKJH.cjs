"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJLEMYJRAcjs = require('./chunk-JLEMYJRA.cjs');


var _chunkVYYZSYF5cjs = require('./chunk-VYYZSYF5.cjs');


var _chunkJKV2YZP7cjs = require('./chunk-JKV2YZP7.cjs');


var _chunkOYCJHDTMcjs = require('./chunk-OYCJHDTM.cjs');

// src/database/inputTypeSchemas/FeatureRequestScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var FeatureRequestScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => FeatureRequestScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => FeatureRequestScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => FeatureRequestScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => FeatureRequestScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => FeatureRequestScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  email: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  message: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  category: _zod.z.lazy(() => _chunkJLEMYJRAcjs.StringNullableListFilterSchema).optional(),
  userBase: _zod.z.lazy(() => _chunkJLEMYJRAcjs.StringNullableListFilterSchema).optional(),
  receivedOn: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var FeatureRequestScalarWhereWithAggregatesInputSchema_default = FeatureRequestScalarWhereWithAggregatesInputSchema;




exports.FeatureRequestScalarWhereWithAggregatesInputSchema = FeatureRequestScalarWhereWithAggregatesInputSchema; exports.FeatureRequestScalarWhereWithAggregatesInputSchema_default = FeatureRequestScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-VSBRVKJH.cjs.map