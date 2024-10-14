"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBVZZQZPXcjs = require('./chunk-BVZZQZPX.cjs');

// src/database/outputTypeSchemas/IpynbCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var IpynbCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkBVZZQZPXcjs.IpynbCreateManyInputSchema, _chunkBVZZQZPXcjs.IpynbCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var IpynbCreateManyAndReturnArgsSchema_default = IpynbCreateManyAndReturnArgsSchema;




exports.IpynbCreateManyAndReturnArgsSchema = IpynbCreateManyAndReturnArgsSchema; exports.IpynbCreateManyAndReturnArgsSchema_default = IpynbCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-2YVKNF2W.cjs.map