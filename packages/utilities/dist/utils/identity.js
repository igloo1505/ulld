import '../chunk-F3FYYIAV.js';

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

export { getRandomId, makeValidId, makeValidIdOnlyLetters };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=identity.js.map