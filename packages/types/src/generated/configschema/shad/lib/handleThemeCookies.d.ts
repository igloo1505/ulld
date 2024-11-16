import type { cookies } from "next/headers";
import { ThemeOptions } from "./themeUtils";
import { NextResponse } from "next/dist/server/web/spec-extension/response";
type CookieType = NextResponse<unknown>["cookies"] | ReturnType<typeof cookies>;
export declare const getThemeCookie: (cookieJar: CookieType) => Promise<string>;
export declare const setThemeCookie: (cookieJar: CookieType, newTheme?: ThemeOptions) => Promise<CookieType>;
export {};
//# sourceMappingURL=handleThemeCookies.d.ts.map