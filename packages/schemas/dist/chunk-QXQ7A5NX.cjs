"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWLYMHUZGcjs = require('./chunk-WLYMHUZG.cjs');


var _chunkC43PWDDBcjs = require('./chunk-C43PWDDB.cjs');


var _chunkJA3R3U7Ncjs = require('./chunk-JA3R3U7N.cjs');

// src/database/inputTypeSchemas/BibEntryUpdateManyWithWhereWithoutReadingListInputSchema.ts
var _zod = require('zod');
var BibEntryUpdateManyWithWhereWithoutReadingListInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkC43PWDDBcjs.BibEntryScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkJA3R3U7Ncjs.BibEntryUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkWLYMHUZGcjs.BibEntryUncheckedUpdateManyWithoutReadingListInputSchema)])
}).strict();
var BibEntryUpdateManyWithWhereWithoutReadingListInputSchema_default = BibEntryUpdateManyWithWhereWithoutReadingListInputSchema;




exports.BibEntryUpdateManyWithWhereWithoutReadingListInputSchema = BibEntryUpdateManyWithWhereWithoutReadingListInputSchema; exports.BibEntryUpdateManyWithWhereWithoutReadingListInputSchema_default = BibEntryUpdateManyWithWhereWithoutReadingListInputSchema_default;
//# sourceMappingURL=chunk-QXQ7A5NX.cjs.map