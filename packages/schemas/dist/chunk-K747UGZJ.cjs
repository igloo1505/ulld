"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6ZQQ5XUDcjs = require('./chunk-6ZQQ5XUD.cjs');


var _chunkC43PWDDBcjs = require('./chunk-C43PWDDB.cjs');


var _chunkJA3R3U7Ncjs = require('./chunk-JA3R3U7N.cjs');

// src/database/inputTypeSchemas/BibEntryUpdateManyWithWhereWithoutBibInputSchema.ts
var _zod = require('zod');
var BibEntryUpdateManyWithWhereWithoutBibInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkC43PWDDBcjs.BibEntryScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkJA3R3U7Ncjs.BibEntryUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk6ZQQ5XUDcjs.BibEntryUncheckedUpdateManyWithoutBibInputSchema)])
}).strict();
var BibEntryUpdateManyWithWhereWithoutBibInputSchema_default = BibEntryUpdateManyWithWhereWithoutBibInputSchema;




exports.BibEntryUpdateManyWithWhereWithoutBibInputSchema = BibEntryUpdateManyWithWhereWithoutBibInputSchema; exports.BibEntryUpdateManyWithWhereWithoutBibInputSchema_default = BibEntryUpdateManyWithWhereWithoutBibInputSchema_default;
//# sourceMappingURL=chunk-K747UGZJ.cjs.map