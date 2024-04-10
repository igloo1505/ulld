import EquationDetailDisplay from '../../../../components/equationDetailDisplay'
import { PageContentContainer } from '@ulld/ui/pageContentContainer'
import { serverClient } from '@ulld/api/serverClient'
import { notFound } from 'next/navigation'
import React from 'react'



export interface PageProps {
    params: {
        equationId: string
    }
}

const EquationDetailsPage = async ({ params: { equationId } }: PageProps) => {
    const equation = await serverClient.equations.getEquationById({
        ...(`${parseInt(equationId)}` === equationId ? { id: parseInt(equationId) } : { equationId })
    })
    if (!equation) return notFound()
    return (
        <PageContentContainer center>
            <EquationDetailDisplay
                equation={equation}
            />
        </PageContentContainer>
    )
}


EquationDetailsPage.displayName = "EquationDetailsPage"


export default EquationDetailsPage;
