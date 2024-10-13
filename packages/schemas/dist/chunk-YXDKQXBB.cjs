"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkPJMG4JWScjs = require('./chunk-PJMG4JWS.cjs');


var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');

// src/database/outputTypeSchemas/IpynbArgsSchema.ts
var _zod = require('zod');
var IpynbArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkPJMG4JWScjs.IpynbSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunk2TN6PYK3cjs.IpynbIncludeSchema).optional()
}).strict();
var IpynbArgsSchema_default = IpynbArgsSchema;




exports.IpynbArgsSchema = IpynbArgsSchema; exports.IpynbArgsSchema_default = IpynbArgsSchema_default;
//# sourceMappingURL=chunk-YXDKQXBB.cjs.map