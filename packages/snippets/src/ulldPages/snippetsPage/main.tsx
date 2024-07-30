import { SnippetsPageProps } from "../../types";


const SnippetsPage = ({ filter, list }: SnippetsPageProps) => {
    return (
        <div className={"w-full inline-block space-y-6"}>
            {filter}
            {list}
        </div>
    );
};

SnippetsPage.displayName = "SnippetsPage";

export default SnippetsPage;
