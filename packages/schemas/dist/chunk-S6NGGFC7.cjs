"use strict";Object.defineProperty(exports, "__esModule", {value: true});








var _chunkF67HEIG4cjs = require('./chunk-F67HEIG4.cjs');


var _chunkLDZNGXK5cjs = require('./chunk-LDZNGXK5.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/TopicUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var TopicUncheckedUpdateInputSchema = _zod.z.object({
  value: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  kanbanId: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkLDZNGXK5cjs.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  MdxNotes: _zod.z.lazy(() => _chunkF67HEIG4cjs.MdxNoteUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunkF67HEIG4cjs.IpynbUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
  QAPair: _zod.z.lazy(() => _chunkF67HEIG4cjs.QAPairUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunkF67HEIG4cjs.PracticeExamUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunkF67HEIG4cjs.ToDoUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
  todoList: _zod.z.lazy(() => _chunkF67HEIG4cjs.ToDoListUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunkF67HEIG4cjs.BibEntryUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunkF67HEIG4cjs.EquationUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional()
}).strict();
var TopicUncheckedUpdateInputSchema_default = TopicUncheckedUpdateInputSchema;




exports.TopicUncheckedUpdateInputSchema = TopicUncheckedUpdateInputSchema; exports.TopicUncheckedUpdateInputSchema_default = TopicUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-S6NGGFC7.cjs.map