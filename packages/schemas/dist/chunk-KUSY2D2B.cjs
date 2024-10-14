"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4C3A4P56cjs = require('./chunk-4C3A4P56.cjs');


var _chunkE74AMCFGcjs = require('./chunk-E74AMCFG.cjs');


var _chunkJWOE7TWHcjs = require('./chunk-JWOE7TWH.cjs');

// src/database/outputTypeSchemas/SettingsAppendixAggregateArgsSchema.ts
var _zod = require('zod');
var SettingsAppendixAggregateArgsSchema = _zod.z.object({
  where: _chunkJWOE7TWHcjs.SettingsAppendixWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk4C3A4P56cjs.SettingsAppendixOrderByWithRelationInputSchema.array(), _chunk4C3A4P56cjs.SettingsAppendixOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkE74AMCFGcjs.SettingsAppendixWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var SettingsAppendixAggregateArgsSchema_default = SettingsAppendixAggregateArgsSchema;




exports.SettingsAppendixAggregateArgsSchema = SettingsAppendixAggregateArgsSchema; exports.SettingsAppendixAggregateArgsSchema_default = SettingsAppendixAggregateArgsSchema_default;
//# sourceMappingURL=chunk-KUSY2D2B.cjs.map