"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYJ2LGU35cjs = require('./chunk-YJ2LGU35.cjs');


var _chunkMWW6FNG3cjs = require('./chunk-MWW6FNG3.cjs');

// src/database/outputTypeSchemas/ServingArgsSchema.ts
var _zod = require('zod');
var ServingArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkYJ2LGU35cjs.ServingSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunkMWW6FNG3cjs.ServingIncludeSchema).optional()
}).strict();
var ServingArgsSchema_default = ServingArgsSchema;




exports.ServingArgsSchema = ServingArgsSchema; exports.ServingArgsSchema_default = ServingArgsSchema_default;
//# sourceMappingURL=chunk-LL7RRX3V.cjs.map