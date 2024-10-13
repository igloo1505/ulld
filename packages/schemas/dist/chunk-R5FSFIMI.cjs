"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBO4ZLZYCcjs = require('./chunk-BO4ZLZYC.cjs');


var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');

// src/database/outputTypeSchemas/TopicArgsSchema.ts
var _zod = require('zod');
var TopicArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkBO4ZLZYCcjs.TopicSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunk2TN6PYK3cjs.TopicIncludeSchema).optional()
}).strict();
var TopicArgsSchema_default = TopicArgsSchema;




exports.TopicArgsSchema = TopicArgsSchema; exports.TopicArgsSchema_default = TopicArgsSchema_default;
//# sourceMappingURL=chunk-R5FSFIMI.cjs.map