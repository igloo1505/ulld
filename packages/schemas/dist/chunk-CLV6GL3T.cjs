"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7SRUJ3QMcjs = require('./chunk-7SRUJ3QM.cjs');

// src/database/outputTypeSchemas/FeatureRequestCreateManyArgsSchema.ts
var _zod = require('zod');
var FeatureRequestCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk7SRUJ3QMcjs.FeatureRequestCreateManyInputSchema, _chunk7SRUJ3QMcjs.FeatureRequestCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var FeatureRequestCreateManyArgsSchema_default = FeatureRequestCreateManyArgsSchema;




exports.FeatureRequestCreateManyArgsSchema = FeatureRequestCreateManyArgsSchema; exports.FeatureRequestCreateManyArgsSchema_default = FeatureRequestCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-CLV6GL3T.cjs.map