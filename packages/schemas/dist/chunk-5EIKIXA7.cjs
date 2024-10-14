"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXTXOIETOcjs = require('./chunk-XTXOIETO.cjs');


var _chunk5ICBN4HXcjs = require('./chunk-5ICBN4HX.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/BibOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var BibOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  filename: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  firstSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  entries: _zod.z.lazy(() => _chunk5ICBN4HXcjs.BibEntryOrderByRelationAggregateInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkXTXOIETOcjs.BibOrderByRelevanceInputSchema).optional()
}).strict();
var BibOrderByWithRelationInputSchema_default = BibOrderByWithRelationInputSchema;




exports.BibOrderByWithRelationInputSchema = BibOrderByWithRelationInputSchema; exports.BibOrderByWithRelationInputSchema_default = BibOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-5EIKIXA7.cjs.map