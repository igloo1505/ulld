"use strict";Object.defineProperty(exports, "__esModule", {value: true});








var _chunkF67HEIG4cjs = require('./chunk-F67HEIG4.cjs');


var _chunkLDZNGXK5cjs = require('./chunk-LDZNGXK5.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/TagUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var TagUncheckedUpdateInputSchema = _zod.z.object({
  value: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  kanbanId: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkLDZNGXK5cjs.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  MdxNotes: _zod.z.lazy(() => _chunkF67HEIG4cjs.MdxNoteUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunkF67HEIG4cjs.BibEntryUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunkF67HEIG4cjs.IpynbUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  QAPair: _zod.z.lazy(() => _chunkF67HEIG4cjs.QAPairUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunkF67HEIG4cjs.PracticeExamUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunkF67HEIG4cjs.EquationUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunkF67HEIG4cjs.ToDoUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  todoList: _zod.z.lazy(() => _chunkF67HEIG4cjs.ToDoListUncheckedUpdateManyWithoutTagsNestedInputSchema).optional()
}).strict();
var TagUncheckedUpdateInputSchema_default = TagUncheckedUpdateInputSchema;




exports.TagUncheckedUpdateInputSchema = TagUncheckedUpdateInputSchema; exports.TagUncheckedUpdateInputSchema_default = TagUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-6P6Y7VNU.cjs.map