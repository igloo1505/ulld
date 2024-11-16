import { NextResponse } from "next/server";
import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";
import { NextRequest } from "next/server";

export const modebarCookie = (
  cookies: ResponseCookies,
  shouldShow: boolean,
) => {
  if (shouldShow) {
    cookies.set("showModebar", "true");
    return cookies;
  }
  cookies.delete("showModebar");
  return cookies;
};

export async function POST(req: NextRequest) {
  try {
    // let shouldShow = ctx.params.shouldShow
    // TODO: fix this when back on wifi. Unsure about how to grab params on the server.
    let shouldShow = "false";
    let res = new NextResponse(JSON.stringify({ success: true }));
    modebarCookie(res.cookies, shouldShow === "true");
    return res;
  } catch (err) {
    console.error(err);
    return new NextResponse(JSON.stringify({ success: false }));
  }
}
