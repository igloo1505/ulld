import { httpBatchLink as hlink } from "@trpc/client";

export const httpBatchLink = (ctx?: any) => {
    if (ctx) {
        return [
            hlink({
                url: "/api/trpc",
                headers() {
                    if (!ctx?.req?.headers) {
                        return {};
                    }
                    // To use SSR properly, you need to forward client headers to the server
                    // This is so you can pass through things like cookies when we're server-side rendering
                    return {
                        cookie: ctx.req.headers.cookie,
                    };
                }
            })
        ]
    }
    return [
        hlink({
            url: "/api/trpc",
        })
    ]
}
