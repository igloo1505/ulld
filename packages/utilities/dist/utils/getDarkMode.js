import '../chunk-F3FYYIAV.js';

// src/utils/getDarkMode.ts
var getDarkMode = async () => {
  if (typeof window !== "undefined") {
    return Boolean(document.querySelector("html")?.classList.contains("dark"));
  }
  let { cookies } = await import('next/headers');
  return cookies().has("darkMode");
};

export { getDarkMode };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=getDarkMode.js.map