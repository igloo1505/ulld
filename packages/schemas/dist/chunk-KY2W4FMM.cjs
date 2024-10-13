"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkD6EQVJUUcjs = require('./chunk-D6EQVJUU.cjs');


var _chunkDEILUSB5cjs = require('./chunk-DEILUSB5.cjs');


var _chunk627Z5I6Ccjs = require('./chunk-627Z5I6C.cjs');

// src/database/outputTypeSchemas/SettingsAggregateArgsSchema.ts
var _zod = require('zod');
var SettingsAggregateArgsSchema = _zod.z.object({
  where: _chunk627Z5I6Ccjs.SettingsWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkD6EQVJUUcjs.SettingsOrderByWithRelationInputSchema.array(), _chunkD6EQVJUUcjs.SettingsOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkDEILUSB5cjs.SettingsWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var SettingsAggregateArgsSchema_default = SettingsAggregateArgsSchema;




exports.SettingsAggregateArgsSchema = SettingsAggregateArgsSchema; exports.SettingsAggregateArgsSchema_default = SettingsAggregateArgsSchema_default;
//# sourceMappingURL=chunk-KY2W4FMM.cjs.map