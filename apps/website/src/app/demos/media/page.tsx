import Analytics from "#/components/utility/analytics";
import ComingSoon from "#/components/utility/comingSoon";
import React from "react";

interface MediaDemoPageProps { }

const MediaDemoPage = (props: MediaDemoPageProps) => {
    return (
        <>
            <Analytics
                pageView={{
                    path: "/demos/media",
                    title: "Demos: Media",
                }}
            />
            <ComingSoon />
        </>
    );
};

MediaDemoPage.displayName = "MediaDemoPage";

export default MediaDemoPage;
