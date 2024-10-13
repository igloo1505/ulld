"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSH5B3GDHcjs = require('./chunk-SH5B3GDH.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/SettingsAppendixOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var SettingsAppendixOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  updatedAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkSH5B3GDHcjs.SettingsAppendixOrderByRelevanceInputSchema).optional()
}).strict();
var SettingsAppendixOrderByWithRelationInputSchema_default = SettingsAppendixOrderByWithRelationInputSchema;




exports.SettingsAppendixOrderByWithRelationInputSchema = SettingsAppendixOrderByWithRelationInputSchema; exports.SettingsAppendixOrderByWithRelationInputSchema_default = SettingsAppendixOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-P2CBW73F.cjs.map