"use strict";Object.defineProperty(exports, "__esModule", {value: true});









var _chunk6UVIQKPKcjs = require('./chunk-6UVIQKPK.cjs');

// src/database/inputTypeSchemas/TagCreateInputSchema.ts
var _zod = require('zod');
var TagCreateInputSchema = _zod.z.object({
  value: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional(),
  MdxNotes: _zod.z.lazy(() => _chunk6UVIQKPKcjs.MdxNoteCreateNestedManyWithoutTagsInputSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunk6UVIQKPKcjs.BibEntryCreateNestedManyWithoutTagsInputSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunk6UVIQKPKcjs.IpynbCreateNestedManyWithoutTagsInputSchema).optional(),
  QAPair: _zod.z.lazy(() => _chunk6UVIQKPKcjs.QAPairCreateNestedManyWithoutTagsInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunk6UVIQKPKcjs.PracticeExamCreateNestedManyWithoutTagsInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunk6UVIQKPKcjs.EquationCreateNestedManyWithoutTagsInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunk6UVIQKPKcjs.ToDoCreateNestedManyWithoutTagsInputSchema).optional(),
  Kanban: _zod.z.lazy(() => _chunk6UVIQKPKcjs.KanbanCreateNestedOneWithoutTagsInputSchema).optional(),
  todoList: _zod.z.lazy(() => _chunk6UVIQKPKcjs.ToDoListCreateNestedManyWithoutTagsInputSchema).optional()
}).strict();
var TagCreateInputSchema_default = TagCreateInputSchema;




exports.TagCreateInputSchema = TagCreateInputSchema; exports.TagCreateInputSchema_default = TagCreateInputSchema_default;
//# sourceMappingURL=chunk-SZZPAYMF.cjs.map