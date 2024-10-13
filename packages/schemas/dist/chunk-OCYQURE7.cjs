"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/BibWhereUniqueInputSchema.ts
var _zod = require('zod');
var BibWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.BibWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.BibWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkXQKVAOTYcjs.BibWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.BibWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.BibWhereInputSchema).array()]).optional(),
  filename: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  firstSync: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastSync: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  entries: _zod.z.lazy(() => _chunkXQKVAOTYcjs.BibEntryListRelationFilterSchema).optional()
}).strict());
var BibWhereUniqueInputSchema_default = BibWhereUniqueInputSchema;




exports.BibWhereUniqueInputSchema = BibWhereUniqueInputSchema; exports.BibWhereUniqueInputSchema_default = BibWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-OCYQURE7.cjs.map