"use strict";Object.defineProperty(exports, "__esModule", {value: true});









var _chunkVJ3IVZTKcjs = require('./chunk-VJ3IVZTK.cjs');

// src/database/inputTypeSchemas/TagCreateInputSchema.ts
var _zod = require('zod');
var TagCreateInputSchema = _zod.z.object({
  value: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional(),
  MdxNotes: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.MdxNoteCreateNestedManyWithoutTagsInputSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.BibEntryCreateNestedManyWithoutTagsInputSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.IpynbCreateNestedManyWithoutTagsInputSchema).optional(),
  QAPair: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.QAPairCreateNestedManyWithoutTagsInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.PracticeExamCreateNestedManyWithoutTagsInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.EquationCreateNestedManyWithoutTagsInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.ToDoCreateNestedManyWithoutTagsInputSchema).optional(),
  Kanban: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.KanbanCreateNestedOneWithoutTagsInputSchema).optional(),
  todoList: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.ToDoListCreateNestedManyWithoutTagsInputSchema).optional()
}).strict();
var TagCreateInputSchema_default = TagCreateInputSchema;




exports.TagCreateInputSchema = TagCreateInputSchema; exports.TagCreateInputSchema_default = TagCreateInputSchema_default;
//# sourceMappingURL=chunk-QPPUZ4VE.cjs.map