"use strict";Object.defineProperty(exports, "__esModule", {value: true});








var _chunkVJ3IVZTKcjs = require('./chunk-VJ3IVZTK.cjs');

// src/database/inputTypeSchemas/TagUncheckedCreateInputSchema.ts
var _zod = require('zod');
var TagUncheckedCreateInputSchema = _zod.z.object({
  value: _zod.z.string(),
  kanbanId: _zod.z.number().int().optional().nullable(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional(),
  MdxNotes: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.MdxNoteUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.BibEntryUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.IpynbUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  QAPair: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.QAPairUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.PracticeExamUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.EquationUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.ToDoUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  todoList: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.ToDoListUncheckedCreateNestedManyWithoutTagsInputSchema).optional()
}).strict();
var TagUncheckedCreateInputSchema_default = TagUncheckedCreateInputSchema;




exports.TagUncheckedCreateInputSchema = TagUncheckedCreateInputSchema; exports.TagUncheckedCreateInputSchema_default = TagUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-3A4Y3G6Y.cjs.map