"use strict";Object.defineProperty(exports, "__esModule", {value: true});









var _chunkF67HEIG4cjs = require('./chunk-F67HEIG4.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/SubjectUpdateInputSchema.ts
var _zod = require('zod');
var SubjectUpdateInputSchema = _zod.z.object({
  value: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  MdxNotes: _zod.z.lazy(() => _chunkF67HEIG4cjs.MdxNoteUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  IpynbNotes: _zod.z.lazy(() => _chunkF67HEIG4cjs.IpynbUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  QaPair: _zod.z.lazy(() => _chunkF67HEIG4cjs.QAPairUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunkF67HEIG4cjs.PracticeExamUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  Kanban: _zod.z.lazy(() => _chunkF67HEIG4cjs.KanbanUpdateOneWithoutSubjectsNestedInputSchema).optional(),
  todoList: _zod.z.lazy(() => _chunkF67HEIG4cjs.ToDoListUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunkF67HEIG4cjs.ToDoUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunkF67HEIG4cjs.BibEntryUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunkF67HEIG4cjs.EquationUpdateManyWithoutSubjectsNestedInputSchema).optional()
}).strict();
var SubjectUpdateInputSchema_default = SubjectUpdateInputSchema;




exports.SubjectUpdateInputSchema = SubjectUpdateInputSchema; exports.SubjectUpdateInputSchema_default = SubjectUpdateInputSchema_default;
//# sourceMappingURL=chunk-WSGTKYS2.cjs.map