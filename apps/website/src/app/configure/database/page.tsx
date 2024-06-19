import { LogoAsText } from '#/components/general/logoAsText';
import { DatabaseConfigurationForm } from '#/components/pageSpecific/configure/forms/database/form';
import ConfigurationFormPageContainer from '#/components/pageSpecific/configure/pageContainer';
import React from 'react'



interface DatabaseConfigurationPageProps {

}

const DatabaseConfigurationPage = (props: DatabaseConfigurationPageProps) => {
return (
        <ConfigurationFormPageContainer
            title="Database Settings"
            subtitle={<><LogoAsText fontSize={13} /> defaults to SQLite for it's ease of installation, but permits Postgres for performance and portability.</>}
        >
            <DatabaseConfigurationForm />
        </ConfigurationFormPageContainer>
)
}


DatabaseConfigurationPage.displayName = "DatabaseConfigurationPage"


export default DatabaseConfigurationPage;
