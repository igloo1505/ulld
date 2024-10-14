"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFIBOVU3Zcjs = require('./chunk-FIBOVU3Z.cjs');


var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');

// src/database/outputTypeSchemas/RelatedValuesArgsSchema.ts
var _zod = require('zod');
var RelatedValuesArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkFIBOVU3Zcjs.RelatedValuesSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunk2MYBOFS7cjs.RelatedValuesIncludeSchema).optional()
}).strict();
var RelatedValuesArgsSchema_default = RelatedValuesArgsSchema;




exports.RelatedValuesArgsSchema = RelatedValuesArgsSchema; exports.RelatedValuesArgsSchema_default = RelatedValuesArgsSchema_default;
//# sourceMappingURL=chunk-65BDEDGS.cjs.map