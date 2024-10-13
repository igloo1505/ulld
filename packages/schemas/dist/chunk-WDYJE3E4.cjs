"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/TransactionIsolationLevelSchema.ts
var _zod = require('zod');
var TransactionIsolationLevelSchema = _zod.z.enum(["ReadUncommitted", "ReadCommitted", "RepeatableRead", "Serializable"]);
var TransactionIsolationLevelSchema_default = TransactionIsolationLevelSchema;




exports.TransactionIsolationLevelSchema = TransactionIsolationLevelSchema; exports.TransactionIsolationLevelSchema_default = TransactionIsolationLevelSchema_default;
//# sourceMappingURL=chunk-WDYJE3E4.cjs.map