"use strict";Object.defineProperty(exports, "__esModule", {value: true});








var _chunkF67HEIG4cjs = require('./chunk-F67HEIG4.cjs');


var _chunkLDZNGXK5cjs = require('./chunk-LDZNGXK5.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/SubjectUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var SubjectUncheckedUpdateInputSchema = _zod.z.object({
  value: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  kanbanId: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkLDZNGXK5cjs.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  MdxNotes: _zod.z.lazy(() => _chunkF67HEIG4cjs.MdxNoteUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  IpynbNotes: _zod.z.lazy(() => _chunkF67HEIG4cjs.IpynbUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  QaPair: _zod.z.lazy(() => _chunkF67HEIG4cjs.QAPairUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunkF67HEIG4cjs.PracticeExamUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  todoList: _zod.z.lazy(() => _chunkF67HEIG4cjs.ToDoListUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunkF67HEIG4cjs.ToDoUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunkF67HEIG4cjs.BibEntryUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunkF67HEIG4cjs.EquationUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional()
}).strict();
var SubjectUncheckedUpdateInputSchema_default = SubjectUncheckedUpdateInputSchema;




exports.SubjectUncheckedUpdateInputSchema = SubjectUncheckedUpdateInputSchema; exports.SubjectUncheckedUpdateInputSchema_default = SubjectUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-LICQCDMX.cjs.map