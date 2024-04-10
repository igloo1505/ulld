import React from 'react'
import EquationsPage, { PageProps } from '../../ulld_app/equations/page';


const EquationPageWrapper = (props: PageProps) => {
return (
    <EquationsPage {...props} />
)
}


EquationPageWrapper.displayName = "EquationPageWrapper"


export default EquationPageWrapper;
