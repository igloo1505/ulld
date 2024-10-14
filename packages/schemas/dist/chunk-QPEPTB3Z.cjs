"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBVZZQZPXcjs = require('./chunk-BVZZQZPX.cjs');

// src/database/outputTypeSchemas/IpynbCreateManyArgsSchema.ts
var _zod = require('zod');
var IpynbCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkBVZZQZPXcjs.IpynbCreateManyInputSchema, _chunkBVZZQZPXcjs.IpynbCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var IpynbCreateManyArgsSchema_default = IpynbCreateManyArgsSchema;




exports.IpynbCreateManyArgsSchema = IpynbCreateManyArgsSchema; exports.IpynbCreateManyArgsSchema_default = IpynbCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-QPEPTB3Z.cjs.map