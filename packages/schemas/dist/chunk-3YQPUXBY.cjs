"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBOA6A4OGcjs = require('./chunk-BOA6A4OG.cjs');


var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');

// src/database/outputTypeSchemas/TopicArgsSchema.ts
var _zod = require('zod');
var TopicArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkBOA6A4OGcjs.TopicSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunk2MYBOFS7cjs.TopicIncludeSchema).optional()
}).strict();
var TopicArgsSchema_default = TopicArgsSchema;




exports.TopicArgsSchema = TopicArgsSchema; exports.TopicArgsSchema_default = TopicArgsSchema_default;
//# sourceMappingURL=chunk-3YQPUXBY.cjs.map