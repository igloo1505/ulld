"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQQZKNDAYcjs = require('./chunk-QQZKNDAY.cjs');


var _chunk7R7APSEVcjs = require('./chunk-7R7APSEV.cjs');

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
  data: _zod.z.union([_chunkQQZKNDAYcjs.FeatureRequestCreateInputSchema, _chunk7R7APSEVcjs.FeatureRequestUncheckedCreateInputSchema])
}).strict();
var FeatureRequestCreateArgsSchema_default = FeatureRequestCreateArgsSchema;





exports.FeatureRequestSelectSchema = FeatureRequestSelectSchema; exports.FeatureRequestCreateArgsSchema = FeatureRequestCreateArgsSchema; exports.FeatureRequestCreateArgsSchema_default = FeatureRequestCreateArgsSchema_default;
//# sourceMappingURL=chunk-HXSU4QQM.cjs.map