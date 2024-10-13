"use strict";Object.defineProperty(exports, "__esModule", {value: true});







var _chunk6UVIQKPKcjs = require('./chunk-6UVIQKPK.cjs');


var _chunkBRDOGD33cjs = require('./chunk-BRDOGD33.cjs');

// src/database/inputTypeSchemas/ToDoCreateInputSchema.ts
var _zod = require('zod');
var ToDoCreateInputSchema = _zod.z.object({
  createdAt: _zod.z.coerce.date().optional(),
  task: _zod.z.string(),
  dueAt: _zod.z.coerce.date().optional().nullable(),
  details: _zod.z.string().optional().nullable(),
  category: _zod.z.lazy(() => _chunkBRDOGD33cjs.TaskCategorySchema).optional().nullable(),
  bookmarked: _zod.z.boolean().optional(),
  status: _zod.z.string().optional(),
  priority: _zod.z.number().int().optional(),
  completedOn: _zod.z.coerce.date().optional().nullable(),
  associatedNotes: _zod.z.lazy(() => _chunk6UVIQKPKcjs.MdxNoteCreateNestedManyWithoutToDoInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TagCreateNestedManyWithoutToDoInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunk6UVIQKPKcjs.TopicCreateNestedManyWithoutToDoInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk6UVIQKPKcjs.SubjectCreateNestedManyWithoutToDoInputSchema).optional(),
  parent: _zod.z.lazy(() => _chunk6UVIQKPKcjs.ToDoCreateNestedOneWithoutChildInputSchema).optional(),
  child: _zod.z.lazy(() => _chunk6UVIQKPKcjs.ToDoCreateNestedManyWithoutParentInputSchema).optional(),
  ToDoList: _zod.z.lazy(() => _chunk6UVIQKPKcjs.ToDoListCreateNestedOneWithoutTasksInputSchema).optional()
}).strict();
var ToDoCreateInputSchema_default = ToDoCreateInputSchema;




exports.ToDoCreateInputSchema = ToDoCreateInputSchema; exports.ToDoCreateInputSchema_default = ToDoCreateInputSchema_default;
//# sourceMappingURL=chunk-VMOMOEOO.cjs.map