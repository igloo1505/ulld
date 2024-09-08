"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/zod/database/main.ts
var _zod = require('zod');
var databaseConfigSchema = _zod.z.object({
  storeFormatted: _zod.z.boolean().default(true).describe("Whether or not to store the formatted content along with the raw content This will improve performance and load times when rendering content  not in 'preferFs' mode, but will increase the storage size of each note. Recommended: true if running and storing notes locally where network speeds and monthly fees aren't an issue."),
  removeIfNotPresentInFs: _zod.z.boolean().default(true).describe("Whether or not to remove notes from the database if they are no longer found in the local file system. This is best set to true if storing all notes in one location, but can be set to false to avoid losing notes that may have been lost elsewhere.")
}).default({});



exports.databaseConfigSchema = databaseConfigSchema;
//# sourceMappingURL=chunk-3VEE7NEQ.cjs.map