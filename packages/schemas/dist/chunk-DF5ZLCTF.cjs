"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4EUUXHPOcjs = require('./chunk-4EUUXHPO.cjs');

// src/database/outputTypeSchemas/QAPairCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var QAPairCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk4EUUXHPOcjs.QAPairCreateManyInputSchema, _chunk4EUUXHPOcjs.QAPairCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var QAPairCreateManyAndReturnArgsSchema_default = QAPairCreateManyAndReturnArgsSchema;




exports.QAPairCreateManyAndReturnArgsSchema = QAPairCreateManyAndReturnArgsSchema; exports.QAPairCreateManyAndReturnArgsSchema_default = QAPairCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-DF5ZLCTF.cjs.map