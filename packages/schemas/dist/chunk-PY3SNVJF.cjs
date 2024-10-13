"use strict";Object.defineProperty(exports, "__esModule", {value: true});









var _chunk6UVIQKPKcjs = require('./chunk-6UVIQKPK.cjs');

// src/database/inputTypeSchemas/SubjectCreateInputSchema.ts
var _zod = require('zod');
var SubjectCreateInputSchema = _zod.z.object({
  value: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional(),
  MdxNotes: _zod.z.lazy(() => _chunk6UVIQKPKcjs.MdxNoteCreateNestedManyWithoutSubjectsInputSchema).optional(),
  IpynbNotes: _zod.z.lazy(() => _chunk6UVIQKPKcjs.IpynbCreateNestedManyWithoutSubjectsInputSchema).optional(),
  QaPair: _zod.z.lazy(() => _chunk6UVIQKPKcjs.QAPairCreateNestedManyWithoutSubjectsInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunk6UVIQKPKcjs.PracticeExamCreateNestedManyWithoutSubjectsInputSchema).optional(),
  Kanban: _zod.z.lazy(() => _chunk6UVIQKPKcjs.KanbanCreateNestedOneWithoutSubjectsInputSchema).optional(),
  todoList: _zod.z.lazy(() => _chunk6UVIQKPKcjs.ToDoListCreateNestedManyWithoutSubjectsInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunk6UVIQKPKcjs.ToDoCreateNestedManyWithoutSubjectsInputSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunk6UVIQKPKcjs.BibEntryCreateNestedManyWithoutSubjectsInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunk6UVIQKPKcjs.EquationCreateNestedManyWithoutSubjectsInputSchema).optional()
}).strict();
var SubjectCreateInputSchema_default = SubjectCreateInputSchema;




exports.SubjectCreateInputSchema = SubjectCreateInputSchema; exports.SubjectCreateInputSchema_default = SubjectCreateInputSchema_default;
//# sourceMappingURL=chunk-PY3SNVJF.cjs.map