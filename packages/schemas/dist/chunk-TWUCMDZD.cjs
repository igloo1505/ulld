"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunkF67HEIG4cjs = require('./chunk-F67HEIG4.cjs');


var _chunkU6PNJMDPcjs = require('./chunk-U6PNJMDP.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/KanbanUpdateInputSchema.ts
var _zod = require('zod');
var KanbanUpdateInputSchema = _zod.z.object({
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lists: _zod.z.lazy(() => _chunkU6PNJMDPcjs.KanBanListUpdateManyWithoutKanbanNestedInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunkF67HEIG4cjs.TagUpdateManyWithoutKanbanNestedInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkF67HEIG4cjs.SubjectUpdateManyWithoutKanbanNestedInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkF67HEIG4cjs.TopicUpdateManyWithoutKanbanNestedInputSchema).optional()
}).strict();
var KanbanUpdateInputSchema_default = KanbanUpdateInputSchema;




exports.KanbanUpdateInputSchema = KanbanUpdateInputSchema; exports.KanbanUpdateInputSchema_default = KanbanUpdateInputSchema_default;
//# sourceMappingURL=chunk-TWUCMDZD.cjs.map