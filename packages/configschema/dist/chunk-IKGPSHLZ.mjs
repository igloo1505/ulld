// src/zod/dateParseConfig.ts
import { z } from "zod";
var defaultDateFormatConfig = {
  short: "MM/DD/YYYY",
  long: "MMM Do, YYYY",
  withTime: "MM/DD/YY [at] HH:mm a",
  timeOnly: "HH:mm a"
};
var dateFormatFieldsSchema = z.object({
  short: z.string(),
  long: z.string(),
  withTime: z.string(),
  timeOnly: z.string()
});
var defaultDateParseType = "summarized";
var timeDisplayTypeSchema = z.union([
  z.literal("analog").describe("Similar to a digital clock."),
  z.literal("summarized").describe("A short but more natural description of time. This requires the dateParseFormat.enableAdvancedFormat option."),
  z.literal("descriptive").describe(`Time with relative times. ie: '2 days ago', 'tomorrow', etc. This requires the dateParseFormat.enableAdvancedFormat option. Default: ${defaultDateParseType}.`)
]);
var fullDateParseConfig = z.object({
  short: z.string().default(defaultDateFormatConfig.short).describe("The format string passed to dayjs to format dates for short or small display fields. Formatting using the advancedFormat plugin is enabled by default. Please see the documentation of dayjs for more information about the date formatting syntax, both with and without the advanced format plugin."),
  long: z.string().default(defaultDateFormatConfig.long).describe("The format string passed to dayjs to format dates for display fields where size is less of a concern. Formatting using the advancedFormat plugin is enabled by default. Please see the documentation of dayjs for more information about the date formatting syntax, both with and without the advanced format plugin."),
  withTime: z.string().default(defaultDateFormatConfig.withTime).describe("The format string passed to dayjs to format dates for fields where the time is relevant. Formatting using the advancedFormat plugin is enabled by default. Please see the documentation of dayjs for more information about the date formatting syntax, both with and without the advanced format plugin."),
  timeOnly: z.string().default(defaultDateFormatConfig.timeOnly).describe("The format string passed to dayjs to format dates for fields where the time is relevant. Formatting using the advancedFormat plugin is enabled by default. Please see the documentation of dayjs for more information about the date formatting syntax, both with and without the advanced format plugin.")
});
var getTimeFormat = (data, key) => {
  return typeof data === "string" ? data : data[key] ?? defaultDateFormatConfig[key];
};
var _dateParseConfigSchemaInner = z.object({
  enableAdvancedFormat: z.boolean().default(true).describe("Whether or not to enable format strings that follow the syntax described by dayjs's advancedFormat plugin."),
  format: z.union([
    z.string().describe("The string to pass to "),
    fullDateParseConfig
  ]).default(defaultDateFormatConfig).transform((x) => {
    return {
      short: getTimeFormat(x, "short"),
      long: getTimeFormat(x, "long"),
      withTime: getTimeFormat(x, "withTime"),
      timeOnly: getTimeFormat(x, "timeOnly")
    };
  }),
  defaultTimeDisplayType: timeDisplayTypeSchema.default(defaultDateParseType),
  defaultTimeZone: z.string().optional().describe("The time to be used to override the value found locally. In most cases this should be left empty to allow the timezone to be derived naturally, but in cases of some mangaged devices this may not be accurate. To see the timezone that your browser would provide, open the developer console and type 'Intl.DateTimeFormat().resolvedOptions().timeZone'. If that property does not match what is expected, set this value accordingly.")
});
var dateParseConfigSchema = _dateParseConfigSchemaInner.default({
  enableAdvancedFormat: true,
  format: defaultDateFormatConfig,
  defaultTimeDisplayType: "analog"
});
var dateParseConfigSchemaOutput = _dateParseConfigSchemaInner.merge(z.object({
  enableAdvancedFormat: z.boolean(),
  format: dateFormatFieldsSchema,
  defaultTimeDisplayType: timeDisplayTypeSchema
}));

export {
  dateParseConfigSchema,
  dateParseConfigSchemaOutput
};
//# sourceMappingURL=chunk-IKGPSHLZ.mjs.map