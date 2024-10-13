"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXSUMMRVHcjs = require('./chunk-XSUMMRVH.cjs');


var _chunkEGNYYEWVcjs = require('./chunk-EGNYYEWV.cjs');


var _chunkQJ7DYC27cjs = require('./chunk-QJ7DYC27.cjs');


var _chunkSSBPLQI3cjs = require('./chunk-SSBPLQI3.cjs');


var _chunk6MWNZPY7cjs = require('./chunk-6MWNZPY7.cjs');

// src/database/inputTypeSchemas/BibEntryUpsertWithWhereUniqueWithoutBibInputSchema.ts
var _zod = require('zod');
var BibEntryUpsertWithWhereUniqueWithoutBibInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema),
  update: _zod.z.union([_zod.z.lazy(() => _chunkEGNYYEWVcjs.BibEntryUpdateWithoutBibInputSchema), _zod.z.lazy(() => _chunkXSUMMRVHcjs.BibEntryUncheckedUpdateWithoutBibInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkQJ7DYC27cjs.BibEntryCreateWithoutBibInputSchema), _zod.z.lazy(() => _chunkSSBPLQI3cjs.BibEntryUncheckedCreateWithoutBibInputSchema)])
}).strict();
var BibEntryUpsertWithWhereUniqueWithoutBibInputSchema_default = BibEntryUpsertWithWhereUniqueWithoutBibInputSchema;




exports.BibEntryUpsertWithWhereUniqueWithoutBibInputSchema = BibEntryUpsertWithWhereUniqueWithoutBibInputSchema; exports.BibEntryUpsertWithWhereUniqueWithoutBibInputSchema_default = BibEntryUpsertWithWhereUniqueWithoutBibInputSchema_default;
//# sourceMappingURL=chunk-ZC2XFIFP.cjs.map