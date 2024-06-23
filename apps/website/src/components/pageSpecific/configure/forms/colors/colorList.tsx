"use client";
import React from "react";
import ColorTable from "./colorTable";


const ConfigureColorList = () => {
    return (
        <div className={"w-full space-y-4 [&_div]:overflow-y-hidden"}>
            <ColorTable />
        </div>
    );
};

ConfigureColorList.displayName = "ConfigureColorList";

export default ConfigureColorList;
