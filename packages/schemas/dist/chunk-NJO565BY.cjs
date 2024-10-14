"use strict";Object.defineProperty(exports, "__esModule", {value: true});








var _chunkVJ3IVZTKcjs = require('./chunk-VJ3IVZTK.cjs');

// src/database/inputTypeSchemas/TopicUncheckedCreateInputSchema.ts
var _zod = require('zod');
var TopicUncheckedCreateInputSchema = _zod.z.object({
  value: _zod.z.string(),
  kanbanId: _zod.z.number().int().optional().nullable(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional(),
  MdxNotes: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.MdxNoteUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.IpynbUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  QAPair: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.QAPairUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.PracticeExamUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.ToDoUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  todoList: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.ToDoListUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.BibEntryUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.EquationUncheckedCreateNestedManyWithoutTopicsInputSchema).optional()
}).strict();
var TopicUncheckedCreateInputSchema_default = TopicUncheckedCreateInputSchema;




exports.TopicUncheckedCreateInputSchema = TopicUncheckedCreateInputSchema; exports.TopicUncheckedCreateInputSchema_default = TopicUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-NJO565BY.cjs.map