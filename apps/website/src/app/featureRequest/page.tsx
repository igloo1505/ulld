import React from 'react'
import { FeatureRequestFormContainer } from '#/components/pageSpecific/featureRequest/formContainer';


interface FeatureRequestPageProps {

}


const FeatureRequestPage = (props: FeatureRequestPageProps) => {
return (
    <div className={"min-h-screen flex flex-col justify-center items-center gap-6"}>
      <FeatureRequestFormContainer />
    </div>
)
}


FeatureRequestPage.displayName = "FeatureRequestPage"


export default FeatureRequestPage;
