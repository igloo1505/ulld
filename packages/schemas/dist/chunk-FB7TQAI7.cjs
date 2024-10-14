"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFGBGNYTWcjs = require('./chunk-FGBGNYTW.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/AutoSettingOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var AutoSettingOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  type: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  glob: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  value: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkFGBGNYTWcjs.AutoSettingOrderByRelevanceInputSchema).optional()
}).strict();
var AutoSettingOrderByWithRelationInputSchema_default = AutoSettingOrderByWithRelationInputSchema;




exports.AutoSettingOrderByWithRelationInputSchema = AutoSettingOrderByWithRelationInputSchema; exports.AutoSettingOrderByWithRelationInputSchema_default = AutoSettingOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-FB7TQAI7.cjs.map