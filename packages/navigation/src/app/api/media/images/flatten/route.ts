import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import fs from "fs";
import Sharp from "sharp";
import { cookies } from "next/headers";
import { readAppConfig } from "@ulld/developer/readAppConfig";
import { ensureAbsolute } from "@ulld/utilities/fsUtils";


export async function GET(req: NextRequest){
    try {
        const config = await readAppConfig();
        const {
            path: imgPath,
            width = 600,
            height = 600,
            backgroundColor,
        }: {
            path: string;
            width?: number;
            height?: number;
            backgroundColor?: string;
        } = await req.json();
        const finalPath = ensureAbsolute(imgPath, config.fsRoot);
        let img = await fs.promises.readFile(finalPath);
        const cookieJar = cookies();
        const darkMode = cookieJar.has("darkMode");
        const background = backgroundColor
            ? backgroundColor
            : darkMode
                ? "#0f172a"
                : "#fff";
        let sImg = Sharp(img);
        const imgMeta = await sImg.metadata();
        const w = imgMeta.width
        const h = imgMeta.height
        const newHeight = (h && w) ? h * width / w : height
        let parsedImg = await sImg
            .threshold(245)
            .resize(width, newHeight)
            .flatten({ background })
            .toBuffer();

        let res = new NextResponse(parsedImg, {
            headers: {
                "Content-Type": "image/png",
            },
        });
        return res;
    } catch (err) {
        console.error(err);
        return new NextResponse(JSON.stringify({ success: false }));
    }
}
