import ConfigureColorsForm from "#/components/pageSpecific/configure/forms/colors/configureColorForm";
import ConfigurationFormPageContainer from "#/components/pageSpecific/configure/pageContainer";
import React from "react";

const ColorsConfigurationPage = () => {
    return (
        <ConfigurationFormPageContainer
            title="Color Settings"
            subtitle="Some reasonable styles and colors are applied by default. You can modify or extend them here."
        >
            <ConfigureColorsForm />
        </ConfigurationFormPageContainer>
    );
};

ColorsConfigurationPage.displayName = "ColorsConfigurationPage";

export default ColorsConfigurationPage;
