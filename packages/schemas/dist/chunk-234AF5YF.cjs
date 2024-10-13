"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2VBS5NGScjs = require('./chunk-2VBS5NGS.cjs');


var _chunkQYZ6VCGQcjs = require('./chunk-QYZ6VCGQ.cjs');


var _chunkQJ7DYC27cjs = require('./chunk-QJ7DYC27.cjs');


var _chunkSSBPLQI3cjs = require('./chunk-SSBPLQI3.cjs');


var _chunk6MWNZPY7cjs = require('./chunk-6MWNZPY7.cjs');

// src/database/inputTypeSchemas/BibEntryUncheckedCreateNestedManyWithoutBibInputSchema.ts
var _zod = require('zod');
var BibEntryUncheckedCreateNestedManyWithoutBibInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkQJ7DYC27cjs.BibEntryCreateWithoutBibInputSchema), _zod.z.lazy(() => _chunkQJ7DYC27cjs.BibEntryCreateWithoutBibInputSchema).array(), _zod.z.lazy(() => _chunkSSBPLQI3cjs.BibEntryUncheckedCreateWithoutBibInputSchema), _zod.z.lazy(() => _chunkSSBPLQI3cjs.BibEntryUncheckedCreateWithoutBibInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkQYZ6VCGQcjs.BibEntryCreateOrConnectWithoutBibInputSchema), _zod.z.lazy(() => _chunkQYZ6VCGQcjs.BibEntryCreateOrConnectWithoutBibInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunk2VBS5NGScjs.BibEntryCreateManyBibInputEnvelopeSchema).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema), _zod.z.lazy(() => _chunk6MWNZPY7cjs.BibEntryWhereUniqueInputSchema).array()]).optional()
}).strict();
var BibEntryUncheckedCreateNestedManyWithoutBibInputSchema_default = BibEntryUncheckedCreateNestedManyWithoutBibInputSchema;




exports.BibEntryUncheckedCreateNestedManyWithoutBibInputSchema = BibEntryUncheckedCreateNestedManyWithoutBibInputSchema; exports.BibEntryUncheckedCreateNestedManyWithoutBibInputSchema_default = BibEntryUncheckedCreateNestedManyWithoutBibInputSchema_default;
//# sourceMappingURL=chunk-234AF5YF.cjs.map