"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkV2JN7ZGBcjs = require('./chunk-V2JN7ZGB.cjs');


var _chunkTRWQMEUBcjs = require('./chunk-TRWQMEUB.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/KanBanCardOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var KanBanCardOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  listId: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  indexWithinList: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  details: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  KanBanList: _zod.z.lazy(() => _chunkTRWQMEUBcjs.KanBanListOrderByWithRelationInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkV2JN7ZGBcjs.KanBanCardOrderByRelevanceInputSchema).optional()
}).strict();
var KanBanCardOrderByWithRelationInputSchema_default = KanBanCardOrderByWithRelationInputSchema;




exports.KanBanCardOrderByWithRelationInputSchema = KanBanCardOrderByWithRelationInputSchema; exports.KanBanCardOrderByWithRelationInputSchema_default = KanBanCardOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-4B6MDZLU.cjs.map