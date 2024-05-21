import Analytics from '#/components/utility/analytics';
import ComingSoon from '#/components/utility/comingSoon';
import React from 'react'


interface CommunityPluginsPageProps {

}

const CommunityPluginsPage = (props: CommunityPluginsPageProps) => {
    return (
        <>
            <Analytics
                pageView={{
                    path: "/community/plugins",
                    title: "Community Plugins",
                }}
            />
            <ComingSoon />
        </>
    );
}


CommunityPluginsPage.displayName = "CommunityPluginsPage"


export default CommunityPluginsPage;
