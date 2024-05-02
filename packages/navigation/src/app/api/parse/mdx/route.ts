// NOTE: Remove this if the parsers package can work without requiring components to be passed in during compilation. If they can be passed in first at runtime, there won't be this issue with circular dependencies and lifting up the necessary components that will in turn require a package that is now a dependency.
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { getCorsHeaders, optionsMethodResponse } from "@ulld/utilities/cors";
import {parseMdxProps} from "@ulld/utilities/schemas/mdx/parseMdxStringProps"
import { serverClient } from "@ulld/api/serverClient";


interface RequestContext {
    // params: {
    //     id: string
    // }
}

const router = createEdgeRouter<NextRequest, RequestContext>();


router.post(async (req, ctx) => {
    try {
        const params = await req.json();
        const parsedParams = parseMdxProps.parse(params)
        let compiled = await serverClient.beta.parseMdxString(parsedParams)

        let res = new NextResponse(
            JSON.stringify({ success: true, compiled }),
            getCorsHeaders(req, 200),
        );

        return res;
    } catch (err) {
        console.error(err);
        return new NextResponse(
            JSON.stringify({ success: false }),
            getCorsHeaders(req, 500),
        );
    }
});

export async function POST(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx) as Promise<NextResponse>;
}

export const OPTIONS = optionsMethodResponse;
