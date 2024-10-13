"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBAEQ42QFcjs = require('./chunk-BAEQ42QF.cjs');


var _chunkUUVYJAV3cjs = require('./chunk-UUVYJAV3.cjs');


var _chunkAS7EH6S2cjs = require('./chunk-AS7EH6S2.cjs');

// src/database/outputTypeSchemas/AutoSettingUpdateManyArgsSchema.ts
var _zod = require('zod');
var AutoSettingUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkBAEQ42QFcjs.AutoSettingUpdateManyMutationInputSchema, _chunkUUVYJAV3cjs.AutoSettingUncheckedUpdateManyInputSchema]),
  where: _chunkAS7EH6S2cjs.AutoSettingWhereInputSchema.optional()
}).strict();
var AutoSettingUpdateManyArgsSchema_default = AutoSettingUpdateManyArgsSchema;




exports.AutoSettingUpdateManyArgsSchema = AutoSettingUpdateManyArgsSchema; exports.AutoSettingUpdateManyArgsSchema_default = AutoSettingUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-OFCXZANF.cjs.map