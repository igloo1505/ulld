"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6P5VUWF7cjs = require('./chunk-6P5VUWF7.cjs');

// src/database/outputTypeSchemas/SettingsAppendixCreateManyArgsSchema.ts
var _zod = require('zod');
var SettingsAppendixCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk6P5VUWF7cjs.SettingsAppendixCreateManyInputSchema, _chunk6P5VUWF7cjs.SettingsAppendixCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var SettingsAppendixCreateManyArgsSchema_default = SettingsAppendixCreateManyArgsSchema;




exports.SettingsAppendixCreateManyArgsSchema = SettingsAppendixCreateManyArgsSchema; exports.SettingsAppendixCreateManyArgsSchema_default = SettingsAppendixCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-B5WK3TNL.cjs.map