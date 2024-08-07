import { SnippetsPageProps } from "../../types";

const SnippetsPage = ({ filter, list }: SnippetsPageProps) => {
    return (
        <div className={"w-full inline-block space-y-6 px-8 md:px-16 pb-8 md:pb-16"}>
            <>{filter}</>
            <>{list}</>
        </div>
    );
};

SnippetsPage.displayName = "SnippetsPage";

export default SnippetsPage;
