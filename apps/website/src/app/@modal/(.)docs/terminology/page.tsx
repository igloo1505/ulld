import TerminologyCard from "#/components/docUtils/terminologyCard";
import { staticDocsData } from "#/staticData/docs";
import { ModalPageContainer } from "@ulld/ui/modalPage";
import { notFound } from "next/navigation";
import React from "react";

interface TerminologyDocsModalPageProps {
    searchParams: {
        id: string;
    };
}

const TerminologyDocsModalPage = ({
    searchParams: { id },
}: TerminologyDocsModalPageProps) => {
    const item = staticDocsData.terms.find((t) => t.id === id);
    if (!item) {
        return notFound();
    }
    return <ModalPageContainer>
<TerminologyCard isModal {...item}/>
    </ModalPageContainer>;
};

TerminologyDocsModalPage.displayName = "TerminologyDocsModalPage";

export default TerminologyDocsModalPage;
