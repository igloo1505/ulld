"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLRMV3YZBcjs = require('./chunk-LRMV3YZB.cjs');


var _chunkIJEY6TVVcjs = require('./chunk-IJEY6TVV.cjs');


var _chunkAS7EH6S2cjs = require('./chunk-AS7EH6S2.cjs');

// src/database/outputTypeSchemas/AutoSettingAggregateArgsSchema.ts
var _zod = require('zod');
var AutoSettingAggregateArgsSchema = _zod.z.object({
  where: _chunkAS7EH6S2cjs.AutoSettingWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkLRMV3YZBcjs.AutoSettingOrderByWithRelationInputSchema.array(), _chunkLRMV3YZBcjs.AutoSettingOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkIJEY6TVVcjs.AutoSettingWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var AutoSettingAggregateArgsSchema_default = AutoSettingAggregateArgsSchema;




exports.AutoSettingAggregateArgsSchema = AutoSettingAggregateArgsSchema; exports.AutoSettingAggregateArgsSchema_default = AutoSettingAggregateArgsSchema_default;
//# sourceMappingURL=chunk-NUBB4ZUU.cjs.map