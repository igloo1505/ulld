'use strict';

var distance = require('jaro-winkler');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var distance__default = /*#__PURE__*/_interopDefault(distance);

// src/utils/getAllRegexMatches.ts
var getAllRegexMatches = (content, regex) => {
  let results = [];
  let c = content;
  let m;
  do {
    m = regex.exec(c);
    if (m) {
      results.push(m);
    }
  } while (m);
  return results;
};
var capitalize = (val) => `${val[0].toUpperCase()}${val.slice(1)}`;
var camelCase = (val) => {
  return val.replaceAll(/\-|\_/gm, " ").split(" ").map((l, i) => i === 0 ? l.toLowerCase() : capitalize(l)).join("");
};
var getFileExtension = (path) => {
  return path.includes(".") ? path.slice(path.lastIndexOf(".")) : void 0;
};
var pathHasExtension = (path) => {
  let ext = getFileExtension(path);
  return Boolean(ext && ext.length > 0 && ext.length <= 4);
};
var applyFileSuffix = (path, extension) => {
  return pathHasExtension(path) ? path : `${path}${extension}`;
};
var removeMathDollarSigns = (_s) => {
  let s = _s.trim();
  if (s.startsWith("$$") && s.endsWith("$$") && getAllRegexMatches(s, /\$\$/gm).length === 2) {
    return s.replaceAll("$$", "").trim();
  }
  if (s.startsWith("$") && s.endsWith("$") && getAllRegexMatches(s, /\$/gm).length === 2) {
    return s.replaceAll("$", "").trim();
  }
  return s;
};
var sortStringsBySimilarity = (searchString, opts, caseSensitive = false) => {
  return opts.map((x) => ({
    /* @ts-ignore */
    similarity: distance__default.default(searchString, x, {
      caseSensitive
    }),
    value: x
  })).sort((a, b) => a.similarity < b.similarity ? 1 : a.similarity > b.similarity ? -1 : 0);
};
var getMostSimilarString = (searchString, opts, caseSensitive = false) => {
  return sortStringsBySimilarity(searchString, opts, caseSensitive)[0].value;
};

exports.applyFileSuffix = applyFileSuffix;
exports.camelCase = camelCase;
exports.capitalize = capitalize;
exports.getFileExtension = getFileExtension;
exports.getMostSimilarString = getMostSimilarString;
exports.pathHasExtension = pathHasExtension;
exports.removeMathDollarSigns = removeMathDollarSigns;
exports.sortStringsBySimilarity = sortStringsBySimilarity;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=stringUtils.cjs.map