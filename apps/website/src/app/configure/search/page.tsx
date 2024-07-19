import { SearchConfigurationForm } from '#/components/pageSpecific/configure/forms/search/form'
import ConfigurationFormPageContainer from '#/components/pageSpecific/configure/pageContainer'
import React from 'react'

interface SearchConfigurationPageProps {

}

const SearchConfigurationPage = (props: SearchConfigurationPageProps) => {
return (
        <ConfigurationFormPageContainer
            title="Search Settings"
            subtitle="Configure some baseline settings to help with sorting and organizing your search results."
        >
            <SearchConfigurationForm />
        </ConfigurationFormPageContainer>
)
}


SearchConfigurationPage.displayName = "SearchConfigurationPage"

export default SearchConfigurationPage
