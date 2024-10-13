"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQJ7DYC27cjs = require('./chunk-QJ7DYC27.cjs');


var _chunkSSBPLQI3cjs = require('./chunk-SSBPLQI3.cjs');


var _chunk6MWNZPY7cjs = require('./chunk-6MWNZPY7.cjs');

// src/database/inputTypeSchemas/BibEntryCreateOrConnectWithoutBibInputSchema.ts
var _zod = require('zod');
var BibEntryCreateOrConnectWithoutBibInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkQJ7DYC27cjs.BibEntryCreateWithoutBibInputSchema), _zod.z.lazy(() => _chunkSSBPLQI3cjs.BibEntryUncheckedCreateWithoutBibInputSchema)])
}).strict();
var BibEntryCreateOrConnectWithoutBibInputSchema_default = BibEntryCreateOrConnectWithoutBibInputSchema;




exports.BibEntryCreateOrConnectWithoutBibInputSchema = BibEntryCreateOrConnectWithoutBibInputSchema; exports.BibEntryCreateOrConnectWithoutBibInputSchema_default = BibEntryCreateOrConnectWithoutBibInputSchema_default;
//# sourceMappingURL=chunk-QYZ6VCGQ.cjs.map