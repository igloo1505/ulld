"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWHYFPD3Ccjs = require('./chunk-WHYFPD3C.cjs');


var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');

// src/database/outputTypeSchemas/IpynbArgsSchema.ts
var _zod = require('zod');
var IpynbArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkWHYFPD3Ccjs.IpynbSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunk2MYBOFS7cjs.IpynbIncludeSchema).optional()
}).strict();
var IpynbArgsSchema_default = IpynbArgsSchema;




exports.IpynbArgsSchema = IpynbArgsSchema; exports.IpynbArgsSchema_default = IpynbArgsSchema_default;
//# sourceMappingURL=chunk-TC52TWWZ.cjs.map