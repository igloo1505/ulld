"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAVMAGJJTcjs = require('./chunk-AVMAGJJT.cjs');


var _chunkCLUNSAOCcjs = require('./chunk-CLUNSAOC.cjs');


var _chunk5S7O3Q5Xcjs = require('./chunk-5S7O3Q5X.cjs');

// src/database/outputTypeSchemas/FeatureRequestUpdateArgsSchema.ts
var _zod = require('zod');
var FeatureRequestSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  email: _zod.z.boolean().optional(),
  message: _zod.z.boolean().optional(),
  category: _zod.z.boolean().optional(),
  userBase: _zod.z.boolean().optional(),
  receivedOn: _zod.z.boolean().optional()
}).strict();
var FeatureRequestUpdateArgsSchema = _zod.z.object({
  select: FeatureRequestSelectSchema.optional(),
  data: _zod.z.union([_chunkAVMAGJJTcjs.FeatureRequestUpdateInputSchema, _chunkCLUNSAOCcjs.FeatureRequestUncheckedUpdateInputSchema]),
  where: _chunk5S7O3Q5Xcjs.FeatureRequestWhereUniqueInputSchema
}).strict();
var FeatureRequestUpdateArgsSchema_default = FeatureRequestUpdateArgsSchema;





exports.FeatureRequestSelectSchema = FeatureRequestSelectSchema; exports.FeatureRequestUpdateArgsSchema = FeatureRequestUpdateArgsSchema; exports.FeatureRequestUpdateArgsSchema_default = FeatureRequestUpdateArgsSchema_default;
//# sourceMappingURL=chunk-SQ2R23UT.cjs.map