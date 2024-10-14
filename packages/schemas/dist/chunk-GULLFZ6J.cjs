"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2TUVYDDHcjs = require('./chunk-2TUVYDDH.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/SettingsAppendixOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var SettingsAppendixOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunk2TUVYDDHcjs.SettingsAppendixOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunk2TUVYDDHcjs.SettingsAppendixOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var SettingsAppendixOrderByRelevanceInputSchema_default = SettingsAppendixOrderByRelevanceInputSchema;




exports.SettingsAppendixOrderByRelevanceInputSchema = SettingsAppendixOrderByRelevanceInputSchema; exports.SettingsAppendixOrderByRelevanceInputSchema_default = SettingsAppendixOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-GULLFZ6J.cjs.map