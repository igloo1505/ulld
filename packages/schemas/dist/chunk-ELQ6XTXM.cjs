"use strict";Object.defineProperty(exports, "__esModule", {value: true});








var _chunk642YCHOVcjs = require('./chunk-642YCHOV.cjs');


var _chunk46TJSZ52cjs = require('./chunk-46TJSZ52.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/SubjectUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var SubjectUncheckedUpdateInputSchema = _zod.z.object({
  value: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  kanbanId: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunk46TJSZ52cjs.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  MdxNotes: _zod.z.lazy(() => _chunk642YCHOVcjs.MdxNoteUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  IpynbNotes: _zod.z.lazy(() => _chunk642YCHOVcjs.IpynbUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  QaPair: _zod.z.lazy(() => _chunk642YCHOVcjs.QAPairUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunk642YCHOVcjs.PracticeExamUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  todoList: _zod.z.lazy(() => _chunk642YCHOVcjs.ToDoListUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunk642YCHOVcjs.ToDoUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunk642YCHOVcjs.BibEntryUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunk642YCHOVcjs.EquationUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional()
}).strict();
var SubjectUncheckedUpdateInputSchema_default = SubjectUncheckedUpdateInputSchema;




exports.SubjectUncheckedUpdateInputSchema = SubjectUncheckedUpdateInputSchema; exports.SubjectUncheckedUpdateInputSchema_default = SubjectUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-ELQ6XTXM.cjs.map