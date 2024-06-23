import React from "react";
import { ConfigureColorProvider } from "./colorFormContext";
import ConfigureColorList from "./colorList";
import AddColorModal from "../../modals/addColorModal/main";
import EditColorModal from "../../modals/editColorModal/main";

interface ConfigureColorsFormProps { }

const ConfigureColorsForm = (props: ConfigureColorsFormProps) => { 
    return (
        <ConfigureColorProvider>
            <AddColorModal />
            <EditColorModal />
            <ConfigureColorList />
        </ConfigureColorProvider>
    );
};

ConfigureColorsForm.displayName = "ConfigureColorsForm";

export default ConfigureColorsForm;
