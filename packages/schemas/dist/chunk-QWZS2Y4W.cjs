"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDMG3BD7Ecjs = require('./chunk-DMG3BD7E.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/ToDoListScalarWhereInputSchema.ts
var _zod = require('zod');
var ToDoListScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => ToDoListScalarWhereInputSchema), _zod.z.lazy(() => ToDoListScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => ToDoListScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => ToDoListScalarWhereInputSchema), _zod.z.lazy(() => ToDoListScalarWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number()]).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastUpdate: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var ToDoListScalarWhereInputSchema_default = ToDoListScalarWhereInputSchema;




exports.ToDoListScalarWhereInputSchema = ToDoListScalarWhereInputSchema; exports.ToDoListScalarWhereInputSchema_default = ToDoListScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-QWZS2Y4W.cjs.map