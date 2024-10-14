"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkPUM37SNCcjs = require('./chunk-PUM37SNC.cjs');


var _chunkFQTZEOPRcjs = require('./chunk-FQTZEOPR.cjs');


var _chunk4QTDOGHVcjs = require('./chunk-4QTDOGHV.cjs');


var _chunkGBPFDDDRcjs = require('./chunk-GBPFDDDR.cjs');

// src/database/outputTypeSchemas/AutoSettingGroupByArgsSchema.ts
var _zod = require('zod');
var AutoSettingGroupByArgsSchema = _zod.z.object({
  where: _chunkGBPFDDDRcjs.AutoSettingWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkPUM37SNCcjs.AutoSettingOrderByWithAggregationInputSchema.array(), _chunkPUM37SNCcjs.AutoSettingOrderByWithAggregationInputSchema]).optional(),
  by: _chunk4QTDOGHVcjs.AutoSettingScalarFieldEnumSchema.array(),
  having: _chunkFQTZEOPRcjs.AutoSettingScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var AutoSettingGroupByArgsSchema_default = AutoSettingGroupByArgsSchema;




exports.AutoSettingGroupByArgsSchema = AutoSettingGroupByArgsSchema; exports.AutoSettingGroupByArgsSchema_default = AutoSettingGroupByArgsSchema_default;
//# sourceMappingURL=chunk-LY4RUMHJ.cjs.map