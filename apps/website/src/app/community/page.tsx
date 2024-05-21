import Analytics from "#/components/utility/analytics";
import ComingSoon from "#/components/utility/comingSoon";
import React from "react";

interface CommunityPageProps { }

const CommunityPage = (props: CommunityPageProps) => {
    return (
        <>
            <Analytics
                pageView={{
                    path: "/community",
                    title: "Community Home",
                }}
            />
            <ComingSoon />
        </>
    );
};

CommunityPage.displayName = "CommunityPage";

export default CommunityPage;
