import Analytics from '#/components/utility/analytics';
import ComingSoon from '#/components/utility/comingSoon';
import React from 'react'



interface CorePluginsPageProps {

}

const CorePluginsPage = (props: CorePluginsPageProps) => {
    return <>
        <Analytics
            pageView={{
                path: "/corePlugins",
                title: "Core Plugins",
            }}
        />
        <ComingSoon />
    </>
}


CorePluginsPage.displayName = "CorePluginsPage"


export default CorePluginsPage;
