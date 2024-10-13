"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXFYVMGLCcjs = require('./chunk-XFYVMGLC.cjs');


var _chunkDD6GKPAFcjs = require('./chunk-DD6GKPAF.cjs');


var _chunkJLEMYJRAcjs = require('./chunk-JLEMYJRA.cjs');


var _chunkVYYZSYF5cjs = require('./chunk-VYYZSYF5.cjs');


var _chunkJKV2YZP7cjs = require('./chunk-JKV2YZP7.cjs');


var _chunkOYCJHDTMcjs = require('./chunk-OYCJHDTM.cjs');

// src/database/inputTypeSchemas/EquationScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var EquationScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => EquationScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => EquationScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => EquationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => EquationScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => EquationScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  equationId: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  title: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  desc: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  content: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  asPython: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  variableLegend: _zod.z.lazy(() => _chunkXFYVMGLCcjs.JsonWithAggregatesFilterSchema).optional(),
  variables: _zod.z.lazy(() => _chunkJLEMYJRAcjs.StringNullableListFilterSchema).optional(),
  keywords: _zod.z.lazy(() => _chunkJLEMYJRAcjs.StringNullableListFilterSchema).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var EquationScalarWhereWithAggregatesInputSchema_default = EquationScalarWhereWithAggregatesInputSchema;




exports.EquationScalarWhereWithAggregatesInputSchema = EquationScalarWhereWithAggregatesInputSchema; exports.EquationScalarWhereWithAggregatesInputSchema_default = EquationScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-5NF6R453.cjs.map