"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZSB3SXCPcjs = require('./chunk-ZSB3SXCP.cjs');


var _chunk4JWIYQZ6cjs = require('./chunk-4JWIYQZ6.cjs');


var _chunkJOPQFMDHcjs = require('./chunk-JOPQFMDH.cjs');


var _chunkDD6GKPAFcjs = require('./chunk-DD6GKPAF.cjs');


var _chunkBCDQVT7Ocjs = require('./chunk-BCDQVT7O.cjs');


var _chunkBRDOGD33cjs = require('./chunk-BRDOGD33.cjs');


var _chunkVYYZSYF5cjs = require('./chunk-VYYZSYF5.cjs');


var _chunkJKV2YZP7cjs = require('./chunk-JKV2YZP7.cjs');


var _chunkOYCJHDTMcjs = require('./chunk-OYCJHDTM.cjs');

// src/database/inputTypeSchemas/ToDoScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var ToDoScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => ToDoScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => ToDoScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => ToDoScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => ToDoScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => ToDoScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  task: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  dueAt: _zod.z.union([_zod.z.lazy(() => _chunkJOPQFMDHcjs.DateTimeNullableWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional().nullable(),
  details: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  parentId: _zod.z.union([_zod.z.lazy(() => _chunkBCDQVT7Ocjs.IntNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  category: _zod.z.union([_zod.z.lazy(() => _chunkZSB3SXCPcjs.EnumTaskCategoryNullableWithAggregatesFilterSchema), _zod.z.lazy(() => _chunkBRDOGD33cjs.TaskCategorySchema)]).optional().nullable(),
  bookmarked: _zod.z.union([_zod.z.lazy(() => _chunk4JWIYQZ6cjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  status: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  priority: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  toDoListId: _zod.z.union([_zod.z.lazy(() => _chunkBCDQVT7Ocjs.IntNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  completedOn: _zod.z.union([_zod.z.lazy(() => _chunkJOPQFMDHcjs.DateTimeNullableWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional().nullable()
}).strict();
var ToDoScalarWhereWithAggregatesInputSchema_default = ToDoScalarWhereWithAggregatesInputSchema;




exports.ToDoScalarWhereWithAggregatesInputSchema = ToDoScalarWhereWithAggregatesInputSchema; exports.ToDoScalarWhereWithAggregatesInputSchema_default = ToDoScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-DZAGXWX4.cjs.map