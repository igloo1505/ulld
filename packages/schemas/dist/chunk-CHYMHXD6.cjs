"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXSUMMRVHcjs = require('./chunk-XSUMMRVH.cjs');


var _chunkEGNYYEWVcjs = require('./chunk-EGNYYEWV.cjs');


var _chunk6MWNZPY7cjs = require('./chunk-6MWNZPY7.cjs');

// src/database/inputTypeSchemas/BibEntryUpdateWithWhereUniqueWithoutBibInputSchema.ts
var _zod = require('zod');
var BibEntryUpdateWithWhereUniqueWithoutBibInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkEGNYYEWVcjs.BibEntryUpdateWithoutBibInputSchema), _zod.z.lazy(() => _chunkXSUMMRVHcjs.BibEntryUncheckedUpdateWithoutBibInputSchema)])
}).strict();
var BibEntryUpdateWithWhereUniqueWithoutBibInputSchema_default = BibEntryUpdateWithWhereUniqueWithoutBibInputSchema;




exports.BibEntryUpdateWithWhereUniqueWithoutBibInputSchema = BibEntryUpdateWithWhereUniqueWithoutBibInputSchema; exports.BibEntryUpdateWithWhereUniqueWithoutBibInputSchema_default = BibEntryUpdateWithWhereUniqueWithoutBibInputSchema_default;
//# sourceMappingURL=chunk-CHYMHXD6.cjs.map