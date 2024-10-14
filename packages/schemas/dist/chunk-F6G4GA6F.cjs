"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkE7BN4QPAcjs = require('./chunk-E7BN4QPA.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/ToDoListScalarWhereInputSchema.ts
var _zod = require('zod');
var ToDoListScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => ToDoListScalarWhereInputSchema), _zod.z.lazy(() => ToDoListScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => ToDoListScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => ToDoListScalarWhereInputSchema), _zod.z.lazy(() => ToDoListScalarWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastUpdate: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var ToDoListScalarWhereInputSchema_default = ToDoListScalarWhereInputSchema;




exports.ToDoListScalarWhereInputSchema = ToDoListScalarWhereInputSchema; exports.ToDoListScalarWhereInputSchema_default = ToDoListScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-F6G4GA6F.cjs.map