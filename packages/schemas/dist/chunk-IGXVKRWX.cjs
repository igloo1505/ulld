"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkU3R3Z5OScjs = require('./chunk-U3R3Z5OS.cjs');

// src/database/outputTypeSchemas/SettingsCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var SettingsCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkU3R3Z5OScjs.SettingsCreateManyInputSchema, _chunkU3R3Z5OScjs.SettingsCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var SettingsCreateManyAndReturnArgsSchema_default = SettingsCreateManyAndReturnArgsSchema;




exports.SettingsCreateManyAndReturnArgsSchema = SettingsCreateManyAndReturnArgsSchema; exports.SettingsCreateManyAndReturnArgsSchema_default = SettingsCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-IGXVKRWX.cjs.map