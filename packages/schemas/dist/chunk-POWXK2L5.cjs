"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6P5VUWF7cjs = require('./chunk-6P5VUWF7.cjs');

// src/database/outputTypeSchemas/SettingsAppendixCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var SettingsAppendixCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk6P5VUWF7cjs.SettingsAppendixCreateManyInputSchema, _chunk6P5VUWF7cjs.SettingsAppendixCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var SettingsAppendixCreateManyAndReturnArgsSchema_default = SettingsAppendixCreateManyAndReturnArgsSchema;




exports.SettingsAppendixCreateManyAndReturnArgsSchema = SettingsAppendixCreateManyAndReturnArgsSchema; exports.SettingsAppendixCreateManyAndReturnArgsSchema_default = SettingsAppendixCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-POWXK2L5.cjs.map