'use strict';

var dayjs = require('dayjs');
var advancedFormat = require('dayjs/plugin/advancedFormat');
var timezone = require('dayjs/plugin/timezone');
var utc = require('dayjs/plugin/utc');
var relativeTime = require('dayjs/plugin/relativeTime');
var duration = require('dayjs/plugin/duration');
var customParseFormat = require('dayjs/plugin/customParseFormat');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var dayjs__default = /*#__PURE__*/_interopDefault(dayjs);
var advancedFormat__default = /*#__PURE__*/_interopDefault(advancedFormat);
var timezone__default = /*#__PURE__*/_interopDefault(timezone);
var utc__default = /*#__PURE__*/_interopDefault(utc);
var relativeTime__default = /*#__PURE__*/_interopDefault(relativeTime);
var duration__default = /*#__PURE__*/_interopDefault(duration);
var customParseFormat__default = /*#__PURE__*/_interopDefault(customParseFormat);

// src/classes/DateTime/main.ts
dayjs__default.default.extend(customParseFormat__default.default);
dayjs__default.default.extend(duration__default.default);
dayjs__default.default.extend(relativeTime__default.default);
dayjs__default.default.extend(utc__default.default);
dayjs__default.default.extend(timezone__default.default);
dayjs__default.default.extend(advancedFormat__default.default);
var DateTime = class _DateTime {
  constructor(t, config) {
    this.config = config;
    this.withoutSuffix = false;
    this.flat = false;
    this.timezone = config?.dateHandling.defaultTimeZone || this.getTimezone();
    if (this.timezone) {
      dayjs__default.default.tz.setDefault(this.timezone);
    }
    this.dayjs = t instanceof Date ? dayjs__default.default(t) : dayjs__default.default(t).tz(this.timezone);
    this.t = this.dayjs.toDate();
  }
  getTimezone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "America/Chicago";
  }
  djs(t) {
    return dayjs__default.default.tz(t, this.timezone);
  }
  updateOnInterval(intervalSeconds, type, callback) {
    let interval = setInterval(() => {
      callback(this.relativeTime(type));
    }, intervalSeconds * 1e3);
    return interval;
  }
  formatDate(withTime) {
    const formatStr = withTime ? "MMM Do YYYY [at] h:mm a" : "MMM Do YYYY";
    return this.dayjs.local().format(formatStr);
  }
  now(asValue = false) {
    return asValue ? (/* @__PURE__ */ new Date()).valueOf() : /* @__PURE__ */ new Date();
  }
  secondDifference(fromTo = /* @__PURE__ */ new Date()) {
    return this.dayjs.local().diff(fromTo, "seconds");
  }
  diffAsDuration(t = /* @__PURE__ */ new Date()) {
    return dayjs__default.default.duration(this.secondDifference(t), "seconds");
  }
  formatTimeDiff(duration2, t = /* @__PURE__ */ new Date()) {
    let dur = duration2 || this.diffAsDuration(t);
    return {
      years: dur.years(),
      days: dur.days(),
      asDays: dur.asDays(),
      months: dur.months(),
      hours: dur.hours(),
      minutes: dur.minutes(),
      seconds: dur.seconds()
    };
  }
  getDiffBaseString(duration2) {
    let days = duration2.days();
    let months = duration2.months();
    let s = "";
    if (this.flat) {
      let asDays = Math.floor(duration2.asDays());
      if (asDays > 0)
        s += `[${asDays} ${asDays === 1 ? "day" : "days"} ]`;
    } else {
      if (months > 0)
        s += months === 1 ? "M [month] " : "M [months] ";
      if (days > 0)
        s += days === 1 ? "D [day] " : "D [days] ";
    }
    return s;
  }
  relativeTimeAnalog() {
    let duration2 = this.diffAsDuration();
    let s = this.getDiffBaseString(duration2);
    return duration2.format(`${s} HH:mm:ss`);
  }
  relativeTimeDescriptive() {
    let duration2 = this.diffAsDuration();
    let s = this.getDiffBaseString(duration2);
    let dt = this.formatTimeDiff(duration2);
    if (dt.hours)
      s += dt.hours === 1 ? "H [hour] " : "H [hours] ";
    if (dt.minutes)
      s += dt.minutes === 1 ? "m [minute] " : "m [minutes] ";
    if (dt.seconds)
      s += dt.seconds === 1 ? "ss [second] " : "ss [seconds] ";
    return duration2.format(s.trim());
  }
  relativeTimeSummarized() {
    return this.dayjs.local().fromNow(this.withoutSuffix);
  }
  replaceExtraNegatives(t) {
    let f1 = t.indexOf("-");
    let f2 = t.lastIndexOf("-");
    if (f1 < 0 || f1 === f2) {
      return t;
    }
    return `${t.slice(0, f1 + 1)}${t.slice(f1, t.length).replaceAll("-", "")}`;
  }
  relativeTime(type) {
    if (type === "analog")
      return this.replaceExtraNegatives(this.relativeTimeAnalog());
    if (type === "summarized")
      return this.replaceExtraNegatives(this.relativeTimeSummarized());
    if (type === "descriptive")
      return this.replaceExtraNegatives(this.relativeTimeDescriptive());
    return "";
  }
  startOfDay() {
    return dayjs__default.default().startOf("day");
  }
  dayOfWeek() {
    return dayjs__default.default().get("day");
  }
  static filterByDateRange(items, getDate, start, end) {
    let returnItems = [];
    let startValue = (typeof start === "string" ? new Date(start) : start).valueOf();
    let endValue = (typeof end === "undefined" ? /* @__PURE__ */ new Date() : typeof end === "string" ? new Date(end) : end).valueOf();
    for (const k of items) {
      let val = getDate(k).valueOf();
      if (val >= startValue && val <= endValue) {
        returnItems.push(k);
      }
    }
    return returnItems;
  }
  static formatDate(d, withTime, formatString) {
    const formatStr = formatString ? formatString : withTime ? "MMM Do YYYY [at] h:mm a" : "MMM Do YYYY";
    return dayjs__default.default(d).format(formatStr);
  }
  static formattedQuantityToString(d) {
    let s = "";
    if (d.hours > 0) {
      s += `${d.hours}:`;
    }
    if (d.minutes > 0) {
      s += `${d.minutes}:`;
    }
    s += `${d.seconds > 0 ? d.seconds : "00"}`;
    return s;
  }
  static formattedQuantityToDescriptiveString(d) {
    let s = "";
    if (d.hours > 0) {
      s += `${d.hours} ${d.hours === 1 ? "hour" : "hours"} `;
    }
    if (d.minutes > 0) {
      s += `${d.minutes} ${d.minutes === 1 ? "minute" : "minutes"} `;
    }
    if (d.seconds > 0) {
      s += `${d.seconds} ${d.seconds === 1 ? "second" : "seconds"} `;
    }
    return s;
  }
  static formatTimeQuantity(seconds) {
    let hr = Math.floor(seconds / 3600);
    let min = Math.floor((seconds - hr * 3600) / 60);
    let sec = Math.floor(seconds - (hr * 3600 + min * 60));
    return {
      hours: hr,
      minutes: min,
      seconds: sec
    };
  }
  static getTimePeriod(opt) {
    let timePeriodRecord = {
      "24 hours": 864e5,
      "1 week": 6048e5,
      "30 Days": 2592e6,
      // 60 * 60 * 24 * 30 * 1000
      "60 Days": 5184e6,
      "90 Days": 7776e6,
      "Previous Year": 31536e6,
      // 60 * 60 * 24 * 365 * 1000
      "6 Months": 15768e6,
      "Year to Date": (d) => d.valueOf() - (/* @__PURE__ */ new Date(`1/1/${d.getFullYear()}`)).valueOf(),
      "All Time": (d) => d.valueOf() - (/* @__PURE__ */ new Date(`1/1/1970`)).valueOf()
    };
    let f = timePeriodRecord[opt];
    let _now = /* @__PURE__ */ new Date();
    if (typeof f === "function") {
      return new Date(_now.valueOf() - f(_now));
    } else {
      return new Date(_now.valueOf() - f);
    }
  }
  static thirtyDaysAgo() {
    let n = 2592e6;
    return new Date((/* @__PURE__ */ new Date()).valueOf() - n);
  }
  static consistentlyFormatDay(val) {
    return `${val.getMonth() + 1}/${val.getDate()}/${val.getFullYear()}`;
  }
  static groupByDay(items, getDate) {
    let days = {};
    for (const k of items) {
      let d = getDate(k);
      if (d) {
        let s = _DateTime.consistentlyFormatDay(d);
        if (!(s in days)) {
          days[s] = [];
        }
        days[s].push(k);
      }
    }
    return days;
  }
  static groupByHour(items, getDate) {
    let days = {};
    for (const k of items) {
      let d = getDate(k);
      if (d) {
        let v = dayjs__default.default(d);
        let s = v.format("HH");
        if (!(s in days)) {
          days[s] = [];
        }
        days[s].push(k);
      }
    }
    return days;
  }
};

// src/testDataHelpers/testDateHelper.ts
var makeDate = (s) => {
  return typeof s === "string" ? new Date(s) : s;
};
var TestDateHelper = class extends DateTime {
  constructor(t) {
    super(t);
  }
  static randomDateBeforeNow(start) {
    let d = makeDate(start).valueOf();
    let now = (/* @__PURE__ */ new Date()).valueOf();
    let diff = now - d;
    return new Date(d + Math.floor(Math.random() * diff));
  }
};

exports.TestDateHelper = TestDateHelper;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=testDateHelper.cjs.map