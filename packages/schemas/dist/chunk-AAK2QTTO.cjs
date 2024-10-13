"use strict";Object.defineProperty(exports, "__esModule", {value: true});








var _chunk6UVIQKPKcjs = require('./chunk-6UVIQKPK.cjs');

// src/database/inputTypeSchemas/TagUncheckedCreateInputSchema.ts
var _zod = require('zod');
var TagUncheckedCreateInputSchema = _zod.z.object({
  value: _zod.z.string(),
  kanbanId: _zod.z.number().int().optional().nullable(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional(),
  MdxNotes: _zod.z.lazy(() => _chunk6UVIQKPKcjs.MdxNoteUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunk6UVIQKPKcjs.BibEntryUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunk6UVIQKPKcjs.IpynbUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  QAPair: _zod.z.lazy(() => _chunk6UVIQKPKcjs.QAPairUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunk6UVIQKPKcjs.PracticeExamUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunk6UVIQKPKcjs.EquationUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunk6UVIQKPKcjs.ToDoUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  todoList: _zod.z.lazy(() => _chunk6UVIQKPKcjs.ToDoListUncheckedCreateNestedManyWithoutTagsInputSchema).optional()
}).strict();
var TagUncheckedCreateInputSchema_default = TagUncheckedCreateInputSchema;




exports.TagUncheckedCreateInputSchema = TagUncheckedCreateInputSchema; exports.TagUncheckedCreateInputSchema_default = TagUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-AAK2QTTO.cjs.map