import React from "react";

interface SponsorshipRequestFormProps { }

const SponsorshipRequestForm = (props: SponsorshipRequestFormProps) => {
    if (process.env.NODE_ENV === "production") return null;
    return <div>Sponsorship request form here</div>;
};

SponsorshipRequestForm.displayName = "SponsorshipRequestForm";

export default SponsorshipRequestForm;
