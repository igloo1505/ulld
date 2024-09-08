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

// src/utils/replaceContentByRegexMatch.ts
var replaceContentByMatch = (content, match, group, newContent) => {
  if (!match.groups) {
    console.log(`No groups were found for match ${match}`);
    return content;
  }
  let matchValue = match.groups?.[group];
  console.log("match: ", match);
  if (!matchValue) {
    throw new Error(`An invalid match group was given to replaceContentByMatch. Looked for ${group} and found groups ${Object.keys(match.groups).join(", ")}`);
  }
  let c = content.replaceAll(match[0], typeof newContent === "string" ? newContent : newContent(matchValue));
  return c;
};

exports.getAllRegexMatches = getAllRegexMatches;
exports.replaceContentByMatch = replaceContentByMatch;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=regexUtils.cjs.map