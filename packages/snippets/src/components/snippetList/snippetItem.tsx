import React from "react"
import { CodeHighlightContainer } from "@ulld/ui/codeHighlightContainer";
import { Card } from "@ulld/tailwind/card";
import { MdxContentCLIENT } from "@ulld/render/mdx/client";
import { Badge } from "@ulld/tailwind/badge";
import Link from "next/link";
import { buttonVariants } from "@ulld/tailwind/button";
import { ValidatedSnippet } from "../../schemas";
import { ShikiLanguage } from "@ulld/utilities/shikiLanguages";
import CopyContentButton from "./copyContentButton";
import DeleteSnippetButton from "./deleteItemButton"

interface SnippetListItemPropsInternal {
    item: ValidatedSnippet;
}

const SnippetListItem = ({ item }: SnippetListItemPropsInternal) => {
    return (
        <Card className={"w-full h-fit flex flex-col p-4 gap-3"}>
            <div className={"relative w-full h-fit pr-8"}>
                <div className={"w-full text-lg font-semibold h-fit"}>
                    <MdxContentCLIENT content={item.description} bareAss />
                </div>
            <DeleteSnippetButton itemId={item.id} />
            </div>
            <div className={"flex flex-row justify-start items-center gap-3"}>
                {item.keywords.map((k, i) => (
                    <Link
                        key={`kw-${item.id}-${i}`}
                        href={`/snippets?${(() => {
                            let p = new URLSearchParams();
                            p.set("query", k);
                            return p.toString();
                        })()}`}
                    >
                        <Badge>{k}</Badge>
                    </Link>
                ))}
            </div>
            <CodeHighlightContainer
                className={"max-h-[max(70vh,600px)] [&_code]:!text-[12px]"}
                language={item.language as ShikiLanguage}
                noLoadingIndicator
            >
                {item.content}
            </CodeHighlightContainer>
            <div className={"flex flex-row justify-end items-center gap-4"}>
                <Link
                    href={`/snippets/add?edit=${item.id}`}
                    className={buttonVariants({})}
                >
                    Edit
                </Link>
                <CopyContentButton 
                    content={item.content}
                    language={item.language}
                >Copy</CopyContentButton>
            </div>
        </Card>
    );
};

SnippetListItem.displayName = "SnippetListItem";

export default SnippetListItem;
