import React from "react";
import { ModalPageContainer } from "@ulld/ui/modalPage";
import { MailingListSignupCard } from "#/components/pageSpecific/mailingList/card";

interface JoinMailingListModalPageProps {}

const JoinMailingListModalPage = (props: JoinMailingListModalPageProps) => {
  return (
    <ModalPageContainer>
      <MailingListSignupCard isModal />
    </ModalPageContainer>
  );
};

JoinMailingListModalPage.displayName = "JoinMailingListModalPage";

export default JoinMailingListModalPage;
