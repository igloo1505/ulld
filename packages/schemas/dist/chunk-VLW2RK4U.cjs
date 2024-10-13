"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVYYZSYF5cjs = require('./chunk-VYYZSYF5.cjs');


var _chunkJKV2YZP7cjs = require('./chunk-JKV2YZP7.cjs');


var _chunkOYCJHDTMcjs = require('./chunk-OYCJHDTM.cjs');

// src/database/inputTypeSchemas/ToDoListScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var ToDoListScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => ToDoListScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => ToDoListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => ToDoListScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => ToDoListScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => ToDoListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  lastUpdate: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var ToDoListScalarWhereWithAggregatesInputSchema_default = ToDoListScalarWhereWithAggregatesInputSchema;




exports.ToDoListScalarWhereWithAggregatesInputSchema = ToDoListScalarWhereWithAggregatesInputSchema; exports.ToDoListScalarWhereWithAggregatesInputSchema_default = ToDoListScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-VLW2RK4U.cjs.map