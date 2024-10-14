"use strict";Object.defineProperty(exports, "__esModule", {value: true});







var _chunkVJ3IVZTKcjs = require('./chunk-VJ3IVZTK.cjs');


var _chunkPALRL6S5cjs = require('./chunk-PALRL6S5.cjs');

// src/database/inputTypeSchemas/ToDoCreateInputSchema.ts
var _zod = require('zod');
var ToDoCreateInputSchema = _zod.z.object({
  createdAt: _zod.z.coerce.date().optional(),
  task: _zod.z.string(),
  dueAt: _zod.z.coerce.date().optional().nullable(),
  details: _zod.z.string().optional().nullable(),
  category: _zod.z.lazy(() => _chunkPALRL6S5cjs.TaskCategorySchema).optional().nullable(),
  bookmarked: _zod.z.boolean().optional(),
  status: _zod.z.string().optional(),
  priority: _zod.z.number().int().optional(),
  completedOn: _zod.z.coerce.date().optional().nullable(),
  associatedNotes: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.MdxNoteCreateNestedManyWithoutToDoInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TagCreateNestedManyWithoutToDoInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TopicCreateNestedManyWithoutToDoInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.SubjectCreateNestedManyWithoutToDoInputSchema).optional(),
  parent: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.ToDoCreateNestedOneWithoutChildInputSchema).optional(),
  child: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.ToDoCreateNestedManyWithoutParentInputSchema).optional(),
  ToDoList: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.ToDoListCreateNestedOneWithoutTasksInputSchema).optional()
}).strict();
var ToDoCreateInputSchema_default = ToDoCreateInputSchema;




exports.ToDoCreateInputSchema = ToDoCreateInputSchema; exports.ToDoCreateInputSchema_default = ToDoCreateInputSchema_default;
//# sourceMappingURL=chunk-UPSCNT67.cjs.map