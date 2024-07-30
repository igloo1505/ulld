import React from 'react'
import ModularDashboard from 'src/components/modularDashboard/main';

interface SanboxPageProps {

}

const SanboxPage = (props: SanboxPageProps) => {
return (
        <div>
            <ModularDashboard />
        </div>
)
}


SanboxPage.displayName = "SanboxPage"


export default SanboxPage;
