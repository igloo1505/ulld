import React from 'react'
import { PageContentContainer } from '@ulld/ui/pageContentContainer'
import { serverClient } from '@ulld/api/serverClient'
import AddEquationFormWrapper, { EditEquationItem } from '../../../components//addEquationFormWrapper'


/* TODO: Must be called PageProps for all pages to export dynamically to compiled app during the build process. */
export interface PageProps {
    searchParams: {
        edit?: string
    }
}



const AddEquationPage = async ({ searchParams: { edit } }: PageProps) => {
    let editItem: null | EditEquationItem = null;
    if (edit) {
        editItem = await serverClient.equations.getEquationById({
            id: parseInt(edit)
        })
    }

    return (
        <AddEquationFormWrapper edit={editItem} />
    )
}


AddEquationPage.displayName = "AddEquationPage"


export default AddEquationPage;
