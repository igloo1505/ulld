import React from 'react'
import { FeatureRequestFormContainer } from '#/components/pageSpecific/featureRequest/formContainer';
import Analytics from '#/components/utility/analytics';


interface FeatureRequestPageProps {

}


const FeatureRequestPage = (props: FeatureRequestPageProps) => {
return (
    <div className={"min-h-screen flex flex-col justify-center items-center gap-6"}>
            <Analytics 
                pageView={{
                    path: "/featureRequest",
                    title: "Feature Request"
                }}
            />
      <FeatureRequestFormContainer />
    </div>
)
}


FeatureRequestPage.displayName = "FeatureRequestPage"


export default FeatureRequestPage;
