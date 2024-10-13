"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQIOO7SSMcjs = require('./chunk-QIOO7SSM.cjs');

// src/database/outputTypeSchemas/SettingsAppendixCreateManyArgsSchema.ts
var _zod = require('zod');
var SettingsAppendixCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkQIOO7SSMcjs.SettingsAppendixCreateManyInputSchema, _chunkQIOO7SSMcjs.SettingsAppendixCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var SettingsAppendixCreateManyArgsSchema_default = SettingsAppendixCreateManyArgsSchema;




exports.SettingsAppendixCreateManyArgsSchema = SettingsAppendixCreateManyArgsSchema; exports.SettingsAppendixCreateManyArgsSchema_default = SettingsAppendixCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-BE3TAUTO.cjs.map