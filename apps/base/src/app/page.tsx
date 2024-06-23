import React from 'react'
import LandingPageComponent from "#/components/slots/landingPage/main"

interface LandingPageProps {

}

const LandingPage = (props: LandingPageProps) => {
    return (
        <LandingPageComponent {...props}/>
    )
}


LandingPage.displayName = "LandingPage"


export default LandingPage;
