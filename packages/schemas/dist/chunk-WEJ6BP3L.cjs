"use strict";Object.defineProperty(exports, "__esModule", {value: true});





var _chunkVJ3IVZTKcjs = require('./chunk-VJ3IVZTK.cjs');


var _chunkPALRL6S5cjs = require('./chunk-PALRL6S5.cjs');

// src/database/inputTypeSchemas/ToDoUncheckedCreateInputSchema.ts
var _zod = require('zod');
var ToDoUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  createdAt: _zod.z.coerce.date().optional(),
  task: _zod.z.string(),
  dueAt: _zod.z.coerce.date().optional().nullable(),
  details: _zod.z.string().optional().nullable(),
  parentId: _zod.z.number().int().optional().nullable(),
  category: _zod.z.lazy(() => _chunkPALRL6S5cjs.TaskCategorySchema).optional().nullable(),
  bookmarked: _zod.z.boolean().optional(),
  status: _zod.z.string().optional(),
  priority: _zod.z.number().int().optional(),
  toDoListId: _zod.z.number().int().optional().nullable(),
  completedOn: _zod.z.coerce.date().optional().nullable(),
  associatedNotes: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.MdxNoteUncheckedCreateNestedManyWithoutToDoInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TagUncheckedCreateNestedManyWithoutToDoInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.TopicUncheckedCreateNestedManyWithoutToDoInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.SubjectUncheckedCreateNestedManyWithoutToDoInputSchema).optional(),
  child: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.ToDoUncheckedCreateNestedManyWithoutParentInputSchema).optional()
}).strict();
var ToDoUncheckedCreateInputSchema_default = ToDoUncheckedCreateInputSchema;




exports.ToDoUncheckedCreateInputSchema = ToDoUncheckedCreateInputSchema; exports.ToDoUncheckedCreateInputSchema_default = ToDoUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-WEJ6BP3L.cjs.map