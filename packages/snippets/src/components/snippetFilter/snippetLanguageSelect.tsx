"use client";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@ulld/tailwind/select";
import { SnippetFilterParams } from "../../types";
import shikiLanguageList from "@ulld/utilities/shikiLanguages";
import { useRouter } from "next/navigation";
import { clearNullSearchParams } from "@ulld/utilities/searchUtils";

interface SnippetLanguageSelectProps {
    params: SnippetFilterParams;
}

const languageOpts = ["All", ...shikiLanguageList];

const SnippetLanguageSelect = ({ params }: SnippetLanguageSelectProps) => {
    const router = useRouter();

    const handleSelectChange = (value: string) => {
        if (value === "all") {
            return router.push(`/snippets`);
        }
        let p = params
            ? new URLSearchParams(params as Record<string, string>)
            : new URLSearchParams();
        p.set("language", value);
        p = clearNullSearchParams(p);
        router.push(`/snippets?${p.toString()}`);
    };

    return (
        <Select
            onValueChange={handleSelectChange}
            defaultValue={params.language || languageOpts[0]}
        >
            <SelectTrigger className={"min-w-1/3 sm:min-w-[200px]"}>
                <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
                {languageOpts.map((k) => {
                    return (
                        <SelectItem key={k} value={k}>
                            {k}
                        </SelectItem>
                    );
                })}
            </SelectContent>
        </Select>
    );
};

SnippetLanguageSelect.displayName = "SnippetLanguageSelect";

export default SnippetLanguageSelect;
