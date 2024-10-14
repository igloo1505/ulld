"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFB7TQAI7cjs = require('./chunk-FB7TQAI7.cjs');


var _chunkU6ULFZA2cjs = require('./chunk-U6ULFZA2.cjs');


var _chunkGBPFDDDRcjs = require('./chunk-GBPFDDDR.cjs');

// src/database/outputTypeSchemas/AutoSettingAggregateArgsSchema.ts
var _zod = require('zod');
var AutoSettingAggregateArgsSchema = _zod.z.object({
  where: _chunkGBPFDDDRcjs.AutoSettingWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkFB7TQAI7cjs.AutoSettingOrderByWithRelationInputSchema.array(), _chunkFB7TQAI7cjs.AutoSettingOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkU6ULFZA2cjs.AutoSettingWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var AutoSettingAggregateArgsSchema_default = AutoSettingAggregateArgsSchema;




exports.AutoSettingAggregateArgsSchema = AutoSettingAggregateArgsSchema; exports.AutoSettingAggregateArgsSchema_default = AutoSettingAggregateArgsSchema_default;
//# sourceMappingURL=chunk-3DY62QZ5.cjs.map