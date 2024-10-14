"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7SRUJ3QMcjs = require('./chunk-7SRUJ3QM.cjs');

// src/database/outputTypeSchemas/FeatureRequestCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var FeatureRequestCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk7SRUJ3QMcjs.FeatureRequestCreateManyInputSchema, _chunk7SRUJ3QMcjs.FeatureRequestCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var FeatureRequestCreateManyAndReturnArgsSchema_default = FeatureRequestCreateManyAndReturnArgsSchema;




exports.FeatureRequestCreateManyAndReturnArgsSchema = FeatureRequestCreateManyAndReturnArgsSchema; exports.FeatureRequestCreateManyAndReturnArgsSchema_default = FeatureRequestCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-V7H4GSJL.cjs.map