"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4AVCDOADcjs = require('./chunk-4AVCDOAD.cjs');


var _chunkM7BJNGETcjs = require('./chunk-M7BJNGET.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/KanBanCardOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var KanBanCardOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  listId: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  indexWithinList: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  details: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  KanBanList: _zod.z.lazy(() => _chunkM7BJNGETcjs.KanBanListOrderByWithRelationInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunk4AVCDOADcjs.KanBanCardOrderByRelevanceInputSchema).optional()
}).strict();
var KanBanCardOrderByWithRelationInputSchema_default = KanBanCardOrderByWithRelationInputSchema;




exports.KanBanCardOrderByWithRelationInputSchema = KanBanCardOrderByWithRelationInputSchema; exports.KanBanCardOrderByWithRelationInputSchema_default = KanBanCardOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-RKGVME74.cjs.map