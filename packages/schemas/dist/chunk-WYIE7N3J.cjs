"use strict";Object.defineProperty(exports, "__esModule", {value: true});





var _chunk6UVIQKPKcjs = require('./chunk-6UVIQKPK.cjs');


var _chunkBRDOGD33cjs = require('./chunk-BRDOGD33.cjs');

// src/database/inputTypeSchemas/ToDoUncheckedCreateInputSchema.ts
var _zod = require('zod');
var ToDoUncheckedCreateInputSchema = _zod.z.object({
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
  completedOn: _zod.z.coerce.date().optional().nullable(),
  associatedNotes: _zod.z.lazy(() => _chunk6UVIQKPKcjs.MdxNoteUncheckedCreateNestedManyWithoutToDoInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TagUncheckedCreateNestedManyWithoutToDoInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TopicUncheckedCreateNestedManyWithoutToDoInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk6UVIQKPKcjs.SubjectUncheckedCreateNestedManyWithoutToDoInputSchema).optional(),
  child: _zod.z.lazy(() => _chunk6UVIQKPKcjs.ToDoUncheckedCreateNestedManyWithoutParentInputSchema).optional()
}).strict();
var ToDoUncheckedCreateInputSchema_default = ToDoUncheckedCreateInputSchema;




exports.ToDoUncheckedCreateInputSchema = ToDoUncheckedCreateInputSchema; exports.ToDoUncheckedCreateInputSchema_default = ToDoUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-WYIE7N3J.cjs.map