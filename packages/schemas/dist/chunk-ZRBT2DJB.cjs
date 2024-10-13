"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2VBS5NGScjs = require('./chunk-2VBS5NGS.cjs');


var _chunkQYZ6VCGQcjs = require('./chunk-QYZ6VCGQ.cjs');


var _chunkQJ7DYC27cjs = require('./chunk-QJ7DYC27.cjs');


var _chunkSSBPLQI3cjs = require('./chunk-SSBPLQI3.cjs');


var _chunk6MWNZPY7cjs = require('./chunk-6MWNZPY7.cjs');

// src/database/inputTypeSchemas/BibEntryCreateNestedManyWithoutBibInputSchema.ts
var _zod = require('zod');
var BibEntryCreateNestedManyWithoutBibInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkQJ7DYC27cjs.BibEntryCreateWithoutBibInputSchema), _zod.z.lazy(() => _chunkQJ7DYC27cjs.BibEntryCreateWithoutBibInputSchema).array(), _zod.z.lazy(() => _chunkSSBPLQI3cjs.BibEntryUncheckedCreateWithoutBibInputSchema), _zod.z.lazy(() => _chunkSSBPLQI3cjs.BibEntryUncheckedCreateWithoutBibInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkQYZ6VCGQcjs.BibEntryCreateOrConnectWithoutBibInputSchema), _zod.z.lazy(() => _chunkQYZ6VCGQcjs.BibEntryCreateOrConnectWithoutBibInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunk2VBS5NGScjs.BibEntryCreateManyBibInputEnvelopeSchema).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema), _zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema).array()]).optional()
}).strict();
var BibEntryCreateNestedManyWithoutBibInputSchema_default = BibEntryCreateNestedManyWithoutBibInputSchema;




exports.BibEntryCreateNestedManyWithoutBibInputSchema = BibEntryCreateNestedManyWithoutBibInputSchema; exports.BibEntryCreateNestedManyWithoutBibInputSchema_default = BibEntryCreateNestedManyWithoutBibInputSchema_default;
//# sourceMappingURL=chunk-ZRBT2DJB.cjs.map