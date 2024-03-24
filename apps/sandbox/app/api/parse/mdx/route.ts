// NOTE: Remove this if the parsers package can work without requiring components to be passed in during compilation. If they can be passed in first at runtime, there won't be this issue with circular dependencies and lifting up the necessary components that will in turn require a package that is now a dependency.
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { compile } from "@mdx-js/mdx";
import { prisma } from "#/db/db";
import { getCorsHeaders, optionsMethodResponse } from "@ulld/utilities/cors";
import { z } from "zod";

interface RequestContext {
    // params: {
    //     id: string
    // }
}

const router = createEdgeRouter<NextRequest, RequestContext>();

const parseMdxProps = z.object({
    content: z.string(),
});



router.post(async (req, ctx) => {
    try {
        const { content } = await req.json();

        let parsed = await compile(content, {
            outputFormat: "function-body",
         });

        let res = new NextResponse(
            JSON.stringify({ success: true }),
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
