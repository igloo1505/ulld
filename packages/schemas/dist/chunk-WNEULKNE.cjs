"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkL7ZRMRIIcjs = require('./chunk-L7ZRMRII.cjs');


var _chunk5AWIXPHDcjs = require('./chunk-5AWIXPHD.cjs');


var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunkE7BN4QPAcjs = require('./chunk-E7BN4QPA.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/EquationScalarWhereInputSchema.ts
var _zod = require('zod');
var EquationScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => EquationScalarWhereInputSchema), _zod.z.lazy(() => EquationScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => EquationScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => EquationScalarWhereInputSchema), _zod.z.lazy(() => EquationScalarWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  equationId: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  title: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  desc: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  content: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  asPython: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  variableLegend: _zod.z.lazy(() => _chunkL7ZRMRIIcjs.JsonFilterSchema).optional(),
  variables: _zod.z.lazy(() => _chunk5AWIXPHDcjs.StringNullableListFilterSchema).optional(),
  keywords: _zod.z.lazy(() => _chunk5AWIXPHDcjs.StringNullableListFilterSchema).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var EquationScalarWhereInputSchema_default = EquationScalarWhereInputSchema;




exports.EquationScalarWhereInputSchema = EquationScalarWhereInputSchema; exports.EquationScalarWhereInputSchema_default = EquationScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-WNEULKNE.cjs.map