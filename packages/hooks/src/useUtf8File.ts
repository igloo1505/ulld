import { useEffect, useState } from "react";
import { client } from "@ulld/api/client";

export const useUtf8File = (filePath: string, useProcessRoot: boolean = false) => {
    const [content, setContent] = useState<string | null>(null);
    const gatherContent = async (rootRelativePath: string) => {
        let fileContent = await client.fsUtils.getUtf8File.query({rootRelativePath, useProcessRoot});
        console.log("fileContent: ", fileContent)
        setContent(fileContent);
    };
    useEffect(() => {
        gatherContent(filePath);
    }, [filePath]);
    return content
};
