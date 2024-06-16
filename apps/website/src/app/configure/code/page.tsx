import CodeSettingsForm from '#/components/pageSpecific/configure/forms/codeSettings/codeSettings';
import ConfigurationFormPageContainer from '#/components/pageSpecific/configure/pageContainer';
import React from 'react'

interface CodeConfigurationPageProps {

}


const CodeConfigurationPage = (props: CodeConfigurationPageProps) => {
return (
    <ConfigurationFormPageContainer
      title="Code Settings"
      subtitle="If you use code or are planning to learn, take a minute to set some default settings."
    >

      <CodeSettingsForm />
    </ConfigurationFormPageContainer>
)
}


CodeConfigurationPage.displayName = "CodeConfigurationPage"


export default CodeConfigurationPage;
