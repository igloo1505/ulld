import { NextResponse } from "next/server";
import { ThemeOptions } from "@ulld/tailwind/themeUtils";
import { setThemeCookie } from "@ulld/tailwind/handleThemeCookies";


export async function POST(req: Request) {
    try {
        const body = await req.json();
        const theme = (body.theme as ThemeOptions) || "ulld";
        const res = new NextResponse(JSON.stringify({ success: true }));
        await setThemeCookie(res.cookies, theme);
        return res;
    } catch (err) {
        console.error(err);
        return new NextResponse(JSON.stringify({ success: false }));
    }
}
