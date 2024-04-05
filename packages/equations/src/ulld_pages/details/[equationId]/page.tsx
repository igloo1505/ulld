import EquationDetailDisplay from '../../../components/equationDetailDisplay'
import PageContentContainer from '@ulld/ui/pageContentContainer'
import { serverClient } from '@ulld/api/serverClient'
import { notFound } from 'next/navigation'
import React from 'react'



interface EquationDetailsPageProps {
    params: {
        equationId: string
    }
}

const EquationDetailsPage = async ({ params: { equationId } }: EquationDetailsPageProps) => {
    const equation = await serverClient.equations.getEquationById({
        ...(`${parseInt(equationId)}` === equationId ? { id: parseInt(equationId) } : { equationId })
    })
    console.log("equation: ", equation)
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
