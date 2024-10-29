import { LogoAsText } from "#/components/general/logoAsText";
import { NotebookConfigurationForm } from "#/components/pageSpecific/configure/forms/notebooks/form";
import ConfigurationFormPageContainer from "#/components/pageSpecific/configure/pageContainer";
import { Admonition } from "@ulld/embeddable-components/components/client/admonition";
import React from "react";

interface NotebookConfigurationPageProps {}

const NotebookConfigurationPage = (props: NotebookConfigurationPageProps) => {
  return (
    <ConfigurationFormPageContainer
      title="Notebook Settings"
      subtitle={
        <>
          Tell <LogoAsText fontSize={13} /> about your work environment so we
          can integrate with Jupyter. If you do not use Jupyter in your
          workflow, you can skip this section.
        </>
      }
    >
        <Admonition title="Update" type="bug" dropdown open>
          <LogoAsText fontSize={13} /> currently supports Jupyter integration
          out of the box, but relies on a third party package that is causing
          some UI issues inside of notebooks. Most if not all of these bugs have to do with syntax highlighting and the lack of support for the editor that is integrated elsewhere within <LogoAsText className={"!mt-0"} fontSize={13} />. An internally developed
          replacement is on the way, and current Jupyter support will not put your content at risk and remains functional, 98% of the time.
        </Admonition>
      <NotebookConfigurationForm />
    </ConfigurationFormPageContainer>
  );
};

NotebookConfigurationPage.displayName = "NotebookConfigurationPage";

export default NotebookConfigurationPage;
