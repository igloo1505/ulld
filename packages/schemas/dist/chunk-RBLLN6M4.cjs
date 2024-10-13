"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4EUUXHPOcjs = require('./chunk-4EUUXHPO.cjs');

// src/database/outputTypeSchemas/QAPairCreateManyArgsSchema.ts
var _zod = require('zod');
var QAPairCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk4EUUXHPOcjs.QAPairCreateManyInputSchema, _chunk4EUUXHPOcjs.QAPairCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var QAPairCreateManyArgsSchema_default = QAPairCreateManyArgsSchema;




exports.QAPairCreateManyArgsSchema = QAPairCreateManyArgsSchema; exports.QAPairCreateManyArgsSchema_default = QAPairCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-RBLLN6M4.cjs.map