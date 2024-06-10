import DemoFeatureWontFunction from "#/components/docUtils/demoFeatureWontFunction";
import React from "react";

interface SearchAllPageProps { }

const SearchAllPage = (props: SearchAllPageProps) => {
    return (
        <div
            className={
                "w-full min-h-screen-noNav flex flex-col justify-center items-center gap-6"
            }
        >
            <DemoFeatureWontFunction desc="In your own app, a search results page would be displayed here." />
        </div>
    );
};

SearchAllPage.displayName = "SearchAllPage";

export default SearchAllPage;
