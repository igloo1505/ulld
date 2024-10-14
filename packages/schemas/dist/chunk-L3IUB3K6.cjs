"use strict";Object.defineProperty(exports, "__esModule", {value: true});









var _chunk642YCHOVcjs = require('./chunk-642YCHOV.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/TopicUpdateInputSchema.ts
var _zod = require('zod');
var TopicUpdateInputSchema = _zod.z.object({
  value: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  MdxNotes: _zod.z.lazy(() => _chunk642YCHOVcjs.MdxNoteUpdateManyWithoutTopicsNestedInputSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunk642YCHOVcjs.IpynbUpdateManyWithoutTopicsNestedInputSchema).optional(),
  QAPair: _zod.z.lazy(() => _chunk642YCHOVcjs.QAPairUpdateManyWithoutTopicsNestedInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunk642YCHOVcjs.PracticeExamUpdateManyWithoutTopicsNestedInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunk642YCHOVcjs.ToDoUpdateManyWithoutTopicsNestedInputSchema).optional(),
  Kanban: _zod.z.lazy(() => _chunk642YCHOVcjs.KanbanUpdateOneWithoutTopicsNestedInputSchema).optional(),
  todoList: _zod.z.lazy(() => _chunk642YCHOVcjs.ToDoListUpdateManyWithoutTopicsNestedInputSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunk642YCHOVcjs.BibEntryUpdateManyWithoutTopicsNestedInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunk642YCHOVcjs.EquationUpdateManyWithoutTopicsNestedInputSchema).optional()
}).strict();
var TopicUpdateInputSchema_default = TopicUpdateInputSchema;




exports.TopicUpdateInputSchema = TopicUpdateInputSchema; exports.TopicUpdateInputSchema_default = TopicUpdateInputSchema_default;
//# sourceMappingURL=chunk-L3IUB3K6.cjs.map