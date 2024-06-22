"use client";
import React, { ChangeEvent, useState } from "react";

interface BetaLandingPageSearchInputProps { }

export const BetaLandingPageSearchInput = (
    props: BetaLandingPageSearchInputProps,
) => {
    const [value, setValue] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => { };
    return (
        <div>
            <input value={value} onChange={handleChange} />
        </div>
    );
};

BetaLandingPageSearchInput.displayName = "BetaLandingPageSearchInput";
