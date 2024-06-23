import NoteTypesForm from "#/components/pageSpecific/configure/forms/noteTypes";
import ConfigurationFormPageContainer from "#/components/pageSpecific/configure/pageContainer";
import { Metadata } from "next";
import React from "react";

interface ConfigureULLDProps {}

export const metadata: Metadata = {
  title: "Configure Uh Little Less Dum",
  description: "Use the online configurator to set up your personal Uh Little Less Dum environment.",
};

const ConfigureULLD = (props: ConfigureULLDProps) => {
  return (
    <ConfigurationFormPageContainer
      title="Note Organization"
      subtitle="Let's gather some information about the type of notes you intend to take."
    >
      <NoteTypesForm />
    </ConfigurationFormPageContainer>
  );
};

ConfigureULLD.displayName = "ConfigureULLD";

export default ConfigureULLD;
