"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkARRH2CWDcjs = require('./chunk-ARRH2CWD.cjs');

// src/database/outputTypeSchemas/RelatedValuesCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var RelatedValuesCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkARRH2CWDcjs.RelatedValuesCreateManyInputSchema, _chunkARRH2CWDcjs.RelatedValuesCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var RelatedValuesCreateManyAndReturnArgsSchema_default = RelatedValuesCreateManyAndReturnArgsSchema;




exports.RelatedValuesCreateManyAndReturnArgsSchema = RelatedValuesCreateManyAndReturnArgsSchema; exports.RelatedValuesCreateManyAndReturnArgsSchema_default = RelatedValuesCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-ZKQ2HKYC.cjs.map