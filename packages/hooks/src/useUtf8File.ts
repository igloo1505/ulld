"use client"
import {  useEffect, useState } from "react";
import { client as _client } from "@ulld/api/client";


export const useUtf8File = (filePath: string, useProcessRoot: boolean = false, client = _client) => {
    const [content, setContent] = useState<string | null>(null)
    const gatherContent = async (rootRelativePath: string) => {
       let c = await client.fsUtils.getUtf8File.query({rootRelativePath, useProcessRoot});
        setContent(c)
    };

    useEffect(() => {
       gatherContent(filePath) 
    }, [filePath])

   return content 
};
