"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRSY4BTLOcjs = require('./chunk-RSY4BTLO.cjs');


var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');

// src/database/outputTypeSchemas/CitationsGroupArgsSchema.ts
var _zod = require('zod');
var CitationsGroupArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkRSY4BTLOcjs.CitationsGroupSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunk2MYBOFS7cjs.CitationsGroupIncludeSchema).optional()
}).strict();
var CitationsGroupArgsSchema_default = CitationsGroupArgsSchema;




exports.CitationsGroupArgsSchema = CitationsGroupArgsSchema; exports.CitationsGroupArgsSchema_default = CitationsGroupArgsSchema_default;
//# sourceMappingURL=chunk-3KZHXIGL.cjs.map