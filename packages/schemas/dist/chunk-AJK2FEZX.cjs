"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTOWZ6SWJcjs = require('./chunk-TOWZ6SWJ.cjs');


var _chunkHKOLODDPcjs = require('./chunk-HKOLODDP.cjs');


var _chunk4GP2GD42cjs = require('./chunk-4GP2GD42.cjs');

// src/database/outputTypeSchemas/SettingsAggregateArgsSchema.ts
var _zod = require('zod');
var SettingsAggregateArgsSchema = _zod.z.object({
  where: _chunk4GP2GD42cjs.SettingsWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkTOWZ6SWJcjs.SettingsOrderByWithRelationInputSchema.array(), _chunkTOWZ6SWJcjs.SettingsOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkHKOLODDPcjs.SettingsWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var SettingsAggregateArgsSchema_default = SettingsAggregateArgsSchema;




exports.SettingsAggregateArgsSchema = SettingsAggregateArgsSchema; exports.SettingsAggregateArgsSchema_default = SettingsAggregateArgsSchema_default;
//# sourceMappingURL=chunk-AJK2FEZX.cjs.map