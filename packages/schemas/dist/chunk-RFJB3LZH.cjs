"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBRDOGD33cjs = require('./chunk-BRDOGD33.cjs');

// src/database/inputTypeSchemas/ToDoCreateManyToDoListInputSchema.ts
var _zod = require('zod');
var ToDoCreateManyToDoListInputSchema = _zod.z.object({
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
  completedOn: _zod.z.coerce.date().optional().nullable()
}).strict();
var ToDoCreateManyToDoListInputSchema_default = ToDoCreateManyToDoListInputSchema;




exports.ToDoCreateManyToDoListInputSchema = ToDoCreateManyToDoListInputSchema; exports.ToDoCreateManyToDoListInputSchema_default = ToDoCreateManyToDoListInputSchema_default;
//# sourceMappingURL=chunk-RFJB3LZH.cjs.map