"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXRKLOI4Zcjs = require('./chunk-XRKLOI4Z.cjs');


var _chunk4QFVNCKZcjs = require('./chunk-4QFVNCKZ.cjs');

// src/database/outputTypeSchemas/FeatureRequestCreateArgsSchema.ts
var _zod = require('zod');
var FeatureRequestSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  email: _zod.z.boolean().optional(),
  message: _zod.z.boolean().optional(),
  category: _zod.z.boolean().optional(),
  userBase: _zod.z.boolean().optional(),
  receivedOn: _zod.z.boolean().optional()
}).strict();
var FeatureRequestCreateArgsSchema = _zod.z.object({
  select: FeatureRequestSelectSchema.optional(),
  data: _zod.z.union([_chunkXRKLOI4Zcjs.FeatureRequestCreateInputSchema, _chunk4QFVNCKZcjs.FeatureRequestUncheckedCreateInputSchema])
}).strict();
var FeatureRequestCreateArgsSchema_default = FeatureRequestCreateArgsSchema;





exports.FeatureRequestSelectSchema = FeatureRequestSelectSchema; exports.FeatureRequestCreateArgsSchema = FeatureRequestCreateArgsSchema; exports.FeatureRequestCreateArgsSchema_default = FeatureRequestCreateArgsSchema_default;
//# sourceMappingURL=chunk-C5VDNSVP.cjs.map