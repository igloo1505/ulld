"use strict";Object.defineProperty(exports, "__esModule", {value: true});









var _chunkVJ3IVZTKcjs = require('./chunk-VJ3IVZTK.cjs');

// src/database/inputTypeSchemas/TopicCreateInputSchema.ts
var _zod = require('zod');
var TopicCreateInputSchema = _zod.z.object({
  value: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional(),
  MdxNotes: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.MdxNoteCreateNestedManyWithoutTopicsInputSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.IpynbCreateNestedManyWithoutTopicsInputSchema).optional(),
  QAPair: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.QAPairCreateNestedManyWithoutTopicsInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.PracticeExamCreateNestedManyWithoutTopicsInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.ToDoCreateNestedManyWithoutTopicsInputSchema).optional(),
  Kanban: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.KanbanCreateNestedOneWithoutTopicsInputSchema).optional(),
  todoList: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.ToDoListCreateNestedManyWithoutTopicsInputSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.BibEntryCreateNestedManyWithoutTopicsInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.EquationCreateNestedManyWithoutTopicsInputSchema).optional()
}).strict();
var TopicCreateInputSchema_default = TopicCreateInputSchema;




exports.TopicCreateInputSchema = TopicCreateInputSchema; exports.TopicCreateInputSchema_default = TopicCreateInputSchema_default;
//# sourceMappingURL=chunk-YHOEGYXL.cjs.map