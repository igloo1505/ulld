import path from "path";
import { globSync } from "glob";
import {
    sortNoteTypeDataForParsing,
    getNoteTypeDataFromPath,
} from "@ulld/utilities/mdxParserUtils";
import {
    type GetParsedMdxFileContent,
    getParsedMdxFileContent,
} from "./getParsedMdxFileContent";

export type WriteParsedDirProps = Omit<
    GetParsedMdxFileContent,
    "rootRelativePath" | "bookmarked" | "docTypeData" | "file"
> & {
    docTypeData?: GetParsedMdxFileContent["docTypeData"];
};

export const writeParsedDirToFileSystem = async (
    props: WriteParsedDirProps,
): Promise<void> => {

    let filePaths = globSync("**/*.mdx", {
        cwd: props.appConfig.fsRoot,
        nodir: true,
        // ignore: [],
    });

    console.log("filePaths: ", filePaths);

    filePaths = [filePaths[0]] // TESTING ONLY


    const noteTypeIds = sortNoteTypeDataForParsing(props.appConfig);

    for await (const rootRelativePath of filePaths) {
        const absPath = path.join(props.appConfig.fsRoot, rootRelativePath);

        const docTypeData = props.docTypeData
            ? props.docTypeData
            : getNoteTypeDataFromPath(rootRelativePath, props.appConfig, noteTypeIds);

        if (!docTypeData) {
            console.error(`Can not save ${absPath}. No document type was found.`);
        } else {
            await getParsedMdxFileContent({
                ...props,
                file: absPath,
                docTypeData,
                rootRelativePath,
                bookmarked: false,
            });
        }
    }
};
