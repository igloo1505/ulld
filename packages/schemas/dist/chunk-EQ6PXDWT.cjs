"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkO6I3YG3Wcjs = require('./chunk-O6I3YG3W.cjs');


var _chunkM3EST7T5cjs = require('./chunk-M3EST7T5.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/BibOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var BibOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  filename: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  firstSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  entries: _zod.z.lazy(() => _chunkM3EST7T5cjs.BibEntryOrderByRelationAggregateInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkO6I3YG3Wcjs.BibOrderByRelevanceInputSchema).optional()
}).strict();
var BibOrderByWithRelationInputSchema_default = BibOrderByWithRelationInputSchema;




exports.BibOrderByWithRelationInputSchema = BibOrderByWithRelationInputSchema; exports.BibOrderByWithRelationInputSchema_default = BibOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-EQ6PXDWT.cjs.map