"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTH3TYZ5Vcjs = require('./chunk-TH3TYZ5V.cjs');

// src/database/outputTypeSchemas/SettingsCreateManyArgsSchema.ts
var _zod = require('zod');
var SettingsCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkTH3TYZ5Vcjs.SettingsCreateManyInputSchema, _chunkTH3TYZ5Vcjs.SettingsCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var SettingsCreateManyArgsSchema_default = SettingsCreateManyArgsSchema;




exports.SettingsCreateManyArgsSchema = SettingsCreateManyArgsSchema; exports.SettingsCreateManyArgsSchema_default = SettingsCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-ZEW3DX7U.cjs.map