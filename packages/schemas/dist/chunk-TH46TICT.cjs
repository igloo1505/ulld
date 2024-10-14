"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkISYJBRIGcjs = require('./chunk-ISYJBRIG.cjs');


var _chunkTEXYU5KOcjs = require('./chunk-TEXYU5KO.cjs');


var _chunk4GP2GD42cjs = require('./chunk-4GP2GD42.cjs');

// src/database/outputTypeSchemas/SettingsUpdateManyArgsSchema.ts
var _zod = require('zod');
var SettingsUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkISYJBRIGcjs.SettingsUpdateManyMutationInputSchema, _chunkTEXYU5KOcjs.SettingsUncheckedUpdateManyInputSchema]),
  where: _chunk4GP2GD42cjs.SettingsWhereInputSchema.optional()
}).strict();
var SettingsUpdateManyArgsSchema_default = SettingsUpdateManyArgsSchema;




exports.SettingsUpdateManyArgsSchema = SettingsUpdateManyArgsSchema; exports.SettingsUpdateManyArgsSchema_default = SettingsUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-TH46TICT.cjs.map