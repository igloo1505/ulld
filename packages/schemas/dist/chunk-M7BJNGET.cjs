"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4LCQXPBYcjs = require('./chunk-4LCQXPBY.cjs');


var _chunkS5HWHRI7cjs = require('./chunk-S5HWHRI7.cjs');


var _chunk7AYYY72Xcjs = require('./chunk-7AYYY72X.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/KanBanListOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var KanBanListOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  indexWithinBoard: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  boardId: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  cards: _zod.z.lazy(() => _chunk4LCQXPBYcjs.KanBanCardOrderByRelationAggregateInputSchema).optional(),
  Kanban: _zod.z.lazy(() => _chunk7AYYY72Xcjs.KanbanOrderByWithRelationInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkS5HWHRI7cjs.KanBanListOrderByRelevanceInputSchema).optional()
}).strict();
var KanBanListOrderByWithRelationInputSchema_default = KanBanListOrderByWithRelationInputSchema;




exports.KanBanListOrderByWithRelationInputSchema = KanBanListOrderByWithRelationInputSchema; exports.KanBanListOrderByWithRelationInputSchema_default = KanBanListOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-M7BJNGET.cjs.map