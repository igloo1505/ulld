"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4JEB2L6Ucjs = require('./chunk-4JEB2L6U.cjs');

// src/database/inputTypeSchemas/KanBanListCreateManyKanbanInputEnvelopeSchema.ts
var _zod = require('zod');
var KanBanListCreateManyKanbanInputEnvelopeSchema = _zod.z.object({
  data: _zod.z.union([_zod.z.lazy(() => _chunk4JEB2L6Ucjs.KanBanListCreateManyKanbanInputSchema), _zod.z.lazy(() => _chunk4JEB2L6Ucjs.KanBanListCreateManyKanbanInputSchema).array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var KanBanListCreateManyKanbanInputEnvelopeSchema_default = KanBanListCreateManyKanbanInputEnvelopeSchema;




exports.KanBanListCreateManyKanbanInputEnvelopeSchema = KanBanListCreateManyKanbanInputEnvelopeSchema; exports.KanBanListCreateManyKanbanInputEnvelopeSchema_default = KanBanListCreateManyKanbanInputEnvelopeSchema_default;
//# sourceMappingURL=chunk-ZKJQNPLO.cjs.map