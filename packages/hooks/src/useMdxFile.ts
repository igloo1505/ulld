import { useEffect, useState } from "react";
import { client } from "@ulld/api/client";

export const useMdxFile = (filePath: string) => {
    const [content, setContent] = useState<Awaited<ReturnType<typeof client.mdx.getFsMdx.query>> | null>(null);
    const gatherContent = async () => {
        let res = await client.mdx.getFsMdx.query({
            rootRelativePath: filePath,
            extension: ".mdx"
        });
        setContent(res);
    };
    useEffect(() => { 
        gatherContent()
    }, [filePath]);
    return content
};
