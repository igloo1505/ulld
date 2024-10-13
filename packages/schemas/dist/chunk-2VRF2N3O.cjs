"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkF2KOFIOBcjs = require('./chunk-F2KOFIOB.cjs');


var _chunkJLEMYJRAcjs = require('./chunk-JLEMYJRA.cjs');


var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunkDMG3BD7Ecjs = require('./chunk-DMG3BD7E.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/EquationScalarWhereInputSchema.ts
var _zod = require('zod');
var EquationScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => EquationScalarWhereInputSchema), _zod.z.lazy(() => EquationScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => EquationScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => EquationScalarWhereInputSchema), _zod.z.lazy(() => EquationScalarWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number()]).optional(),
  equationId: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  title: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  desc: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  content: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  asPython: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  variableLegend: _zod.z.lazy(() => _chunkF2KOFIOBcjs.JsonFilterSchema).optional(),
  variables: _zod.z.lazy(() => _chunkJLEMYJRAcjs.StringNullableListFilterSchema).optional(),
  keywords: _zod.z.lazy(() => _chunkJLEMYJRAcjs.StringNullableListFilterSchema).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var EquationScalarWhereInputSchema_default = EquationScalarWhereInputSchema;




exports.EquationScalarWhereInputSchema = EquationScalarWhereInputSchema; exports.EquationScalarWhereInputSchema_default = EquationScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-2VRF2N3O.cjs.map