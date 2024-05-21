import Analytics from "#/components/utility/analytics";
import ComingSoon from "#/components/utility/comingSoon";
import React from "react";

interface UserDocsHomePageProps {}

const UserDocsHomePage = (props: UserDocsHomePageProps) => {
            return <>
            <Analytics
                pageView={{
                    path: "/docs/user",
                    title: "Documentation: User",
                }}
            />
            <ComingSoon />
        </>
};

UserDocsHomePage.displayName = "UserDocsHomePage";

export default UserDocsHomePage;
