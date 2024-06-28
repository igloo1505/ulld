import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { ThemeOptions } from "@ulld/tailwind/themeUtils";
import { setThemeCookie } from "@ulld/tailwind/handleThemeCookies";


interface RequestContext {
    // params: {
    //     id: string
    // }
}


const router = createEdgeRouter<NextRequest, RequestContext>();


router
    .post(async (req, ctx) => {
        try {
           const body = await req.json()
            const theme = body.theme as ThemeOptions || "ulld"
            const res = new NextResponse(JSON.stringify({success: true}));
            await setThemeCookie(res.cookies, theme)
            return res
        } catch(err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }))
        }
    })



export async function POST(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx) as Promise<NextResponse<unknown>>
}
