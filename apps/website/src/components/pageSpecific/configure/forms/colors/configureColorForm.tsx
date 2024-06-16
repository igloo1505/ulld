import React from "react";
import { ConfigureColorProvider } from "./colorFormContext";
import ConfigureColorFormContent from "./configureColorFormContent";
import ConfigureColorList from "./colorList";
import AddColorModal from "../../modals/addColorModal/main";

interface ConfigureColorsFormProps { }

const ConfigureColorsForm = (props: ConfigureColorsFormProps) => { 
    return (
        <ConfigureColorProvider>
            <AddColorModal />
            <ConfigureColorList />
            <ConfigureColorFormContent />
        </ConfigureColorProvider>
    );
};

ConfigureColorsForm.displayName = "ConfigureColorsForm";

export default ConfigureColorsForm;
