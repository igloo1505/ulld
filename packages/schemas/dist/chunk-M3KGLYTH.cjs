"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4MGQF4LDcjs = require('./chunk-4MGQF4LD.cjs');

// src/database/outputTypeSchemas/TopicCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var TopicCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunk4MGQF4LDcjs.TopicCountOutputTypeSelectSchema).nullish()
}).strict();
var TopicCountOutputTypeArgsSchema_default = _chunk4MGQF4LDcjs.TopicCountOutputTypeSelectSchema;




exports.TopicCountOutputTypeArgsSchema = TopicCountOutputTypeArgsSchema; exports.TopicCountOutputTypeArgsSchema_default = TopicCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-M3KGLYTH.cjs.map