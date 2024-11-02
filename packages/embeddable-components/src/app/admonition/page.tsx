import React, { type ReactNode } from "react";
import { MdxContentRSC } from "@ulld/render/mdx-rsc";
/* import { getTestMdxContent } from "@ulld/test-utils/getTestMdxContent"; */


const getTestMdxContent = (body: string): string => {
    const now = new Date()
    return `---
title: My Test Title
created: ${now.getMonth()}-${now.getDay()}-${now.getFullYear()}
---

${body}

`
}


const content = getTestMdxContent(`
<Admonition title="Regular admonition with a really really really long title and stuff" type="info">
Some admonition body
</Admonition>


<Admonition title="Regular admonition with a really really really long title and stuff" type="info" dropdown>
Some admonition body
</Admonition>

<Admonition title="Regular admonition with a really really really long title and stuff" type="info" sidebar>
Sidebar admonition
</Admonition>
`)



const AdmonitionDemoPage = (): ReactNode => {
    return (
        <div className="w-full h-fit min-h-screen p-8 flex flex-col justify-center items-center">
            <MdxContentRSC
                className="w-full"
                content={content}
                noConfig
            />
        </div>
    )
};

AdmonitionDemoPage.displayName = "AdmonitionDemoPage";

export default AdmonitionDemoPage;
