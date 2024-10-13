"use strict";Object.defineProperty(exports, "__esModule", {value: true});









var _chunkF67HEIG4cjs = require('./chunk-F67HEIG4.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/TagUpdateInputSchema.ts
var _zod = require('zod');
var TagUpdateInputSchema = _zod.z.object({
  value: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  MdxNotes: _zod.z.lazy(() => _chunkF67HEIG4cjs.MdxNoteUpdateManyWithoutTagsNestedInputSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunkF67HEIG4cjs.BibEntryUpdateManyWithoutTagsNestedInputSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunkF67HEIG4cjs.IpynbUpdateManyWithoutTagsNestedInputSchema).optional(),
  QAPair: _zod.z.lazy(() => _chunkF67HEIG4cjs.QAPairUpdateManyWithoutTagsNestedInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunkF67HEIG4cjs.PracticeExamUpdateManyWithoutTagsNestedInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunkF67HEIG4cjs.EquationUpdateManyWithoutTagsNestedInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunkF67HEIG4cjs.ToDoUpdateManyWithoutTagsNestedInputSchema).optional(),
  Kanban: _zod.z.lazy(() => _chunkF67HEIG4cjs.KanbanUpdateOneWithoutTagsNestedInputSchema).optional(),
  todoList: _zod.z.lazy(() => _chunkF67HEIG4cjs.ToDoListUpdateManyWithoutTagsNestedInputSchema).optional()
}).strict();
var TagUpdateInputSchema_default = TagUpdateInputSchema;




exports.TagUpdateInputSchema = TagUpdateInputSchema; exports.TagUpdateInputSchema_default = TagUpdateInputSchema_default;
//# sourceMappingURL=chunk-HFFFRZM7.cjs.map