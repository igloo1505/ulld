"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkPOADIYVIcjs = require('./chunk-POADIYVI.cjs');

// src/database/outputTypeSchemas/BusinessContactCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var BusinessContactCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkPOADIYVIcjs.BusinessContactCreateManyInputSchema, _chunkPOADIYVIcjs.BusinessContactCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var BusinessContactCreateManyAndReturnArgsSchema_default = BusinessContactCreateManyAndReturnArgsSchema;




exports.BusinessContactCreateManyAndReturnArgsSchema = BusinessContactCreateManyAndReturnArgsSchema; exports.BusinessContactCreateManyAndReturnArgsSchema_default = BusinessContactCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-QFFXF6SM.cjs.map