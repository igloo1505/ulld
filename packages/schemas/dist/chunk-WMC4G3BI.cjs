"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDD6GKPAFcjs = require('./chunk-DD6GKPAF.cjs');


var _chunkOYCJHDTMcjs = require('./chunk-OYCJHDTM.cjs');

// src/database/inputTypeSchemas/CitationsGroupScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var CitationsGroupScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => CitationsGroupScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => CitationsGroupScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => CitationsGroupScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => CitationsGroupScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => CitationsGroupScalarWhereWithAggregatesInputSchema).array()]).optional(),
  name: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable()
}).strict();
var CitationsGroupScalarWhereWithAggregatesInputSchema_default = CitationsGroupScalarWhereWithAggregatesInputSchema;




exports.CitationsGroupScalarWhereWithAggregatesInputSchema = CitationsGroupScalarWhereWithAggregatesInputSchema; exports.CitationsGroupScalarWhereWithAggregatesInputSchema_default = CitationsGroupScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-WMC4G3BI.cjs.map