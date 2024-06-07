import MDXArticle from "#/components/layouts/mdxArticle";
import React from "react";
import { allMyNotes, allStaticDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";

interface MyNotesPageProps {
    searchParams: {
        id?: string;
    };
}

const MyNotesPage = ({ searchParams: {
    id
} }: MyNotesPageProps) => {
    if(id){
    const myNotes = allMyNotes.find((a) => a.id === id);
    if (!myNotes) return notFound();
    return (
        <>
            <MDXArticle
                    mdx={myNotes}
        paddingTop={false}
                />
        </>
    );
    }
    let item = allStaticDocs.find((a) => a.id === "myWorkHome")

    if(!item){
        throw new Error("myWorkHome article was not found.")
    }

    return <MDXArticle
        mdx={item}
        paddingTop={false}
    />
};

MyNotesPage.displayName = "MyNotesPage";

export default MyNotesPage;
