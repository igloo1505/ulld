"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVZ52SYD6cjs = require('./chunk-VZ52SYD6.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/AutoSettingOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var AutoSettingOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkVZ52SYD6cjs.AutoSettingOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkVZ52SYD6cjs.AutoSettingOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var AutoSettingOrderByRelevanceInputSchema_default = AutoSettingOrderByRelevanceInputSchema;




exports.AutoSettingOrderByRelevanceInputSchema = AutoSettingOrderByRelevanceInputSchema; exports.AutoSettingOrderByRelevanceInputSchema_default = AutoSettingOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-FGBGNYTW.cjs.map