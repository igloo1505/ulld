"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBRDOGD33cjs = require('./chunk-BRDOGD33.cjs');

// src/database/inputTypeSchemas/ToDoCreateManyParentInputSchema.ts
var _zod = require('zod');
var ToDoCreateManyParentInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  createdAt: _zod.z.coerce.date().optional(),
  task: _zod.z.string(),
  dueAt: _zod.z.coerce.date().optional().nullable(),
  details: _zod.z.string().optional().nullable(),
  category: _zod.z.lazy(() => _chunkBRDOGD33cjs.TaskCategorySchema).optional().nullable(),
  bookmarked: _zod.z.boolean().optional(),
  status: _zod.z.string().optional(),
  priority: _zod.z.number().int().optional(),
  toDoListId: _zod.z.number().int().optional().nullable(),
  completedOn: _zod.z.coerce.date().optional().nullable()
}).strict();
var ToDoCreateManyParentInputSchema_default = ToDoCreateManyParentInputSchema;




exports.ToDoCreateManyParentInputSchema = ToDoCreateManyParentInputSchema; exports.ToDoCreateManyParentInputSchema_default = ToDoCreateManyParentInputSchema_default;
//# sourceMappingURL=chunk-X56T5H5X.cjs.map