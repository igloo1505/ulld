"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/zod/dateParseConfig.ts
var _zod = require('zod');
var defaultDateFormatConfig = {
  short: "MM/DD/YYYY",
  long: "MMM Do, YYYY",
  withTime: "MM/DD/YY [at] HH:mm a",
  timeOnly: "HH:mm a"
};
var defaultDateParseType = "summarized";
var timeDisplayTypeSchema = _zod.z.union([
  _zod.z.literal("analog").describe("Similar to a digital clock."),
  _zod.z.literal("summarized").describe("A short but more natural description of time. This requires the dateParseFormat.enableAdvancedFormat option."),
  _zod.z.literal("descriptive").describe(`Time with relative times. ie: '2 days ago', 'tomorrow', etc. This requires the dateParseFormat.enableAdvancedFormat option. Default: ${defaultDateParseType}.`)
]);
var fullDateParseConfig = _zod.z.object({
  short: _zod.z.string().default("MM/D/YYYY").describe("The format string passed to dayjs to format dates for short or small display fields. Formatting using the advancedFormat plugin is enabled by default. Please see the documentation of dayjs for more information about the date formatting syntax, both with and without the advanced format plugin."),
  long: _zod.z.string().default("MMM Do, YYYY").describe("The format string passed to dayjs to format dates for display fields where size is less of a concern. Formatting using the advancedFormat plugin is enabled by default. Please see the documentation of dayjs for more information about the date formatting syntax, both with and without the advanced format plugin."),
  withTime: _zod.z.string().default("MM/DD/YY [at] HH:mm a").describe("The format string passed to dayjs to format dates for fields where the time is relevant. Formatting using the advancedFormat plugin is enabled by default. Please see the documentation of dayjs for more information about the date formatting syntax, both with and without the advanced format plugin."),
  timeOnly: _zod.z.string().default("HH:mm a").describe("The format string passed to dayjs to format dates for fields where the time is relevant. Formatting using the advancedFormat plugin is enabled by default. Please see the documentation of dayjs for more information about the date formatting syntax, both with and without the advanced format plugin.")
});
var dateParseConfigSchema = _zod.z.object({
  enableAdvancedFormat: _zod.z.boolean().default(true).describe("Whether or not to enable format strings that follow the syntax described by dayjs's advancedFormat plugin."),
  format: _zod.z.union([
    _zod.z.string().describe("The string to pass to "),
    fullDateParseConfig
  ]).default(defaultDateFormatConfig),
  defaultTimeDisplayType: timeDisplayTypeSchema.default(defaultDateParseType),
  defaultTimeZone: _zod.z.string().optional().describe("The time to be used to override the value found locally. In most cases this should be left empty to allow the timezone to be derived naturally, but in cases of some mangaged devices this may not be accurate. To see the timezone that your browser would provide, open the developer console and type 'Intl.DateTimeFormat().resolvedOptions().timeZone'. If that property does not match what is expected, set this value accordingly.")
}).default({
  enableAdvancedFormat: true,
  format: defaultDateFormatConfig,
  defaultTimeDisplayType: "analog"
});



exports.dateParseConfigSchema = dateParseConfigSchema;
//# sourceMappingURL=chunk-DAJQG6UY.cjs.map