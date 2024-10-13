"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7DAO2ESYcjs = require('./chunk-7DAO2ESY.cjs');

// src/database/outputTypeSchemas/FeatureRequestCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var FeatureRequestCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk7DAO2ESYcjs.FeatureRequestCreateManyInputSchema, _chunk7DAO2ESYcjs.FeatureRequestCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var FeatureRequestCreateManyAndReturnArgsSchema_default = FeatureRequestCreateManyAndReturnArgsSchema;




exports.FeatureRequestCreateManyAndReturnArgsSchema = FeatureRequestCreateManyAndReturnArgsSchema; exports.FeatureRequestCreateManyAndReturnArgsSchema_default = FeatureRequestCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-5WWPAPZI.cjs.map