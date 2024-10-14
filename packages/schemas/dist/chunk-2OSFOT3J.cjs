"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMV6A3U24cjs = require('./chunk-MV6A3U24.cjs');


var _chunkC43PWDDBcjs = require('./chunk-C43PWDDB.cjs');


var _chunkJA3R3U7Ncjs = require('./chunk-JA3R3U7N.cjs');

// src/database/inputTypeSchemas/BibEntryUpdateManyWithWhereWithoutTopicsInputSchema.ts
var _zod = require('zod');
var BibEntryUpdateManyWithWhereWithoutTopicsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkC43PWDDBcjs.BibEntryScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkJA3R3U7Ncjs.BibEntryUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkMV6A3U24cjs.BibEntryUncheckedUpdateManyWithoutTopicsInputSchema)])
}).strict();
var BibEntryUpdateManyWithWhereWithoutTopicsInputSchema_default = BibEntryUpdateManyWithWhereWithoutTopicsInputSchema;




exports.BibEntryUpdateManyWithWhereWithoutTopicsInputSchema = BibEntryUpdateManyWithWhereWithoutTopicsInputSchema; exports.BibEntryUpdateManyWithWhereWithoutTopicsInputSchema_default = BibEntryUpdateManyWithWhereWithoutTopicsInputSchema_default;
//# sourceMappingURL=chunk-2OSFOT3J.cjs.map