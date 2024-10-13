"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDD6GKPAFcjs = require('./chunk-DD6GKPAF.cjs');


var _chunkVYYZSYF5cjs = require('./chunk-VYYZSYF5.cjs');


var _chunkOYCJHDTMcjs = require('./chunk-OYCJHDTM.cjs');

// src/database/inputTypeSchemas/BusinessContactScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var BusinessContactScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => BusinessContactScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => BusinessContactScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => BusinessContactScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => BusinessContactScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => BusinessContactScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  companyName: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  contactName: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  contactPreference: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  email: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  phone: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  message: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  purpose: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable()
}).strict();
var BusinessContactScalarWhereWithAggregatesInputSchema_default = BusinessContactScalarWhereWithAggregatesInputSchema;




exports.BusinessContactScalarWhereWithAggregatesInputSchema = BusinessContactScalarWhereWithAggregatesInputSchema; exports.BusinessContactScalarWhereWithAggregatesInputSchema_default = BusinessContactScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-SWD2AQPS.cjs.map