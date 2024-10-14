"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRPNAAALBcjs = require('./chunk-RPNAAALB.cjs');


var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/DefinitionScalarWhereInputSchema.ts
var _zod = require('zod');
var DefinitionScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => DefinitionScalarWhereInputSchema), _zod.z.lazy(() => DefinitionScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => DefinitionScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => DefinitionScalarWhereInputSchema), _zod.z.lazy(() => DefinitionScalarWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  content: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  alphabeticalLabel: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  mdxNoteId: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var DefinitionScalarWhereInputSchema_default = DefinitionScalarWhereInputSchema;




exports.DefinitionScalarWhereInputSchema = DefinitionScalarWhereInputSchema; exports.DefinitionScalarWhereInputSchema_default = DefinitionScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-G5DWHP4Q.cjs.map