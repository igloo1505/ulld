"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkPALRL6S5cjs = require('./chunk-PALRL6S5.cjs');

// src/database/inputTypeSchemas/ToDoCreateManyParentInputSchema.ts
var _zod = require('zod');
var ToDoCreateManyParentInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  createdAt: _zod.z.coerce.date().optional(),
  task: _zod.z.string(),
  dueAt: _zod.z.coerce.date().optional().nullable(),
  details: _zod.z.string().optional().nullable(),
  category: _zod.z.lazy(() => _chunkPALRL6S5cjs.TaskCategorySchema).optional().nullable(),
  bookmarked: _zod.z.boolean().optional(),
  status: _zod.z.string().optional(),
  priority: _zod.z.number().int().optional(),
  toDoListId: _zod.z.number().int().optional().nullable(),
  completedOn: _zod.z.coerce.date().optional().nullable()
}).strict();
var ToDoCreateManyParentInputSchema_default = ToDoCreateManyParentInputSchema;




exports.ToDoCreateManyParentInputSchema = ToDoCreateManyParentInputSchema; exports.ToDoCreateManyParentInputSchema_default = ToDoCreateManyParentInputSchema_default;
//# sourceMappingURL=chunk-GS5SIMMR.cjs.map