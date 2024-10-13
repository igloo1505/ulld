"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5MISDIR6cjs = require('./chunk-5MISDIR6.cjs');


var _chunkN2ITDNOTcjs = require('./chunk-N2ITDNOT.cjs');

// src/database/outputTypeSchemas/ServingArgsSchema.ts
var _zod = require('zod');
var ServingArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunk5MISDIR6cjs.ServingSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunkN2ITDNOTcjs.ServingIncludeSchema).optional()
}).strict();
var ServingArgsSchema_default = ServingArgsSchema;




exports.ServingArgsSchema = ServingArgsSchema; exports.ServingArgsSchema_default = ServingArgsSchema_default;
//# sourceMappingURL=chunk-7XZYWU3N.cjs.map