"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRSCZJAYJcjs = require('./chunk-RSCZJAYJ.cjs');

// src/database/outputTypeSchemas/KanbanCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var KanbanCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkRSCZJAYJcjs.KanbanCountOutputTypeSelectSchema).nullish()
}).strict();
var KanbanCountOutputTypeArgsSchema_default = _chunkRSCZJAYJcjs.KanbanCountOutputTypeSelectSchema;




exports.KanbanCountOutputTypeArgsSchema = KanbanCountOutputTypeArgsSchema; exports.KanbanCountOutputTypeArgsSchema_default = KanbanCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-2NESXYC2.cjs.map