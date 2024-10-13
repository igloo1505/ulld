"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQIOO7SSMcjs = require('./chunk-QIOO7SSM.cjs');

// src/database/outputTypeSchemas/SettingsAppendixCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var SettingsAppendixCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkQIOO7SSMcjs.SettingsAppendixCreateManyInputSchema, _chunkQIOO7SSMcjs.SettingsAppendixCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var SettingsAppendixCreateManyAndReturnArgsSchema_default = SettingsAppendixCreateManyAndReturnArgsSchema;




exports.SettingsAppendixCreateManyAndReturnArgsSchema = SettingsAppendixCreateManyAndReturnArgsSchema; exports.SettingsAppendixCreateManyAndReturnArgsSchema_default = SettingsAppendixCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-L2Y6BGOA.cjs.map