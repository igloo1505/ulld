"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');

// src/database/inputTypeSchemas/KanBanCardSelectSchema.ts
var _zod = require('zod');
var KanBanCardSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  listId: _zod.z.boolean().optional(),
  indexWithinList: _zod.z.boolean().optional(),
  label: _zod.z.boolean().optional(),
  details: _zod.z.boolean().optional(),
  KanBanList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.KanBanListArgsSchema)]).optional()
}).strict();
var KanBanCardSelectSchema_default = KanBanCardSelectSchema;




exports.KanBanCardSelectSchema = KanBanCardSelectSchema; exports.KanBanCardSelectSchema_default = KanBanCardSelectSchema_default;
//# sourceMappingURL=chunk-3M4YL7HY.cjs.map