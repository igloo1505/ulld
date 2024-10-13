"use strict";Object.defineProperty(exports, "__esModule", {value: true});









var _chunk6UVIQKPKcjs = require('./chunk-6UVIQKPK.cjs');

// src/database/inputTypeSchemas/TopicCreateInputSchema.ts
var _zod = require('zod');
var TopicCreateInputSchema = _zod.z.object({
  value: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional(),
  MdxNotes: _zod.z.lazy(() => _chunk6UVIQKPKcjs.MdxNoteCreateNestedManyWithoutTopicsInputSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunk6UVIQKPKcjs.IpynbCreateNestedManyWithoutTopicsInputSchema).optional(),
  QAPair: _zod.z.lazy(() => _chunk6UVIQKPKcjs.QAPairCreateNestedManyWithoutTopicsInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunk6UVIQKPKcjs.PracticeExamCreateNestedManyWithoutTopicsInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunk6UVIQKPKcjs.ToDoCreateNestedManyWithoutTopicsInputSchema).optional(),
  Kanban: _zod.z.lazy(() => _chunk6UVIQKPKcjs.KanbanCreateNestedOneWithoutTopicsInputSchema).optional(),
  todoList: _zod.z.lazy(() => _chunk6UVIQKPKcjs.ToDoListCreateNestedManyWithoutTopicsInputSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunk6UVIQKPKcjs.BibEntryCreateNestedManyWithoutTopicsInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunk6UVIQKPKcjs.EquationCreateNestedManyWithoutTopicsInputSchema).optional()
}).strict();
var TopicCreateInputSchema_default = TopicCreateInputSchema;




exports.TopicCreateInputSchema = TopicCreateInputSchema; exports.TopicCreateInputSchema_default = TopicCreateInputSchema_default;
//# sourceMappingURL=chunk-5TMH2TQI.cjs.map