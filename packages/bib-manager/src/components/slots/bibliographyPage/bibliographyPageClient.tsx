"use client";
import {
    BibEntryDataTableOutput,
    BibEntry,
} from "@ulld/api/classes/prismaMdxRelations/bibEntry";
import { BibCore } from "@ulld/api/classes/prismaMdxRelations/Bib";
import { client } from "@ulld/api/client";
import { DynamicIcon } from "@ulld/icons";
import { useToast } from "@ulld/tailwind/use-toast";
import React, { useEffect, useState, ReactNode } from "react";
import { BibliographyPageProps } from "../../../types";
import { Button } from "@ulld/tailwind/button";
import { showBibEntryDetails } from "../../../utils/showBibEntryDetails";
import BibTable from "./bibTable";
import { useAppConfig } from "@ulld/hooks/useAppConfig";
import { AppConfigSchemaOutput } from "@ulld/configschema/types";

interface BibPageInternalProps
    extends Omit<
        BibliographyPageProps,
        "loadingIndicator" | "bibEntryDetailsSheet"
    > {
    loadingIndicator: ReactNode;
}

const BibliographyPageClient = ({
    databaseBib: prismaBib,
    loadingIndicator,
}: BibPageInternalProps) => {
    const [hasSetData, setHasSetData] = useState(false);
    const [appConfig] = useAppConfig();

    const [tableItems, setTableItems] = useState<BibEntryDataTableOutput[]>([]);

    const [bib, setBib] = useState<BibCore | null>(null);

    const { toast } = useToast();

    const _setBibItems = async (ac: AppConfigSchemaOutput) => {
        if (prismaBib) {
            let _bib = BibCore.fromPrisma(prismaBib, ac);
            console.log("_bib: ", _bib)
            setTableItems(_bib.toDataTable());
            setBib(_bib);
            setHasSetData(true);
        }
    };

    useEffect(() => {
        if (appConfig && !hasSetData) {
            _setBibItems(appConfig);
        }
    }, [appConfig, prismaBib]);

    const syncBib = async () => {
        if (!bib) return;
        await bib.readFile();
        let newBib = await client.bibliography.syncBib.mutate({
            bibId: bib?.id || undefined,
        });
        if (newBib && !("errorKey" in newBib)) {
            const newEntries = newBib.entries.map((e) =>
                /* TODO: Come back and handle this. Haven't tested this method yet in production because the bib syncs as part of the onSync route, but should still make sure this is enabled. */
                BibEntry.fromPrisma(e).toDataTable(),
            );
            setTableItems(newEntries);
            toast({
                title: "Success",
                description: "Bibliography has been synced from file system.",
            });
        }
    };

    return (
        <div className={"p-8 md:px-16"}>
            <div className={"flex flex-row justify-between items-center"}>
                <div
                    className={"w-fit flex flex-row justify-center items-center gap-2"}
                >
                    <DynamicIcon name="bibliography" />
                    <h1 className={"text-2xl"}>Bibliography</h1>
                </div>
                {bib && <Button onClick={syncBib}>Sync</Button>}
            </div>
            {hasSetData ? (
                <BibTable
                    bibEntries={tableItems}
                    bib={bib}
                />
            ) : (
                <>{loadingIndicator}</>
            )}
        </div>
    );
};

BibliographyPageClient.displayName = "BibliographyPage";

export default BibliographyPageClient;
