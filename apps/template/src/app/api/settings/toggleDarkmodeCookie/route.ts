import { NextResponse } from "next/server";
import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";


export const darkModeCookie = (
  cookies: ResponseCookies,
  darkMode: boolean | "toggle",
) => {
  let newMode =
    darkMode === "toggle" ? !Boolean(cookies.get("darkMode")?.value) : darkMode;
  if (newMode) {
    cookies.set("darkMode", "true");
    return cookies;
  }
  cookies.delete("darkMode");
  return cookies;
};

export async function POST(req: Request) {
  try {
    const { darkmode: param } = await req.json();
    if (param === "darkMode" || param === "noDarkMode") {
      let res = new NextResponse(JSON.stringify({ success: true }));
      darkModeCookie(res.cookies, param === "darkMode");
      return res;
    }
    return new NextResponse(JSON.stringify({ success: true }));
  } catch (err) {
    console.error(err);
    return new NextResponse(JSON.stringify({ success: false }));
  }
}
