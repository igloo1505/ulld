import Analytics from "#/components/utility/analytics";
import ComingSoon from "#/components/utility/comingSoon";
import React from "react";

interface TeacherDocumentationPageProps { }

const TeacherDocumentationPage = (props: TeacherDocumentationPageProps) => {
    return (
        <>
            <Analytics
                pageView={{
                    path: "/docs/teachers",
                    title: "Documentation: Teachers",
                }}
            />
            <ComingSoon />
        </>
    );
};

TeacherDocumentationPage.displayName = "TeacherDocumentationPage";

export default TeacherDocumentationPage;
