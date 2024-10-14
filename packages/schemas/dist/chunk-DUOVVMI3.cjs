"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFB7TQAI7cjs = require('./chunk-FB7TQAI7.cjs');


var _chunk4QTDOGHVcjs = require('./chunk-4QTDOGHV.cjs');


var _chunkU6ULFZA2cjs = require('./chunk-U6ULFZA2.cjs');


var _chunkGBPFDDDRcjs = require('./chunk-GBPFDDDR.cjs');

// src/database/outputTypeSchemas/AutoSettingFindManyArgsSchema.ts
var _zod = require('zod');
var AutoSettingSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  type: _zod.z.boolean().optional(),
  glob: _zod.z.boolean().optional(),
  value: _zod.z.boolean().optional()
}).strict();
var AutoSettingFindManyArgsSchema = _zod.z.object({
  select: AutoSettingSelectSchema.optional(),
  where: _chunkGBPFDDDRcjs.AutoSettingWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkFB7TQAI7cjs.AutoSettingOrderByWithRelationInputSchema.array(), _chunkFB7TQAI7cjs.AutoSettingOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkU6ULFZA2cjs.AutoSettingWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunk4QTDOGHVcjs.AutoSettingScalarFieldEnumSchema, _chunk4QTDOGHVcjs.AutoSettingScalarFieldEnumSchema.array()]).optional()
}).strict();
var AutoSettingFindManyArgsSchema_default = AutoSettingFindManyArgsSchema;





exports.AutoSettingSelectSchema = AutoSettingSelectSchema; exports.AutoSettingFindManyArgsSchema = AutoSettingFindManyArgsSchema; exports.AutoSettingFindManyArgsSchema_default = AutoSettingFindManyArgsSchema_default;
//# sourceMappingURL=chunk-DUOVVMI3.cjs.map