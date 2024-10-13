"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5IKXYMELcjs = require('./chunk-5IKXYMEL.cjs');


var _chunkVPO7UXUVcjs = require('./chunk-VPO7UXUV.cjs');


var _chunkA5IQ72ZBcjs = require('./chunk-A5IQ72ZB.cjs');

// src/database/outputTypeSchemas/FeatureRequestUpdateManyArgsSchema.ts
var _zod = require('zod');
var FeatureRequestUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk5IKXYMELcjs.FeatureRequestUpdateManyMutationInputSchema, _chunkVPO7UXUVcjs.FeatureRequestUncheckedUpdateManyInputSchema]),
  where: _chunkA5IQ72ZBcjs.FeatureRequestWhereInputSchema.optional()
}).strict();
var FeatureRequestUpdateManyArgsSchema_default = FeatureRequestUpdateManyArgsSchema;




exports.FeatureRequestUpdateManyArgsSchema = FeatureRequestUpdateManyArgsSchema; exports.FeatureRequestUpdateManyArgsSchema_default = FeatureRequestUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-6BZYUNOU.cjs.map