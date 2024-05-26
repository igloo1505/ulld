import ContactMeCard from '#/components/interaction/modals/contactCard/main';
import { ModalPageContainer } from '@ulld/ui/modalPage';
import React from 'react'



interface ContactMeModalPageProps {

}

const ContactMeModalPage = (props: ContactMeModalPageProps) => {
return (
    <ModalPageContainer 
        >
      <ContactMeCard isModal />
    </ModalPageContainer>
)
}


ContactMeModalPage.displayName = "ContactMeModalPage"


export default ContactMeModalPage;
