"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkP3OK7LHNcjs = require('./chunk-P3OK7LHN.cjs');


var _chunkTLP7GBT6cjs = require('./chunk-TLP7GBT6.cjs');


var _chunkWFX3WPX4cjs = require('./chunk-WFX3WPX4.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/SequentialNoteListOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var SequentialNoteListOrderByWithRelationInputSchema = _zod.z.object({
  sequentialKey: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  MdxNote: _zod.z.lazy(() => _chunkWFX3WPX4cjs.MdxNoteOrderByRelationAggregateInputSchema).optional(),
  Ipynb: _zod.z.lazy(() => _chunkTLP7GBT6cjs.IpynbOrderByRelationAggregateInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkP3OK7LHNcjs.SequentialNoteListOrderByRelevanceInputSchema).optional()
}).strict();
var SequentialNoteListOrderByWithRelationInputSchema_default = SequentialNoteListOrderByWithRelationInputSchema;




exports.SequentialNoteListOrderByWithRelationInputSchema = SequentialNoteListOrderByWithRelationInputSchema; exports.SequentialNoteListOrderByWithRelationInputSchema_default = SequentialNoteListOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-XMXSNRFY.cjs.map