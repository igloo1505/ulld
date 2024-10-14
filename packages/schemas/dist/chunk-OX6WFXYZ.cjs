"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNBURW7PLcjs = require('./chunk-NBURW7PL.cjs');


var _chunkQQ5I4G6Jcjs = require('./chunk-QQ5I4G6J.cjs');


var _chunkHYOFN6RRcjs = require('./chunk-HYOFN6RR.cjs');

// src/database/inputTypeSchemas/BibEntryUpdateWithWhereUniqueWithoutBibInputSchema.ts
var _zod = require('zod');
var BibEntryUpdateWithWhereUniqueWithoutBibInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkQQ5I4G6Jcjs.BibEntryUpdateWithoutBibInputSchema), _zod.z.lazy(() => _chunkNBURW7PLcjs.BibEntryUncheckedUpdateWithoutBibInputSchema)])
}).strict();
var BibEntryUpdateWithWhereUniqueWithoutBibInputSchema_default = BibEntryUpdateWithWhereUniqueWithoutBibInputSchema;




exports.BibEntryUpdateWithWhereUniqueWithoutBibInputSchema = BibEntryUpdateWithWhereUniqueWithoutBibInputSchema; exports.BibEntryUpdateWithWhereUniqueWithoutBibInputSchema_default = BibEntryUpdateWithWhereUniqueWithoutBibInputSchema_default;
//# sourceMappingURL=chunk-OX6WFXYZ.cjs.map