import MDXArticle from "#/components/layouts/mdxArticle";
import React from "react";
import { allDemos } from "contentlayer/generated";
import { notFound } from "next/navigation";

interface MyNotesPageProps {
    searchParams: {
        page?: string;
    };
}

const MyNotesPage = ({ searchParams }: MyNotesPageProps) => {
    let pageNum = searchParams.page ? parseInt(searchParams.page) : 1;
    const myNotes = allDemos.find(
        (a) => a.sequentialId === "myNotes" && a.sequential === pageNum,
    );
    if (!myNotes) return notFound();
    return (
        <>
            <MDXArticle mdx={myNotes} />
        </>
    );
};

MyNotesPage.displayName = "MyNotesPage";

export default MyNotesPage;
