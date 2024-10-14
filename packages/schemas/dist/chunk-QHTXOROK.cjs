"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBGMYTXZFcjs = require('./chunk-BGMYTXZF.cjs');


var _chunk7B6KOHO2cjs = require('./chunk-7B6KOHO2.cjs');


var _chunkONKP4WCJcjs = require('./chunk-ONKP4WCJ.cjs');


var _chunkRAJOAGECcjs = require('./chunk-RAJOAGEC.cjs');


var _chunkRDLNK7TXcjs = require('./chunk-RDLNK7TX.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/SettingsOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var SettingsOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  tooltips: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  summary_showCitations: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  summary_showTags: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  landingImageAlign: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lockedLandingImage: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  cleanOnSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  plotTheme: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  pluginSettings: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  firstSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunk7B6KOHO2cjs.SettingsCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkONKP4WCJcjs.SettingsAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkBGMYTXZFcjs.SettingsMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkRAJOAGECcjs.SettingsMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkRDLNK7TXcjs.SettingsSumOrderByAggregateInputSchema).optional()
}).strict();
var SettingsOrderByWithAggregationInputSchema_default = SettingsOrderByWithAggregationInputSchema;




exports.SettingsOrderByWithAggregationInputSchema = SettingsOrderByWithAggregationInputSchema; exports.SettingsOrderByWithAggregationInputSchema_default = SettingsOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-QHTXOROK.cjs.map