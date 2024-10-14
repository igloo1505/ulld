"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLDUYD37Tcjs = require('./chunk-LDUYD37T.cjs');


var _chunk6UZKLIGPcjs = require('./chunk-6UZKLIGP.cjs');


var _chunkESEP5I2Scjs = require('./chunk-ESEP5I2S.cjs');

// src/database/outputTypeSchemas/FeatureRequestUpdateManyArgsSchema.ts
var _zod = require('zod');
var FeatureRequestUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkLDUYD37Tcjs.FeatureRequestUpdateManyMutationInputSchema, _chunk6UZKLIGPcjs.FeatureRequestUncheckedUpdateManyInputSchema]),
  where: _chunkESEP5I2Scjs.FeatureRequestWhereInputSchema.optional()
}).strict();
var FeatureRequestUpdateManyArgsSchema_default = FeatureRequestUpdateManyArgsSchema;




exports.FeatureRequestUpdateManyArgsSchema = FeatureRequestUpdateManyArgsSchema; exports.FeatureRequestUpdateManyArgsSchema_default = FeatureRequestUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-T6WG4PQH.cjs.map