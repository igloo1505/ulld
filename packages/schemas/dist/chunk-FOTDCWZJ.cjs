"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkP2CBW73Fcjs = require('./chunk-P2CBW73F.cjs');


var _chunkOXACKCMTcjs = require('./chunk-OXACKCMT.cjs');


var _chunkJROQYL3Mcjs = require('./chunk-JROQYL3M.cjs');

// src/database/outputTypeSchemas/SettingsAppendixAggregateArgsSchema.ts
var _zod = require('zod');
var SettingsAppendixAggregateArgsSchema = _zod.z.object({
  where: _chunkJROQYL3Mcjs.SettingsAppendixWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkP2CBW73Fcjs.SettingsAppendixOrderByWithRelationInputSchema.array(), _chunkP2CBW73Fcjs.SettingsAppendixOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkOXACKCMTcjs.SettingsAppendixWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var SettingsAppendixAggregateArgsSchema_default = SettingsAppendixAggregateArgsSchema;




exports.SettingsAppendixAggregateArgsSchema = SettingsAppendixAggregateArgsSchema; exports.SettingsAppendixAggregateArgsSchema_default = SettingsAppendixAggregateArgsSchema_default;
//# sourceMappingURL=chunk-FOTDCWZJ.cjs.map