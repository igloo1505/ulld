"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLTFRFA5Ocjs = require('./chunk-LTFRFA5O.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/RelatedValuesOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var RelatedValuesOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  input: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  output: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  equationId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  equations: _zod.z.lazy(() => _chunkLTFRFA5Ocjs.EquationOrderByRelationAggregateInputSchema).optional()
}).strict();
var RelatedValuesOrderByWithRelationInputSchema_default = RelatedValuesOrderByWithRelationInputSchema;




exports.RelatedValuesOrderByWithRelationInputSchema = RelatedValuesOrderByWithRelationInputSchema; exports.RelatedValuesOrderByWithRelationInputSchema_default = RelatedValuesOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-XHJOELBN.cjs.map