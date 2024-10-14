"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQSCZCYCVcjs = require('./chunk-QSCZCYCV.cjs');


var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');

// src/database/outputTypeSchemas/TagArgsSchema.ts
var _zod = require('zod');
var TagArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkQSCZCYCVcjs.TagSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunk2MYBOFS7cjs.TagIncludeSchema).optional()
}).strict();
var TagArgsSchema_default = TagArgsSchema;




exports.TagArgsSchema = TagArgsSchema; exports.TagArgsSchema_default = TagArgsSchema_default;
//# sourceMappingURL=chunk-HXH4HEMZ.cjs.map