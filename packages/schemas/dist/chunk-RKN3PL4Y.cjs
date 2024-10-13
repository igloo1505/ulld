"use strict";Object.defineProperty(exports, "__esModule", {value: true});









var _chunkF67HEIG4cjs = require('./chunk-F67HEIG4.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/TopicUpdateInputSchema.ts
var _zod = require('zod');
var TopicUpdateInputSchema = _zod.z.object({
  value: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  MdxNotes: _zod.z.lazy(() => _chunkF67HEIG4cjs.MdxNoteUpdateManyWithoutTopicsNestedInputSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunkF67HEIG4cjs.IpynbUpdateManyWithoutTopicsNestedInputSchema).optional(),
  QAPair: _zod.z.lazy(() => _chunkF67HEIG4cjs.QAPairUpdateManyWithoutTopicsNestedInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunkF67HEIG4cjs.PracticeExamUpdateManyWithoutTopicsNestedInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunkF67HEIG4cjs.ToDoUpdateManyWithoutTopicsNestedInputSchema).optional(),
  Kanban: _zod.z.lazy(() => _chunkF67HEIG4cjs.KanbanUpdateOneWithoutTopicsNestedInputSchema).optional(),
  todoList: _zod.z.lazy(() => _chunkF67HEIG4cjs.ToDoListUpdateManyWithoutTopicsNestedInputSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunkF67HEIG4cjs.BibEntryUpdateManyWithoutTopicsNestedInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunkF67HEIG4cjs.EquationUpdateManyWithoutTopicsNestedInputSchema).optional()
}).strict();
var TopicUpdateInputSchema_default = TopicUpdateInputSchema;




exports.TopicUpdateInputSchema = TopicUpdateInputSchema; exports.TopicUpdateInputSchema_default = TopicUpdateInputSchema_default;
//# sourceMappingURL=chunk-RKN3PL4Y.cjs.map