"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGULLFZ6Jcjs = require('./chunk-GULLFZ6J.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/SettingsAppendixOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var SettingsAppendixOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  updatedAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkGULLFZ6Jcjs.SettingsAppendixOrderByRelevanceInputSchema).optional()
}).strict();
var SettingsAppendixOrderByWithRelationInputSchema_default = SettingsAppendixOrderByWithRelationInputSchema;




exports.SettingsAppendixOrderByWithRelationInputSchema = SettingsAppendixOrderByWithRelationInputSchema; exports.SettingsAppendixOrderByWithRelationInputSchema_default = SettingsAppendixOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-4C3A4P56.cjs.map