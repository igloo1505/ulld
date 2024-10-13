"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkS45KGUFHcjs = require('./chunk-S45KGUFH.cjs');


var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');

// src/database/outputTypeSchemas/RelatedValuesArgsSchema.ts
var _zod = require('zod');
var RelatedValuesArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkS45KGUFHcjs.RelatedValuesSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunk2TN6PYK3cjs.RelatedValuesIncludeSchema).optional()
}).strict();
var RelatedValuesArgsSchema_default = RelatedValuesArgsSchema;




exports.RelatedValuesArgsSchema = RelatedValuesArgsSchema; exports.RelatedValuesArgsSchema_default = RelatedValuesArgsSchema_default;
//# sourceMappingURL=chunk-3WODFIQL.cjs.map