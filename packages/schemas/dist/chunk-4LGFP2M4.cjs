"use strict";Object.defineProperty(exports, "__esModule", {value: true});











var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');


var _chunk2WZ4XBN7cjs = require('./chunk-2WZ4XBN7.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');

// src/database/inputTypeSchemas/SubjectWhereUniqueInputSchema.ts
var _zod = require('zod');
var SubjectWhereUniqueInputSchema = _zod.z.object({
  value: _zod.z.string()
}).and(_zod.z.object({
  value: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.SubjectWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.SubjectWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkXQKVAOTYcjs.SubjectWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.SubjectWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.SubjectWhereInputSchema).array()]).optional(),
  kanbanId: _zod.z.union([_zod.z.lazy(() => _chunk2WZ4XBN7cjs.IntNullableFilterSchema), _zod.z.number().int()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  MdxNotes: _zod.z.lazy(() => _chunkXQKVAOTYcjs.MdxNoteListRelationFilterSchema).optional(),
  IpynbNotes: _zod.z.lazy(() => _chunkXQKVAOTYcjs.IpynbListRelationFilterSchema).optional(),
  QaPair: _zod.z.lazy(() => _chunkXQKVAOTYcjs.QAPairListRelationFilterSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunkXQKVAOTYcjs.PracticeExamListRelationFilterSchema).optional(),
  Kanban: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.KanbanNullableRelationFilterSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.KanbanWhereInputSchema)]).optional().nullable(),
  todoList: _zod.z.lazy(() => _chunkXQKVAOTYcjs.ToDoListListRelationFilterSchema).optional(),
  toDo: _zod.z.lazy(() => _chunkXQKVAOTYcjs.ToDoListRelationFilterSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunkXQKVAOTYcjs.BibEntryListRelationFilterSchema).optional(),
  equations: _zod.z.lazy(() => _chunkXQKVAOTYcjs.EquationListRelationFilterSchema).optional()
}).strict());
var SubjectWhereUniqueInputSchema_default = SubjectWhereUniqueInputSchema;




exports.SubjectWhereUniqueInputSchema = SubjectWhereUniqueInputSchema; exports.SubjectWhereUniqueInputSchema_default = SubjectWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-4LGFP2M4.cjs.map