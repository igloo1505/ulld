import { readAppConfig } from "@ulld/developer/readAppConfig";
import { NextResponse } from "next/server";
import { getGlobServerSide } from "@ulld/utilities/getGlobServerSide";
import { imageGlobPropsSchema } from "@ulld/utilities/filePathSchemas";

export async function POST(req: Request) {
  let _body = await req.json();
    let fileExtensions = [
        "png",
        "jpeg",
        "jpg",
        "webp"
    ]
    if(_body.includeSvg){
        fileExtensions.push('svg')
    }
    const body = imageGlobPropsSchema.parse(_body)
  try {
    let appConfig = await readAppConfig();
    let res = await getGlobServerSide({
            glob: `**/*.{${fileExtensions.join(",")}}`,
            ...body
        }, appConfig);

    return new NextResponse(
      JSON.stringify({
        filePaths: res,
      }),
      { status: 200 },
    );
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ msg: "Unable to gather fsRoot glob paths" }),
      { status: 500 },
    );
  }
}
