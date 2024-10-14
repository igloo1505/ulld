"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAOPJSCDKcjs = require('./chunk-AOPJSCDK.cjs');


var _chunkPW2FNJDBcjs = require('./chunk-PW2FNJDB.cjs');


var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');

// src/database/outputTypeSchemas/TimePeriodUpdateManyArgsSchema.ts
var _zod = require('zod');
var TimePeriodUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkPW2FNJDBcjs.TimePeriodUpdateManyMutationInputSchema, _chunkAOPJSCDKcjs.TimePeriodUncheckedUpdateManyInputSchema]),
  where: _chunkZGGHUMG7cjs.TimePeriodWhereInputSchema.optional()
}).strict();
var TimePeriodUpdateManyArgsSchema_default = TimePeriodUpdateManyArgsSchema;




exports.TimePeriodUpdateManyArgsSchema = TimePeriodUpdateManyArgsSchema; exports.TimePeriodUpdateManyArgsSchema_default = TimePeriodUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-IT3QIIOA.cjs.map