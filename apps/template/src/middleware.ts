import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const requestHeaders = new Headers(req.headers);
    let host = req.nextUrl.host
    if (!req.url.startsWith("/api")) {
        const _locationHeader = req.url.includes(host) ? req.url.split(host)[1] : req.url
        requestHeaders.set('x-url', _locationHeader);
    }
    let userAgent = requestHeaders.get("user-agent")
    if(userAgent){
        let isMobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i))
        requestHeaders.set("isMobile", isMobile ? "true" : "false")
    }
    return NextResponse.next({
        request: {
            headers: requestHeaders,
        }
    });
}


