"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk22JJBABWcjs = require('./chunk-22JJBABW.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/GoogleCalendarAuthOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  auth: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  _relevance: _zod.z.lazy(() => _chunk22JJBABWcjs.GoogleCalendarAuthOrderByRelevanceInputSchema).optional()
}).strict();
var GoogleCalendarAuthOrderByWithRelationInputSchema_default = GoogleCalendarAuthOrderByWithRelationInputSchema;




exports.GoogleCalendarAuthOrderByWithRelationInputSchema = GoogleCalendarAuthOrderByWithRelationInputSchema; exports.GoogleCalendarAuthOrderByWithRelationInputSchema_default = GoogleCalendarAuthOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-T7LSCSLI.cjs.map