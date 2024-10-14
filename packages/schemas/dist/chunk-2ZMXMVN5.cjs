"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkESPASEDWcjs = require('./chunk-ESPASEDW.cjs');


var _chunk36EWDBYLcjs = require('./chunk-36EWDBYL.cjs');


var _chunkHX5FCJZJcjs = require('./chunk-HX5FCJZJ.cjs');


var _chunkESEP5I2Scjs = require('./chunk-ESEP5I2S.cjs');

// src/database/outputTypeSchemas/FeatureRequestFindFirstArgsSchema.ts
var _zod = require('zod');
var FeatureRequestSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  email: _zod.z.boolean().optional(),
  message: _zod.z.boolean().optional(),
  category: _zod.z.boolean().optional(),
  userBase: _zod.z.boolean().optional(),
  receivedOn: _zod.z.boolean().optional()
}).strict();
var FeatureRequestFindFirstArgsSchema = _zod.z.object({
  select: FeatureRequestSelectSchema.optional(),
  where: _chunkESEP5I2Scjs.FeatureRequestWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkESPASEDWcjs.FeatureRequestOrderByWithRelationInputSchema.array(), _chunkESPASEDWcjs.FeatureRequestOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkHX5FCJZJcjs.FeatureRequestWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunk36EWDBYLcjs.FeatureRequestScalarFieldEnumSchema, _chunk36EWDBYLcjs.FeatureRequestScalarFieldEnumSchema.array()]).optional()
}).strict();
var FeatureRequestFindFirstArgsSchema_default = FeatureRequestFindFirstArgsSchema;





exports.FeatureRequestSelectSchema = FeatureRequestSelectSchema; exports.FeatureRequestFindFirstArgsSchema = FeatureRequestFindFirstArgsSchema; exports.FeatureRequestFindFirstArgsSchema_default = FeatureRequestFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-2ZMXMVN5.cjs.map