'use strict';

// src/utils/getDarkMode.ts
var getDarkMode = async () => {
  if (typeof window !== "undefined") {
    return Boolean(document.querySelector("html")?.classList.contains("dark"));
  }
  let { cookies } = await import('next/headers');
  return cookies().has("darkMode");
};

exports.getDarkMode = getDarkMode;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=getDarkMode.cjs.map