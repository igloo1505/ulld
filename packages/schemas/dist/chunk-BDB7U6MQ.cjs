"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHGGX6PVOcjs = require('./chunk-HGGX6PVO.cjs');

// src/database/outputTypeSchemas/RelatedValuesCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var RelatedValuesCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkHGGX6PVOcjs.RelatedValuesCountOutputTypeSelectSchema).nullish()
}).strict();
var RelatedValuesCountOutputTypeArgsSchema_default = _chunkHGGX6PVOcjs.RelatedValuesCountOutputTypeSelectSchema;




exports.RelatedValuesCountOutputTypeArgsSchema = RelatedValuesCountOutputTypeArgsSchema; exports.RelatedValuesCountOutputTypeArgsSchema_default = RelatedValuesCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-BDB7U6MQ.cjs.map