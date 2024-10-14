"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkARRH2CWDcjs = require('./chunk-ARRH2CWD.cjs');

// src/database/outputTypeSchemas/RelatedValuesCreateManyArgsSchema.ts
var _zod = require('zod');
var RelatedValuesCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkARRH2CWDcjs.RelatedValuesCreateManyInputSchema, _chunkARRH2CWDcjs.RelatedValuesCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var RelatedValuesCreateManyArgsSchema_default = RelatedValuesCreateManyArgsSchema;




exports.RelatedValuesCreateManyArgsSchema = RelatedValuesCreateManyArgsSchema; exports.RelatedValuesCreateManyArgsSchema_default = RelatedValuesCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-ZI332FDP.cjs.map