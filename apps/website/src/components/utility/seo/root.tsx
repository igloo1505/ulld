import { DefaultSeo as DSEO, NextSeo } from "next-seo";
import React from "react";
import staticContent from "staticContent";

interface RootSeoProps { }

/* TODO: Come back here and handle key words and other search specific stuff. */
const DefaultSeo = (props: RootSeoProps) => {
    return (
        <DSEO
            defaultTitle="Uh Little Less Dum"
            description="Forever free, perpetually open source academic note taking."
            themeColor={staticContent.manifest.themeColor}
            additionalMetaTags={[
                {
                    name: "application-name",
                    content: "Uh Little Less Dum",
                },
{
  property: 'dc:creator',
  content: staticContent.manifest.creator
}
            ]}
        />
    );
};

DefaultSeo.displayName = "RootSeo";

export default DefaultSeo;
