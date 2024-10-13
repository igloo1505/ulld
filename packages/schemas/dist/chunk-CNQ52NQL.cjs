"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7OFDDD3Lcjs = require('./chunk-7OFDDD3L.cjs');

// src/database/inputTypeSchemas/KanBanListCreateManyKanbanInputEnvelopeSchema.ts
var _zod = require('zod');
var KanBanListCreateManyKanbanInputEnvelopeSchema = _zod.z.object({
  data: _zod.z.union([_zod.z.lazy(() => _chunk7OFDDD3Lcjs.KanBanListCreateManyKanbanInputSchema), _zod.z.lazy(() => _chunk7OFDDD3Lcjs.KanBanListCreateManyKanbanInputSchema).array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var KanBanListCreateManyKanbanInputEnvelopeSchema_default = KanBanListCreateManyKanbanInputEnvelopeSchema;




exports.KanBanListCreateManyKanbanInputEnvelopeSchema = KanBanListCreateManyKanbanInputEnvelopeSchema; exports.KanBanListCreateManyKanbanInputEnvelopeSchema_default = KanBanListCreateManyKanbanInputEnvelopeSchema_default;
//# sourceMappingURL=chunk-CNQ52NQL.cjs.map