import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { prisma } from "@ulld/database/db";
import fs from "fs";

interface RequestContext {
    // params: {
    //     id: string
    // }
}

const router = createEdgeRouter<NextRequest, RequestContext>();

const seedEquations = async (data: any) => {
    for await (const k of data["equation"]) {
        await prisma.equation.create({
            data: k,
        });
    }
    console.log("Seeded sample equations")
};

const seedTaggables = async (data: any) => {    
    for await (const k of data["tags"]) {
        await prisma.tag.create({
            data: k,
        });
    }
    for await (const k of data["subjects"]) {
        await prisma.subject.create({
            data: k,
        });
    }
    for await (const k of data["topics"]) {
        await prisma.topic.create({
            data: k,
        });
    }
    console.log("Seeded sample taggables")
}

router.get(async (req, ctx) => {
    try {
        const data = await fs.promises.readFile(
            "/Users/bigsexy/Desktop/currentProjects/ulld/packages/api/src/__tests__/testData/testData.json",
            "utf-8",
        );

        // await seedTaggables(JSON.parse(data))
        // await seedEquations(JSON.parse(data))


        return new NextResponse(JSON.stringify({ success: true }));
    } catch (err) {
        console.error(err);
        return new NextResponse(JSON.stringify({ success: false }));
    }
});

export async function GET(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx) as Promise<NextResponse<unknown>>;
}
