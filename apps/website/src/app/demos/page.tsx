import MDXArticle from "#/components/layouts/mdxArticle";
import { allStaticDocs } from "contentlayer/generated";
import React from "react";

interface MyNotesPageProps {}

const MyNotesPage = (props: MyNotesPageProps) => {
    const item = allStaticDocs.find((a) => a.id === "demosHome");
    if (!item) {
        throw new Error("No navigation demo found");
    }
    return <MDXArticle
        paddingTop={false}
        mdx={item}
    />;
};

MyNotesPage.displayName = "MyNotesPage";

export default MyNotesPage;
