"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3ZUNZQPRcjs = require('./chunk-3ZUNZQPR.cjs');


var _chunkABAO632Kcjs = require('./chunk-ABAO632K.cjs');



var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');

// src/database/outputTypeSchemas/KanBanCardCreateArgsSchema.ts
var _zod = require('zod');
var KanBanCardSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  listId: _zod.z.boolean().optional(),
  indexWithinList: _zod.z.boolean().optional(),
  label: _zod.z.boolean().optional(),
  details: _zod.z.boolean().optional(),
  KanBanList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.KanBanListArgsSchema)]).optional()
}).strict();
var KanBanCardCreateArgsSchema = _zod.z.object({
  select: KanBanCardSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.KanBanCardIncludeSchema.optional(),
  data: _zod.z.union([_chunk3ZUNZQPRcjs.KanBanCardCreateInputSchema, _chunkABAO632Kcjs.KanBanCardUncheckedCreateInputSchema])
}).strict();
var KanBanCardCreateArgsSchema_default = KanBanCardCreateArgsSchema;





exports.KanBanCardSelectSchema = KanBanCardSelectSchema; exports.KanBanCardCreateArgsSchema = KanBanCardCreateArgsSchema; exports.KanBanCardCreateArgsSchema_default = KanBanCardCreateArgsSchema_default;
//# sourceMappingURL=chunk-HNXDTLFA.cjs.map