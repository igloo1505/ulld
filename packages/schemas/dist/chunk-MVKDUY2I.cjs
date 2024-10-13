"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTH3TYZ5Vcjs = require('./chunk-TH3TYZ5V.cjs');

// src/database/outputTypeSchemas/SettingsCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var SettingsCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkTH3TYZ5Vcjs.SettingsCreateManyInputSchema, _chunkTH3TYZ5Vcjs.SettingsCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var SettingsCreateManyAndReturnArgsSchema_default = SettingsCreateManyAndReturnArgsSchema;




exports.SettingsCreateManyAndReturnArgsSchema = SettingsCreateManyAndReturnArgsSchema; exports.SettingsCreateManyAndReturnArgsSchema_default = SettingsCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-MVKDUY2I.cjs.map