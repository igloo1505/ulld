'use strict';

var zod = require('zod');
var transformExportString = require('@ulld/utilities/transformExportString');

// src/developer/pluginEventsSchema.ts
var pluginEventsSchema = zod.z.object({
  onBuild: zod.z.string().optional().describe("The package.json export of a function that will run once during the build process. This can be used for copying files over to the public directory, but most other copying of files can be handled by setting up the pluginConfig appropriately.").transform(transformExportString.transformExportStringOptional),
  onSync: zod.z.string().optional().describe("The package.json export of a function that will run each time a user syncs their notes with their database.").transform(transformExportString.transformExportStringOptional),
  onBackup: zod.z.string().optional().describe("The package.json export of a function that will run each time a user backs up their notes to a json file. This function should return a single json object.").transform(transformExportString.transformExportStringOptional),
  onRestore: zod.z.string().optional().describe("The package.json export of a function that will be used to restore data from a previous backup. The argument will be an optional object of an identical type to what was stored using the onBackup event.").transform(transformExportString.transformExportStringOptional)
});

exports.pluginEventsSchema = pluginEventsSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=pluginEventsSchema.cjs.map