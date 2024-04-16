import React from 'react'
import EquationDetailsPage, { PageProps } from '../../../../ulld_app/equations/details/[equationId]/page';


const ULLDEquationDetailsPage = (props: PageProps) => {
    return <EquationDetailsPage {...props}/>
}


ULLDEquationDetailsPage.displayName = "EquationDetailsPage"


export default ULLDEquationDetailsPage;
