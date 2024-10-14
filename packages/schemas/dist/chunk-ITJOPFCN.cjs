"use strict";Object.defineProperty(exports, "__esModule", {value: true});









var _chunk642YCHOVcjs = require('./chunk-642YCHOV.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/TagUpdateInputSchema.ts
var _zod = require('zod');
var TagUpdateInputSchema = _zod.z.object({
  value: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  MdxNotes: _zod.z.lazy(() => _chunk642YCHOVcjs.MdxNoteUpdateManyWithoutTagsNestedInputSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunk642YCHOVcjs.BibEntryUpdateManyWithoutTagsNestedInputSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunk642YCHOVcjs.IpynbUpdateManyWithoutTagsNestedInputSchema).optional(),
  QAPair: _zod.z.lazy(() => _chunk642YCHOVcjs.QAPairUpdateManyWithoutTagsNestedInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunk642YCHOVcjs.PracticeExamUpdateManyWithoutTagsNestedInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunk642YCHOVcjs.EquationUpdateManyWithoutTagsNestedInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunk642YCHOVcjs.ToDoUpdateManyWithoutTagsNestedInputSchema).optional(),
  Kanban: _zod.z.lazy(() => _chunk642YCHOVcjs.KanbanUpdateOneWithoutTagsNestedInputSchema).optional(),
  todoList: _zod.z.lazy(() => _chunk642YCHOVcjs.ToDoListUpdateManyWithoutTagsNestedInputSchema).optional()
}).strict();
var TagUpdateInputSchema_default = TagUpdateInputSchema;




exports.TagUpdateInputSchema = TagUpdateInputSchema; exports.TagUpdateInputSchema_default = TagUpdateInputSchema_default;
//# sourceMappingURL=chunk-ITJOPFCN.cjs.map