"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZXI3CXPCcjs = require('./chunk-ZXI3CXPC.cjs');


var _chunkN65HZY3Icjs = require('./chunk-N65HZY3I.cjs');



var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');

// src/database/outputTypeSchemas/KanBanCardCreateArgsSchema.ts
var _zod = require('zod');
var KanBanCardSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  listId: _zod.z.boolean().optional(),
  indexWithinList: _zod.z.boolean().optional(),
  label: _zod.z.boolean().optional(),
  details: _zod.z.boolean().optional(),
  KanBanList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.KanBanListArgsSchema)]).optional()
}).strict();
var KanBanCardCreateArgsSchema = _zod.z.object({
  select: KanBanCardSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.KanBanCardIncludeSchema.optional(),
  data: _zod.z.union([_chunkZXI3CXPCcjs.KanBanCardCreateInputSchema, _chunkN65HZY3Icjs.KanBanCardUncheckedCreateInputSchema])
}).strict();
var KanBanCardCreateArgsSchema_default = KanBanCardCreateArgsSchema;





exports.KanBanCardSelectSchema = KanBanCardSelectSchema; exports.KanBanCardCreateArgsSchema = KanBanCardCreateArgsSchema; exports.KanBanCardCreateArgsSchema_default = KanBanCardCreateArgsSchema_default;
//# sourceMappingURL=chunk-NCYQBXCW.cjs.map