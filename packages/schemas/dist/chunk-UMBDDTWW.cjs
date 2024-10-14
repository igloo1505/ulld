"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkU3R3Z5OScjs = require('./chunk-U3R3Z5OS.cjs');

// src/database/outputTypeSchemas/SettingsCreateManyArgsSchema.ts
var _zod = require('zod');
var SettingsCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkU3R3Z5OScjs.SettingsCreateManyInputSchema, _chunkU3R3Z5OScjs.SettingsCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var SettingsCreateManyArgsSchema_default = SettingsCreateManyArgsSchema;




exports.SettingsCreateManyArgsSchema = SettingsCreateManyArgsSchema; exports.SettingsCreateManyArgsSchema_default = SettingsCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-UMBDDTWW.cjs.map