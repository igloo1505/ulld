import Analytics from "#/components/utility/analytics";
import ComingSoon from "#/components/utility/comingSoon";
import React from "react";

interface MyNotesPageProps { }

const MyNotesPage = (props: MyNotesPageProps) => {
    return (
        <>
            <Analytics
                pageView={{
                    path: "/demos",
                    title: "Demos Home",
                }}
            />
            <ComingSoon />
        </>
    );
};

MyNotesPage.displayName = "MyNotesPage";

export default MyNotesPage;
