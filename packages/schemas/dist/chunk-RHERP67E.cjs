"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXRKLOI4Zcjs = require('./chunk-XRKLOI4Z.cjs');


var _chunk4QFVNCKZcjs = require('./chunk-4QFVNCKZ.cjs');


var _chunkAVMAGJJTcjs = require('./chunk-AVMAGJJT.cjs');


var _chunkCLUNSAOCcjs = require('./chunk-CLUNSAOC.cjs');


var _chunk5S7O3Q5Xcjs = require('./chunk-5S7O3Q5X.cjs');

// src/database/outputTypeSchemas/FeatureRequestUpsertArgsSchema.ts
var _zod = require('zod');
var FeatureRequestSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  email: _zod.z.boolean().optional(),
  message: _zod.z.boolean().optional(),
  category: _zod.z.boolean().optional(),
  userBase: _zod.z.boolean().optional(),
  receivedOn: _zod.z.boolean().optional()
}).strict();
var FeatureRequestUpsertArgsSchema = _zod.z.object({
  select: FeatureRequestSelectSchema.optional(),
  where: _chunk5S7O3Q5Xcjs.FeatureRequestWhereUniqueInputSchema,
  create: _zod.z.union([_chunkXRKLOI4Zcjs.FeatureRequestCreateInputSchema, _chunk4QFVNCKZcjs.FeatureRequestUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkAVMAGJJTcjs.FeatureRequestUpdateInputSchema, _chunkCLUNSAOCcjs.FeatureRequestUncheckedUpdateInputSchema])
}).strict();
var FeatureRequestUpsertArgsSchema_default = FeatureRequestUpsertArgsSchema;





exports.FeatureRequestSelectSchema = FeatureRequestSelectSchema; exports.FeatureRequestUpsertArgsSchema = FeatureRequestUpsertArgsSchema; exports.FeatureRequestUpsertArgsSchema_default = FeatureRequestUpsertArgsSchema_default;
//# sourceMappingURL=chunk-RHERP67E.cjs.map