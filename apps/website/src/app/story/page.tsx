import Analytics from "#/components/utility/analytics";
import ComingSoon from "#/components/utility/comingSoon";
import React from "react";

interface ULLDStoryPageProps { }

const ULLDStoryPage = (props: ULLDStoryPageProps) => {
    return (
        <>
            <Analytics
                pageView={{
                    path: "/story",
                    title: "Story Of ULLD",
                }}
            />
            <ComingSoon />
        </>
    );
};

ULLDStoryPage.displayName = "ULLDStoryPage";

export default ULLDStoryPage;
