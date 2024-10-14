"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQKGYSAQJcjs = require('./chunk-QKGYSAQJ.cjs');


var _chunkDO2BK5LOcjs = require('./chunk-DO2BK5LO.cjs');


var _chunkGBPFDDDRcjs = require('./chunk-GBPFDDDR.cjs');

// src/database/outputTypeSchemas/AutoSettingUpdateManyArgsSchema.ts
var _zod = require('zod');
var AutoSettingUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkQKGYSAQJcjs.AutoSettingUpdateManyMutationInputSchema, _chunkDO2BK5LOcjs.AutoSettingUncheckedUpdateManyInputSchema]),
  where: _chunkGBPFDDDRcjs.AutoSettingWhereInputSchema.optional()
}).strict();
var AutoSettingUpdateManyArgsSchema_default = AutoSettingUpdateManyArgsSchema;




exports.AutoSettingUpdateManyArgsSchema = AutoSettingUpdateManyArgsSchema; exports.AutoSettingUpdateManyArgsSchema_default = AutoSettingUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-OMNILG6J.cjs.map