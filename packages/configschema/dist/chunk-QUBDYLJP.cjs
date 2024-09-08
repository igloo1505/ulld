"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/developer/pluginEventsSchema.ts
var _zod = require('zod');
var _transformExportString = require('@ulld/utilities/transformExportString');
var pluginEventsSchema = _zod.z.object({
  onBuild: _zod.z.string().optional().describe("The package.json export of a function that will run once during the build process. This can be used for copying files over to the public directory, but most other copying of files can be handled by setting up the pluginConfig appropriately.").transform(_transformExportString.transformExportStringOptional),
  onSync: _zod.z.string().optional().describe("The package.json export of a function that will run each time a user syncs their notes with their database.").transform(_transformExportString.transformExportStringOptional),
  onBackup: _zod.z.string().optional().describe("The package.json export of a function that will run each time a user backs up their notes to a json file. This function should return a single json object.").transform(_transformExportString.transformExportStringOptional),
  onRestore: _zod.z.string().optional().describe("The package.json export of a function that will be used to restore data from a previous backup. The argument will be an optional object of an identical type to what was stored using the onBackup event.").transform(_transformExportString.transformExportStringOptional)
});



exports.pluginEventsSchema = pluginEventsSchema;
//# sourceMappingURL=chunk-QUBDYLJP.cjs.map