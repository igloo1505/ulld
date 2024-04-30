import React from 'react'
import { ModalPageContainer } from "@ulld/ui/modalPage";
import { FeatureRequestFormContainer } from '#/components/pageSpecific/featureRequest/formContainer';


interface FeatureRequestModalProps {

}

/* RESUME: Come back here and finish this up... especially the issue with react-hook-form and zod, because that will be required in several other places. */
const FeatureRequestModal = (props: FeatureRequestModalProps) => {
return (
    <ModalPageContainer 
        >
      <FeatureRequestFormContainer isModal />
    </ModalPageContainer>
)
}


FeatureRequestModal.displayName = "FeatureRequestModal"


export default FeatureRequestModal;
