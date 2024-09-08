'use strict';

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

exports.replaceContentByMatch = replaceContentByMatch;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=replaceContentByRegexMatch.cjs.map