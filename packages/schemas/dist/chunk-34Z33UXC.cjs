"use strict";Object.defineProperty(exports, "__esModule", {value: true});











var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');


var _chunk2WZ4XBN7cjs = require('./chunk-2WZ4XBN7.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');

// src/database/inputTypeSchemas/TagWhereUniqueInputSchema.ts
var _zod = require('zod');
var TagWhereUniqueInputSchema = _zod.z.object({
  value: _zod.z.string()
}).and(_zod.z.object({
  value: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.TagWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.TagWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkXQKVAOTYcjs.TagWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.TagWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.TagWhereInputSchema).array()]).optional(),
  kanbanId: _zod.z.union([_zod.z.lazy(() => _chunk2WZ4XBN7cjs.IntNullableFilterSchema), _zod.z.number().int()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  MdxNotes: _zod.z.lazy(() => _chunkXQKVAOTYcjs.MdxNoteListRelationFilterSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunkXQKVAOTYcjs.BibEntryListRelationFilterSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunkXQKVAOTYcjs.IpynbListRelationFilterSchema).optional(),
  QAPair: _zod.z.lazy(() => _chunkXQKVAOTYcjs.QAPairListRelationFilterSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunkXQKVAOTYcjs.PracticeExamListRelationFilterSchema).optional(),
  equations: _zod.z.lazy(() => _chunkXQKVAOTYcjs.EquationListRelationFilterSchema).optional(),
  toDo: _zod.z.lazy(() => _chunkXQKVAOTYcjs.ToDoListRelationFilterSchema).optional(),
  Kanban: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.KanbanNullableRelationFilterSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.KanbanWhereInputSchema)]).optional().nullable(),
  todoList: _zod.z.lazy(() => _chunkXQKVAOTYcjs.ToDoListListRelationFilterSchema).optional()
}).strict());
var TagWhereUniqueInputSchema_default = TagWhereUniqueInputSchema;




exports.TagWhereUniqueInputSchema = TagWhereUniqueInputSchema; exports.TagWhereUniqueInputSchema_default = TagWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-34Z33UXC.cjs.map