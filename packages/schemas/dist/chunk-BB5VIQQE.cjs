"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCCIMBC4Wcjs = require('./chunk-CCIMBC4W.cjs');

// src/database/outputTypeSchemas/IpynbCreateManyArgsSchema.ts
var _zod = require('zod');
var IpynbCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkCCIMBC4Wcjs.IpynbCreateManyInputSchema, _chunkCCIMBC4Wcjs.IpynbCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var IpynbCreateManyArgsSchema_default = IpynbCreateManyArgsSchema;




exports.IpynbCreateManyArgsSchema = IpynbCreateManyArgsSchema; exports.IpynbCreateManyArgsSchema_default = IpynbCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-BB5VIQQE.cjs.map