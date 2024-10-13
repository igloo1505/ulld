"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLRMV3YZBcjs = require('./chunk-LRMV3YZB.cjs');


var _chunkU6ZG24N7cjs = require('./chunk-U6ZG24N7.cjs');


var _chunkIJEY6TVVcjs = require('./chunk-IJEY6TVV.cjs');


var _chunkAS7EH6S2cjs = require('./chunk-AS7EH6S2.cjs');

// src/database/outputTypeSchemas/AutoSettingFindFirstArgsSchema.ts
var _zod = require('zod');
var AutoSettingSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  type: _zod.z.boolean().optional(),
  glob: _zod.z.boolean().optional(),
  value: _zod.z.boolean().optional()
}).strict();
var AutoSettingFindFirstArgsSchema = _zod.z.object({
  select: AutoSettingSelectSchema.optional(),
  where: _chunkAS7EH6S2cjs.AutoSettingWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkLRMV3YZBcjs.AutoSettingOrderByWithRelationInputSchema.array(), _chunkLRMV3YZBcjs.AutoSettingOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkIJEY6TVVcjs.AutoSettingWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkU6ZG24N7cjs.AutoSettingScalarFieldEnumSchema, _chunkU6ZG24N7cjs.AutoSettingScalarFieldEnumSchema.array()]).optional()
}).strict();
var AutoSettingFindFirstArgsSchema_default = AutoSettingFindFirstArgsSchema;





exports.AutoSettingSelectSchema = AutoSettingSelectSchema; exports.AutoSettingFindFirstArgsSchema = AutoSettingFindFirstArgsSchema; exports.AutoSettingFindFirstArgsSchema_default = AutoSettingFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-QPGG7XA3.cjs.map