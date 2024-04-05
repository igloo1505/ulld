import React from 'react'
import PageContentContainer from '@ulld/ui/pageContentContainer'
import { serverClient } from '@ulld/api/serverClient'
import AddEquationFormWrapper, { EditEquationItem } from '../../components//addEquationFormWrapper'



interface AddEquationPageProps {
    searchParams: {
        edit?: string
    }
}



const AddEquationPage = async ({ searchParams: { edit } }: AddEquationPageProps) => {
    let editItem: null | EditEquationItem = null;
    if (edit) {
        editItem = await serverClient.equations.getEquationById({
            id: parseInt(edit)
        })
    }

    return (
        <PageContentContainer>
            <AddEquationFormWrapper edit={editItem} />
        </PageContentContainer>
    )
}


AddEquationPage.displayName = "AddEquationPage"


export default AddEquationPage;
