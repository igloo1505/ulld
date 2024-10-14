"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkBDB7U6MQcjs = require('./chunk-BDB7U6MQ.cjs');

// src/database/inputTypeSchemas/RelatedValuesSelectSchema.ts
var _zod = require('zod');
var RelatedValuesSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  input: _zod.z.boolean().optional(),
  output: _zod.z.boolean().optional(),
  equationId: _zod.z.boolean().optional(),
  equations: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.EquationFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkBDB7U6MQcjs.RelatedValuesCountOutputTypeArgsSchema)]).optional()
}).strict();
var RelatedValuesSelectSchema_default = RelatedValuesSelectSchema;




exports.RelatedValuesSelectSchema = RelatedValuesSelectSchema; exports.RelatedValuesSelectSchema_default = RelatedValuesSelectSchema_default;
//# sourceMappingURL=chunk-FIBOVU3Z.cjs.map