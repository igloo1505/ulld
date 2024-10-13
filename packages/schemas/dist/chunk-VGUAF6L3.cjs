"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZD64XF6Mcjs = require('./chunk-ZD64XF6M.cjs');

// src/database/outputTypeSchemas/KanbanCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var KanbanCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkZD64XF6Mcjs.KanbanCountOutputTypeSelectSchema).nullish()
}).strict();
var KanbanCountOutputTypeArgsSchema_default = _chunkZD64XF6Mcjs.KanbanCountOutputTypeSelectSchema;




exports.KanbanCountOutputTypeArgsSchema = KanbanCountOutputTypeArgsSchema; exports.KanbanCountOutputTypeArgsSchema_default = KanbanCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-VGUAF6L3.cjs.map