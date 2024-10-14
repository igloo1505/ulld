"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOQIFFF5Tcjs = require('./chunk-OQIFFF5T.cjs');

// src/database/outputTypeSchemas/QAPairCreateManyArgsSchema.ts
var _zod = require('zod');
var QAPairCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkOQIFFF5Tcjs.QAPairCreateManyInputSchema, _chunkOQIFFF5Tcjs.QAPairCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var QAPairCreateManyArgsSchema_default = QAPairCreateManyArgsSchema;




exports.QAPairCreateManyArgsSchema = QAPairCreateManyArgsSchema; exports.QAPairCreateManyArgsSchema_default = QAPairCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-LCI4UYGK.cjs.map