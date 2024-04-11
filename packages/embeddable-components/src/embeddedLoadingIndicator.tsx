import React from "react";
import { RingLoader } from "react-spinners";


export const EmbeddedLoadingIndicator = () => {
    return (
        <RingLoader
            size="200"
            color="hsl(var(--primary))"
        />
    );
};

EmbeddedLoadingIndicator.displayName = "EmbeddedLoadingIndicator";
