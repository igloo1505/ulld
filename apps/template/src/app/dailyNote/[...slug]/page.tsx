import React from "react";
import { WithFSSearchParams } from "@ulld/types";
import NoteSwitchInternalWrapper from "#/components/notePageComponents/noteSwitchWrapper";

export const dynamic = "force-dynamic";

const categoryId: string = "dailyNote";

interface PageProps extends WithFSSearchParams {
    params: {
        slug: string;
    };
}

const NotePage = async (props: PageProps) => {
    return <NoteSwitchInternalWrapper
        {...props}
        categoryId={categoryId}
    />;
};

NotePage.displayName = `NotePage-${categoryId}`;

export default NotePage;
