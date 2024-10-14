"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLHSLRP3Fcjs = require('./chunk-LHSLRP3F.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/WaitlistRequestOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var WaitlistRequestOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  email: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  receivedOn: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  emailsSent: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkLHSLRP3Fcjs.WaitlistRequestOrderByRelevanceInputSchema).optional()
}).strict();
var WaitlistRequestOrderByWithRelationInputSchema_default = WaitlistRequestOrderByWithRelationInputSchema;




exports.WaitlistRequestOrderByWithRelationInputSchema = WaitlistRequestOrderByWithRelationInputSchema; exports.WaitlistRequestOrderByWithRelationInputSchema_default = WaitlistRequestOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-6KLE3COQ.cjs.map