"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOQIFFF5Tcjs = require('./chunk-OQIFFF5T.cjs');

// src/database/outputTypeSchemas/QAPairCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var QAPairCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkOQIFFF5Tcjs.QAPairCreateManyInputSchema, _chunkOQIFFF5Tcjs.QAPairCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var QAPairCreateManyAndReturnArgsSchema_default = QAPairCreateManyAndReturnArgsSchema;




exports.QAPairCreateManyAndReturnArgsSchema = QAPairCreateManyAndReturnArgsSchema; exports.QAPairCreateManyAndReturnArgsSchema_default = QAPairCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-N6W56SZY.cjs.map