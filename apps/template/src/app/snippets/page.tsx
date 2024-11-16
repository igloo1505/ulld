// ULLD: protected-path pageFor:snippets/SnippetListPage
import SnippetFilter from "#/components/slots/snippets/snippetFilter";
import SnippetList from "#/components/slots/snippets/snippetList";
import SnippetPageWrapper from "#/corePages/snippets/pageWrapper";
import { serverClient } from "#/trpc/mainServer";
import { snippetSchema } from "@ulld/snippets/schemas";
import { DisableBookmark } from "@ulld/utilities/disableBookmark";
import React from "react";

interface SnippetsPageTemplateProps {
    searchParams: any;
}

const SnippetsPageTemplate = async ({
    searchParams,
}: SnippetsPageTemplateProps) => {
    const _snippets = await serverClient.snippets.getSnippets(searchParams);

    const snippets = snippetSchema.array().parse(_snippets);

    return (
        <>
            <DisableBookmark />
            <SnippetPageWrapper
                list={<SnippetList snippets={snippets} searchParams={searchParams} />}
                filter={<SnippetFilter searchParams={searchParams} />}
            />
        </>
    );
};

SnippetsPageTemplate.displayName = "SnippetsPageTemplate";

export default SnippetsPageTemplate;
