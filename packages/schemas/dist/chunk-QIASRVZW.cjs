"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUR3QVMNGcjs = require('./chunk-UR3QVMNG.cjs');


var _chunkFUUFJ3FQcjs = require('./chunk-FUUFJ3FQ.cjs');


var _chunkEZEQE6TLcjs = require('./chunk-EZEQE6TL.cjs');


var _chunkJROQYL3Mcjs = require('./chunk-JROQYL3M.cjs');

// src/database/outputTypeSchemas/SettingsAppendixGroupByArgsSchema.ts
var _zod = require('zod');
var SettingsAppendixGroupByArgsSchema = _zod.z.object({
  where: _chunkJROQYL3Mcjs.SettingsAppendixWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkUR3QVMNGcjs.SettingsAppendixOrderByWithAggregationInputSchema.array(), _chunkUR3QVMNGcjs.SettingsAppendixOrderByWithAggregationInputSchema]).optional(),
  by: _chunkEZEQE6TLcjs.SettingsAppendixScalarFieldEnumSchema.array(),
  having: _chunkFUUFJ3FQcjs.SettingsAppendixScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var SettingsAppendixGroupByArgsSchema_default = SettingsAppendixGroupByArgsSchema;




exports.SettingsAppendixGroupByArgsSchema = SettingsAppendixGroupByArgsSchema; exports.SettingsAppendixGroupByArgsSchema_default = SettingsAppendixGroupByArgsSchema_default;
//# sourceMappingURL=chunk-QIASRVZW.cjs.map