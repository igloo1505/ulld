import { MailingListSignupCard } from "#/components/pageSpecific/mailingList/card";
import React from "react";

interface JoinMailingListPageProps {}

const JoinMailingListPage = (props: JoinMailingListPageProps) => {
  return (
    <div className={"w-full h-screen flex flex-col justify-center items-center px-4"}>
      <MailingListSignupCard />
    </div>
  );
};

JoinMailingListPage.displayName = "JoinMailingListPage";

export default JoinMailingListPage;
