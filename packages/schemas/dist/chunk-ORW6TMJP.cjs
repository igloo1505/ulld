"use strict";Object.defineProperty(exports, "__esModule", {value: true});








var _chunkVJ3IVZTKcjs = require('./chunk-VJ3IVZTK.cjs');

// src/database/inputTypeSchemas/SubjectUncheckedCreateInputSchema.ts
var _zod = require('zod');
var SubjectUncheckedCreateInputSchema = _zod.z.object({
  value: _zod.z.string(),
  kanbanId: _zod.z.number().int().optional().nullable(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional(),
  MdxNotes: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.MdxNoteUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  IpynbNotes: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.IpynbUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  QaPair: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.QAPairUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.PracticeExamUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  todoList: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.ToDoListUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.ToDoUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.BibEntryUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.EquationUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional()
}).strict();
var SubjectUncheckedCreateInputSchema_default = SubjectUncheckedCreateInputSchema;




exports.SubjectUncheckedCreateInputSchema = SubjectUncheckedCreateInputSchema; exports.SubjectUncheckedCreateInputSchema_default = SubjectUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-ORW6TMJP.cjs.map