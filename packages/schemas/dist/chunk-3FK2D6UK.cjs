"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunkF67HEIG4cjs = require('./chunk-F67HEIG4.cjs');


var _chunk7FJINYEKcjs = require('./chunk-7FJINYEK.cjs');


var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/KanbanUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var KanbanUncheckedUpdateInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lists: _zod.z.lazy(() => _chunk7FJINYEKcjs.KanBanListUncheckedUpdateManyWithoutKanbanNestedInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunkF67HEIG4cjs.TagUncheckedUpdateManyWithoutKanbanNestedInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkF67HEIG4cjs.SubjectUncheckedUpdateManyWithoutKanbanNestedInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkF67HEIG4cjs.TopicUncheckedUpdateManyWithoutKanbanNestedInputSchema).optional()
}).strict();
var KanbanUncheckedUpdateInputSchema_default = KanbanUncheckedUpdateInputSchema;




exports.KanbanUncheckedUpdateInputSchema = KanbanUncheckedUpdateInputSchema; exports.KanbanUncheckedUpdateInputSchema_default = KanbanUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-3FK2D6UK.cjs.map