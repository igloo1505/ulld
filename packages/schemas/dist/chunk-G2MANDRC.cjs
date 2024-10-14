"use strict";Object.defineProperty(exports, "__esModule", {value: true});








var _chunk642YCHOVcjs = require('./chunk-642YCHOV.cjs');


var _chunk46TJSZ52cjs = require('./chunk-46TJSZ52.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/TagUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var TagUncheckedUpdateInputSchema = _zod.z.object({
  value: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  kanbanId: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunk46TJSZ52cjs.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  MdxNotes: _zod.z.lazy(() => _chunk642YCHOVcjs.MdxNoteUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunk642YCHOVcjs.BibEntryUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunk642YCHOVcjs.IpynbUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  QAPair: _zod.z.lazy(() => _chunk642YCHOVcjs.QAPairUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunk642YCHOVcjs.PracticeExamUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunk642YCHOVcjs.EquationUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunk642YCHOVcjs.ToDoUncheckedUpdateManyWithoutTagsNestedInputSchema).optional(),
  todoList: _zod.z.lazy(() => _chunk642YCHOVcjs.ToDoListUncheckedUpdateManyWithoutTagsNestedInputSchema).optional()
}).strict();
var TagUncheckedUpdateInputSchema_default = TagUncheckedUpdateInputSchema;




exports.TagUncheckedUpdateInputSchema = TagUncheckedUpdateInputSchema; exports.TagUncheckedUpdateInputSchema_default = TagUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-G2MANDRC.cjs.map