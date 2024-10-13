"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7DAO2ESYcjs = require('./chunk-7DAO2ESY.cjs');

// src/database/outputTypeSchemas/FeatureRequestCreateManyArgsSchema.ts
var _zod = require('zod');
var FeatureRequestCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk7DAO2ESYcjs.FeatureRequestCreateManyInputSchema, _chunk7DAO2ESYcjs.FeatureRequestCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var FeatureRequestCreateManyArgsSchema_default = FeatureRequestCreateManyArgsSchema;




exports.FeatureRequestCreateManyArgsSchema = FeatureRequestCreateManyArgsSchema; exports.FeatureRequestCreateManyArgsSchema_default = FeatureRequestCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-ZP55WV6E.cjs.map