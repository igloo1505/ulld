"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFE23CYUYcjs = require('./chunk-FE23CYUY.cjs');


var _chunkHWKC7KYUcjs = require('./chunk-HWKC7KYU.cjs');


var _chunk4JWIYQZ6cjs = require('./chunk-4JWIYQZ6.cjs');


var _chunkDD6GKPAFcjs = require('./chunk-DD6GKPAF.cjs');


var _chunkBCDQVT7Ocjs = require('./chunk-BCDQVT7O.cjs');


var _chunkVYYZSYF5cjs = require('./chunk-VYYZSYF5.cjs');


var _chunkOYCJHDTMcjs = require('./chunk-OYCJHDTM.cjs');

// src/database/inputTypeSchemas/DietaryItemScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var DietaryItemScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => DietaryItemScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => DietaryItemScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => DietaryItemScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => DietaryItemScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => DietaryItemScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  name: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  barcode: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  gi: _zod.z.union([_zod.z.lazy(() => _chunkBCDQVT7Ocjs.IntNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  calsPerOz: _zod.z.union([_zod.z.lazy(() => _chunkHWKC7KYUcjs.FloatNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  glutenFree: _zod.z.union([_zod.z.lazy(() => _chunk4JWIYQZ6cjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  minimalFructose: _zod.z.union([_zod.z.lazy(() => _chunk4JWIYQZ6cjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  natural: _zod.z.union([_zod.z.lazy(() => _chunk4JWIYQZ6cjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  organic: _zod.z.union([_zod.z.lazy(() => _chunk4JWIYQZ6cjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  impactScore: _zod.z.union([_zod.z.lazy(() => _chunkFE23CYUYcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional()
}).strict();
var DietaryItemScalarWhereWithAggregatesInputSchema_default = DietaryItemScalarWhereWithAggregatesInputSchema;




exports.DietaryItemScalarWhereWithAggregatesInputSchema = DietaryItemScalarWhereWithAggregatesInputSchema; exports.DietaryItemScalarWhereWithAggregatesInputSchema_default = DietaryItemScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-Z4ZK3YLI.cjs.map