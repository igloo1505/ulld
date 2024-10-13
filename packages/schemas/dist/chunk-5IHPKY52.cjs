"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEIVOWBK4cjs = require('./chunk-EIVOWBK4.cjs');


var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');

// src/database/outputTypeSchemas/CitationsGroupArgsSchema.ts
var _zod = require('zod');
var CitationsGroupArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkEIVOWBK4cjs.CitationsGroupSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunk2TN6PYK3cjs.CitationsGroupIncludeSchema).optional()
}).strict();
var CitationsGroupArgsSchema_default = CitationsGroupArgsSchema;




exports.CitationsGroupArgsSchema = CitationsGroupArgsSchema; exports.CitationsGroupArgsSchema_default = CitationsGroupArgsSchema_default;
//# sourceMappingURL=chunk-5IHPKY52.cjs.map