"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkPROTXE2Xcjs = require('./chunk-PROTXE2X.cjs');


var _chunkC43PWDDBcjs = require('./chunk-C43PWDDB.cjs');


var _chunkJA3R3U7Ncjs = require('./chunk-JA3R3U7N.cjs');

// src/database/inputTypeSchemas/BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema.ts
var _zod = require('zod');
var BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkC43PWDDBcjs.BibEntryScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkJA3R3U7Ncjs.BibEntryUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkPROTXE2Xcjs.BibEntryUncheckedUpdateManyWithoutIpynbNotesInputSchema)])
}).strict();
var BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema_default = BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema;




exports.BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema = BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema; exports.BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema_default = BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema_default;
//# sourceMappingURL=chunk-52QEUNKY.cjs.map