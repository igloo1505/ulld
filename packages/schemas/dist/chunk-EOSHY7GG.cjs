"use strict";Object.defineProperty(exports, "__esModule", {value: true});








var _chunk6UVIQKPKcjs = require('./chunk-6UVIQKPK.cjs');

// src/database/inputTypeSchemas/TopicUncheckedCreateInputSchema.ts
var _zod = require('zod');
var TopicUncheckedCreateInputSchema = _zod.z.object({
  value: _zod.z.string(),
  kanbanId: _zod.z.number().int().optional().nullable(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional(),
  MdxNotes: _zod.z.lazy(() => _chunk6UVIQKPKcjs.MdxNoteUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunk6UVIQKPKcjs.IpynbUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  QAPair: _zod.z.lazy(() => _chunk6UVIQKPKcjs.QAPairUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunk6UVIQKPKcjs.PracticeExamUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunk6UVIQKPKcjs.ToDoUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  todoList: _zod.z.lazy(() => _chunk6UVIQKPKcjs.ToDoListUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunk6UVIQKPKcjs.BibEntryUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunk6UVIQKPKcjs.EquationUncheckedCreateNestedManyWithoutTopicsInputSchema).optional()
}).strict();
var TopicUncheckedCreateInputSchema_default = TopicUncheckedCreateInputSchema;




exports.TopicUncheckedCreateInputSchema = TopicUncheckedCreateInputSchema; exports.TopicUncheckedCreateInputSchema_default = TopicUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-EOSHY7GG.cjs.map