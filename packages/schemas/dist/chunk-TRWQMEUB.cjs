"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMFA6OXXScjs = require('./chunk-MFA6OXXS.cjs');


var _chunkWC2WFDTFcjs = require('./chunk-WC2WFDTF.cjs');


var _chunkAYLQOMLKcjs = require('./chunk-AYLQOMLK.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/KanBanListOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var KanBanListOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  indexWithinBoard: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  boardId: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  cards: _zod.z.lazy(() => _chunkMFA6OXXScjs.KanBanCardOrderByRelationAggregateInputSchema).optional(),
  Kanban: _zod.z.lazy(() => _chunkAYLQOMLKcjs.KanbanOrderByWithRelationInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkWC2WFDTFcjs.KanBanListOrderByRelevanceInputSchema).optional()
}).strict();
var KanBanListOrderByWithRelationInputSchema_default = KanBanListOrderByWithRelationInputSchema;




exports.KanBanListOrderByWithRelationInputSchema = KanBanListOrderByWithRelationInputSchema; exports.KanBanListOrderByWithRelationInputSchema_default = KanBanListOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-TRWQMEUB.cjs.map