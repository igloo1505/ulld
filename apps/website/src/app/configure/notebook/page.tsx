import { LogoAsText } from '#/components/general/logoAsText';
import { NotebookConfigurationForm } from '#/components/pageSpecific/configure/forms/notebooks/form';
import ConfigurationFormPageContainer from '#/components/pageSpecific/configure/pageContainer';
import React from 'react'



interface NotebookConfigurationPageProps {

}

const NotebookConfigurationPage = (props: NotebookConfigurationPageProps) => {
return (
        <ConfigurationFormPageContainer
            title="Notebook Settings"
            subtitle={<><LogoAsText fontSize={13} /> currently supports Jupyter integration out of the box, but relies on a third party package that is causing some UI issues inside of notebooks. An internally developed replacement is on the way.</>}
        >
            <NotebookConfigurationForm />
        </ConfigurationFormPageContainer>
)
}


NotebookConfigurationPage.displayName = "NotebookConfigurationPage"


export default NotebookConfigurationPage;
