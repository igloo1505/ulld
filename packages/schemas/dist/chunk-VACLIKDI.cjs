"use strict";Object.defineProperty(exports, "__esModule", {value: true});









var _chunkVJ3IVZTKcjs = require('./chunk-VJ3IVZTK.cjs');

// src/database/inputTypeSchemas/SubjectCreateInputSchema.ts
var _zod = require('zod');
var SubjectCreateInputSchema = _zod.z.object({
  value: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional(),
  MdxNotes: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.MdxNoteCreateNestedManyWithoutSubjectsInputSchema).optional(),
  IpynbNotes: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.IpynbCreateNestedManyWithoutSubjectsInputSchema).optional(),
  QaPair: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.QAPairCreateNestedManyWithoutSubjectsInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.PracticeExamCreateNestedManyWithoutSubjectsInputSchema).optional(),
  Kanban: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.KanbanCreateNestedOneWithoutSubjectsInputSchema).optional(),
  todoList: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.ToDoListCreateNestedManyWithoutSubjectsInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.ToDoCreateNestedManyWithoutSubjectsInputSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.BibEntryCreateNestedManyWithoutSubjectsInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.EquationCreateNestedManyWithoutSubjectsInputSchema).optional()
}).strict();
var SubjectCreateInputSchema_default = SubjectCreateInputSchema;




exports.SubjectCreateInputSchema = SubjectCreateInputSchema; exports.SubjectCreateInputSchema_default = SubjectCreateInputSchema_default;
//# sourceMappingURL=chunk-VACLIKDI.cjs.map