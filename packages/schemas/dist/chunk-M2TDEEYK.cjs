"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk64XFUDLIcjs = require('./chunk-64XFUDLI.cjs');


var _chunk7CPS7QVLcjs = require('./chunk-7CPS7QVL.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/TimePeriodOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var TimePeriodOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  start: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  end: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  dietId: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  Diet: _zod.z.lazy(() => _chunk7CPS7QVLcjs.DietOrderByWithRelationInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunk64XFUDLIcjs.TimePeriodOrderByRelevanceInputSchema).optional()
}).strict();
var TimePeriodOrderByWithRelationInputSchema_default = TimePeriodOrderByWithRelationInputSchema;




exports.TimePeriodOrderByWithRelationInputSchema = TimePeriodOrderByWithRelationInputSchema; exports.TimePeriodOrderByWithRelationInputSchema_default = TimePeriodOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-M2TDEEYK.cjs.map