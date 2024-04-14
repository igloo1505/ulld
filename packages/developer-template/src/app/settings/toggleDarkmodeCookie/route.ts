import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";

interface RequestContext { }

const router = createEdgeRouter<NextRequest, RequestContext>();


export const darkModeCookie = (cookies: ResponseCookies, darkMode: boolean | "toggle") => {
    let newMode = darkMode === "toggle" ? !Boolean(cookies.get("darkMode")?.value) : darkMode
    if (newMode) {
        cookies.set("darkMode", "true")
        return cookies
    }
    cookies.delete("darkMode")
    return cookies
}


router
    .post(async (req, ctx) => {
        try {
            const { darkmode: param } = await req.json()
            if (param === "darkMode" || param === "noDarkMode") {
                let res = new NextResponse(JSON.stringify({ success: true }))
                darkModeCookie(res.cookies, param === "darkMode")
                return res
            }
            return new NextResponse(JSON.stringify({ success: true }));
        } catch (err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }))
        }
    })


export async function POST(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx) as Promise<NextResponse<unknown>>
}
