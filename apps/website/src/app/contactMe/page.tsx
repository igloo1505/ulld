import ContactMeCard from "#/components/interaction/modals/contactCard/main";
import React from "react";

interface ContactMePageProps {}

const ContactMePage = (props: ContactMePageProps) => {
  return (<div className={"min-h-screen-noNav w-full flex flex-col justify-center items-center gap-6 pt-[76px]"}>
    <ContactMeCard />
    </div>)
};

ContactMePage.displayName = "ContactMePage";

export default ContactMePage;
