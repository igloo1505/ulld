"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNBURW7PLcjs = require('./chunk-NBURW7PL.cjs');


var _chunkQQ5I4G6Jcjs = require('./chunk-QQ5I4G6J.cjs');


var _chunkXIFXR42Ecjs = require('./chunk-XIFXR42E.cjs');


var _chunkFSUP6TTZcjs = require('./chunk-FSUP6TTZ.cjs');


var _chunkHYOFN6RRcjs = require('./chunk-HYOFN6RR.cjs');

// src/database/inputTypeSchemas/BibEntryUpsertWithWhereUniqueWithoutBibInputSchema.ts
var _zod = require('zod');
var BibEntryUpsertWithWhereUniqueWithoutBibInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema),
  update: _zod.z.union([_zod.z.lazy(() => _chunkQQ5I4G6Jcjs.BibEntryUpdateWithoutBibInputSchema), _zod.z.lazy(() => _chunkNBURW7PLcjs.BibEntryUncheckedUpdateWithoutBibInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkXIFXR42Ecjs.BibEntryCreateWithoutBibInputSchema), _zod.z.lazy(() => _chunkFSUP6TTZcjs.BibEntryUncheckedCreateWithoutBibInputSchema)])
}).strict();
var BibEntryUpsertWithWhereUniqueWithoutBibInputSchema_default = BibEntryUpsertWithWhereUniqueWithoutBibInputSchema;




exports.BibEntryUpsertWithWhereUniqueWithoutBibInputSchema = BibEntryUpsertWithWhereUniqueWithoutBibInputSchema; exports.BibEntryUpsertWithWhereUniqueWithoutBibInputSchema_default = BibEntryUpsertWithWhereUniqueWithoutBibInputSchema_default;
//# sourceMappingURL=chunk-EUQKSIFZ.cjs.map