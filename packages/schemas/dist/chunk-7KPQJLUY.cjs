"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk52VF3HCXcjs = require('./chunk-52VF3HCX.cjs');


var _chunk3LY2RDZ6cjs = require('./chunk-3LY2RDZ6.cjs');


var _chunkU6ZG24N7cjs = require('./chunk-U6ZG24N7.cjs');


var _chunkAS7EH6S2cjs = require('./chunk-AS7EH6S2.cjs');

// src/database/outputTypeSchemas/AutoSettingGroupByArgsSchema.ts
var _zod = require('zod');
var AutoSettingGroupByArgsSchema = _zod.z.object({
  where: _chunkAS7EH6S2cjs.AutoSettingWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk52VF3HCXcjs.AutoSettingOrderByWithAggregationInputSchema.array(), _chunk52VF3HCXcjs.AutoSettingOrderByWithAggregationInputSchema]).optional(),
  by: _chunkU6ZG24N7cjs.AutoSettingScalarFieldEnumSchema.array(),
  having: _chunk3LY2RDZ6cjs.AutoSettingScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var AutoSettingGroupByArgsSchema_default = AutoSettingGroupByArgsSchema;




exports.AutoSettingGroupByArgsSchema = AutoSettingGroupByArgsSchema; exports.AutoSettingGroupByArgsSchema_default = AutoSettingGroupByArgsSchema_default;
//# sourceMappingURL=chunk-7KPQJLUY.cjs.map