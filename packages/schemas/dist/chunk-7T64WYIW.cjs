"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRCWUS33Ucjs = require('./chunk-RCWUS33U.cjs');

// src/database/outputTypeSchemas/AutoSettingCreateManyArgsSchema.ts
var _zod = require('zod');
var AutoSettingCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkRCWUS33Ucjs.AutoSettingCreateManyInputSchema, _chunkRCWUS33Ucjs.AutoSettingCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var AutoSettingCreateManyArgsSchema_default = AutoSettingCreateManyArgsSchema;




exports.AutoSettingCreateManyArgsSchema = AutoSettingCreateManyArgsSchema; exports.AutoSettingCreateManyArgsSchema_default = AutoSettingCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-7T64WYIW.cjs.map