"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAYZYY2Q4cjs = require('./chunk-AYZYY2Q4.cjs');


var _chunkHTA6M6OBcjs = require('./chunk-HTA6M6OB.cjs');


var _chunk627Z5I6Ccjs = require('./chunk-627Z5I6C.cjs');

// src/database/outputTypeSchemas/SettingsUpdateManyArgsSchema.ts
var _zod = require('zod');
var SettingsUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkAYZYY2Q4cjs.SettingsUpdateManyMutationInputSchema, _chunkHTA6M6OBcjs.SettingsUncheckedUpdateManyInputSchema]),
  where: _chunk627Z5I6Ccjs.SettingsWhereInputSchema.optional()
}).strict();
var SettingsUpdateManyArgsSchema_default = SettingsUpdateManyArgsSchema;




exports.SettingsUpdateManyArgsSchema = SettingsUpdateManyArgsSchema; exports.SettingsUpdateManyArgsSchema_default = SettingsUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-5EIYHKCJ.cjs.map