"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOKXRGJFCcjs = require('./chunk-OKXRGJFC.cjs');


var _chunkQHTXOROKcjs = require('./chunk-QHTXOROK.cjs');


var _chunkR2X3XUNHcjs = require('./chunk-R2X3XUNH.cjs');


var _chunk4GP2GD42cjs = require('./chunk-4GP2GD42.cjs');

// src/database/outputTypeSchemas/SettingsGroupByArgsSchema.ts
var _zod = require('zod');
var SettingsGroupByArgsSchema = _zod.z.object({
  where: _chunk4GP2GD42cjs.SettingsWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkQHTXOROKcjs.SettingsOrderByWithAggregationInputSchema.array(), _chunkQHTXOROKcjs.SettingsOrderByWithAggregationInputSchema]).optional(),
  by: _chunkR2X3XUNHcjs.SettingsScalarFieldEnumSchema.array(),
  having: _chunkOKXRGJFCcjs.SettingsScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var SettingsGroupByArgsSchema_default = SettingsGroupByArgsSchema;




exports.SettingsGroupByArgsSchema = SettingsGroupByArgsSchema; exports.SettingsGroupByArgsSchema_default = SettingsGroupByArgsSchema_default;
//# sourceMappingURL=chunk-CUOMBWAH.cjs.map