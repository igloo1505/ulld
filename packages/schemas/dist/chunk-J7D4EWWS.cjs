"use strict";Object.defineProperty(exports, "__esModule", {value: true});









var _chunk642YCHOVcjs = require('./chunk-642YCHOV.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/SubjectUpdateInputSchema.ts
var _zod = require('zod');
var SubjectUpdateInputSchema = _zod.z.object({
  value: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  MdxNotes: _zod.z.lazy(() => _chunk642YCHOVcjs.MdxNoteUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  IpynbNotes: _zod.z.lazy(() => _chunk642YCHOVcjs.IpynbUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  QaPair: _zod.z.lazy(() => _chunk642YCHOVcjs.QAPairUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunk642YCHOVcjs.PracticeExamUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  Kanban: _zod.z.lazy(() => _chunk642YCHOVcjs.KanbanUpdateOneWithoutSubjectsNestedInputSchema).optional(),
  todoList: _zod.z.lazy(() => _chunk642YCHOVcjs.ToDoListUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunk642YCHOVcjs.ToDoUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunk642YCHOVcjs.BibEntryUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunk642YCHOVcjs.EquationUpdateManyWithoutSubjectsNestedInputSchema).optional()
}).strict();
var SubjectUpdateInputSchema_default = SubjectUpdateInputSchema;




exports.SubjectUpdateInputSchema = SubjectUpdateInputSchema; exports.SubjectUpdateInputSchema_default = SubjectUpdateInputSchema_default;
//# sourceMappingURL=chunk-J7D4EWWS.cjs.map