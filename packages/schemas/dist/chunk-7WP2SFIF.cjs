"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBRDOGD33cjs = require('./chunk-BRDOGD33.cjs');

// src/database/inputTypeSchemas/ToDoCreateManyInputSchema.ts
var _zod = require('zod');
var ToDoCreateManyInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  createdAt: _zod.z.coerce.date().optional(),
  task: _zod.z.string(),
  dueAt: _zod.z.coerce.date().optional().nullable(),
  details: _zod.z.string().optional().nullable(),
  parentId: _zod.z.number().int().optional().nullable(),
  category: _zod.z.lazy(() => _chunkBRDOGD33cjs.TaskCategorySchema).optional().nullable(),
  bookmarked: _zod.z.boolean().optional(),
  status: _zod.z.string().optional(),
  priority: _zod.z.number().int().optional(),
  toDoListId: _zod.z.number().int().optional().nullable(),
  completedOn: _zod.z.coerce.date().optional().nullable()
}).strict();
var ToDoCreateManyInputSchema_default = ToDoCreateManyInputSchema;




exports.ToDoCreateManyInputSchema = ToDoCreateManyInputSchema; exports.ToDoCreateManyInputSchema_default = ToDoCreateManyInputSchema_default;
//# sourceMappingURL=chunk-7WP2SFIF.cjs.map