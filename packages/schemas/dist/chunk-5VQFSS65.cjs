"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkL64Q6TYXcjs = require('./chunk-L64Q6TYX.cjs');

// src/database/outputTypeSchemas/TopicCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var TopicCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkL64Q6TYXcjs.TopicCountOutputTypeSelectSchema).nullish()
}).strict();
var TopicCountOutputTypeArgsSchema_default = _chunkL64Q6TYXcjs.TopicCountOutputTypeSelectSchema;




exports.TopicCountOutputTypeArgsSchema = TopicCountOutputTypeArgsSchema; exports.TopicCountOutputTypeArgsSchema_default = TopicCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-5VQFSS65.cjs.map