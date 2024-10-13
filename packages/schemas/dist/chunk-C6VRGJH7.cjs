"use strict";Object.defineProperty(exports, "__esModule", {value: true});








var _chunk6UVIQKPKcjs = require('./chunk-6UVIQKPK.cjs');

// src/database/inputTypeSchemas/SubjectUncheckedCreateInputSchema.ts
var _zod = require('zod');
var SubjectUncheckedCreateInputSchema = _zod.z.object({
  value: _zod.z.string(),
  kanbanId: _zod.z.number().int().optional().nullable(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional(),
  MdxNotes: _zod.z.lazy(() => _chunk6UVIQKPKcjs.MdxNoteUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  IpynbNotes: _zod.z.lazy(() => _chunk6UVIQKPKcjs.IpynbUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  QaPair: _zod.z.lazy(() => _chunk6UVIQKPKcjs.QAPairUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunk6UVIQKPKcjs.PracticeExamUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  todoList: _zod.z.lazy(() => _chunk6UVIQKPKcjs.ToDoListUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunk6UVIQKPKcjs.ToDoUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunk6UVIQKPKcjs.BibEntryUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunk6UVIQKPKcjs.EquationUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional()
}).strict();
var SubjectUncheckedCreateInputSchema_default = SubjectUncheckedCreateInputSchema;




exports.SubjectUncheckedCreateInputSchema = SubjectUncheckedCreateInputSchema; exports.SubjectUncheckedCreateInputSchema_default = SubjectUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-C6VRGJH7.cjs.map