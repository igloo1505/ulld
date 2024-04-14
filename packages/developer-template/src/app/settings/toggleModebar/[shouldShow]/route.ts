import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";

interface RequestContext {
    params: {
        shouldShow: string
    }
}



export const modebarCookie = (cookies: ResponseCookies, shouldShow: boolean) => {
    if (shouldShow) {
        cookies.set("showModebar", "true")
        return cookies
    }
    cookies.delete("showModebar")
    return cookies
}

const router = createEdgeRouter<NextRequest, RequestContext>();


router
    .post(async (req, ctx) => {
        try {
            let shouldShow = ctx.params.shouldShow

            let res = new NextResponse(JSON.stringify({ success: true }))
            modebarCookie(res.cookies, shouldShow === "true")
            return res
        } catch(err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }))
        }
    })


export async function POST(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx) as Promise<NextResponse<unknown>>
}
