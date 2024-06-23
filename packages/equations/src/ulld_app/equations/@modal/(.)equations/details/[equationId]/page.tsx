import {ModalPageContainer} from '@ulld/ui/modalPage'
import { serverClient } from '@ulld/api/serverClient'
import React from 'react'
import EquationDetailDisplay from '../../../../../../components/equationDetailDisplay'


export interface PageProps {
    params: {
        equationId: string
    }
}


/* TODO: Come back and handle this. It works in the page version well, but this is not rendering properly and requiring a refresh to be visible. Docs: https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#modals */
const EquationDetailModal = async ({ params: { equationId } }: PageProps) => {
    const equation = await serverClient.equations.getEquationById({
        ...(`${parseInt(equationId)}` === equationId ? { id: parseInt(equationId) } : { equationId })
    })
    if (!equation) return null
    return (
        <ModalPageContainer>
            <EquationDetailDisplay
                isModal
                equation={equation}
            />
        </ModalPageContainer>
    )
}


EquationDetailModal.displayName = "EquationDetailModal"


export default EquationDetailModal;
