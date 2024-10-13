"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunkF67HEIG4cjs = require('./chunk-F67HEIG4.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/KanbanUpdateWithoutListsInputSchema.ts
var _zod = require('zod');
var KanbanUpdateWithoutListsInputSchema = _zod.z.object({
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  tags: _zod.z.lazy(() => _chunkF67HEIG4cjs.TagUpdateManyWithoutKanbanNestedInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkF67HEIG4cjs.SubjectUpdateManyWithoutKanbanNestedInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkF67HEIG4cjs.TopicUpdateManyWithoutKanbanNestedInputSchema).optional()
}).strict();
var KanbanUpdateWithoutListsInputSchema_default = KanbanUpdateWithoutListsInputSchema;




exports.KanbanUpdateWithoutListsInputSchema = KanbanUpdateWithoutListsInputSchema; exports.KanbanUpdateWithoutListsInputSchema_default = KanbanUpdateWithoutListsInputSchema_default;
//# sourceMappingURL=chunk-OWZ2G26U.cjs.map