"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOX3ZMBI6cjs = require('./chunk-OX3ZMBI6.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/SettingsOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var SettingsOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkOX3ZMBI6cjs.SettingsOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkOX3ZMBI6cjs.SettingsOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var SettingsOrderByRelevanceInputSchema_default = SettingsOrderByRelevanceInputSchema;




exports.SettingsOrderByRelevanceInputSchema = SettingsOrderByRelevanceInputSchema; exports.SettingsOrderByRelevanceInputSchema_default = SettingsOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-IAY6MKSG.cjs.map