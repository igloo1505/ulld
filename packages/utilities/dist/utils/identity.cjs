'use strict';

// src/utils/identity.ts
var idChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
var getRandomId = (_length = 16) => {
  let s = `${idChars.charAt(Math.floor(Math.random() * 52))}`;
  for (var i = 0; i < _length; i++) {
    s += idChars.charAt(Math.floor(Math.random() * idChars.length));
  }
  return s;
};
var makeValidId = (id = "") => {
  return id.replaceAll(" ", "").replaceAll(/([^\w]|\d)/gm, "");
};
var makeValidIdOnlyLetters = (id = "") => {
  return id.replaceAll(/[^\w]/gmi, "");
};

exports.getRandomId = getRandomId;
exports.makeValidId = makeValidId;
exports.makeValidIdOnlyLetters = makeValidIdOnlyLetters;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=identity.cjs.map