import React from 'react'
import { ModalPageContainer } from "@ulld/ui/modalPage";
import { FeatureRequestFormContainer } from '#/components/pageSpecific/featureRequest/formContainer';


interface FeatureRequestModalProps {

}

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
