"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkPOADIYVIcjs = require('./chunk-POADIYVI.cjs');

// src/database/outputTypeSchemas/BusinessContactCreateManyArgsSchema.ts
var _zod = require('zod');
var BusinessContactCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkPOADIYVIcjs.BusinessContactCreateManyInputSchema, _chunkPOADIYVIcjs.BusinessContactCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var BusinessContactCreateManyArgsSchema_default = BusinessContactCreateManyArgsSchema;




exports.BusinessContactCreateManyArgsSchema = BusinessContactCreateManyArgsSchema; exports.BusinessContactCreateManyArgsSchema_default = BusinessContactCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-A4647OHE.cjs.map