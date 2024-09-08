'use strict';

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

exports.getAllRegexMatches = getAllRegexMatches;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=getAllRegexMatches.cjs.map