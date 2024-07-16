import {
  BibEntryDataTableOutput,
  BibEntry,
} from "@ulld/api/classes/prismaMdxRelations/bibEntry";
import { BibCore } from "@ulld/api/classes/prismaMdxRelations/Bib";
import { client } from "@ulld/api/client";
import { DynamicIcon } from "@ulld/icons";
import { useToast } from "@ulld/tailwind/use-toast";
import React, { useEffect, useState } from "react";
import { BibliographyPageProps } from "../../../types";
import { Button } from "@ulld/tailwind/button";
import { showBibEntryDetails } from "../../../utils/showBibEntryDetails";
import BibTable from "./bibTable";

const BibliographyPage = ({
  databaseBib: prismaBib,
  loadingIndicator: LoadingIndicator,
  bibEntryDetailsSheet: BibEntryDetailsSheet,
}: BibliographyPageProps) => {
  const [tableItems, setTableItems] = useState<
    BibEntryDataTableOutput[] | null
  >(null);
  const [bib, setBib] = useState<BibCore | null>(null);
  const { toast } = useToast();
  const _setBibItems = async () => {
    if (prismaBib) {
      let _bib = BibCore.fromPrisma(prismaBib);
      setTableItems(_bib.toDataTable());
      setBib(_bib);
    }
  };
  useEffect(() => {
    _setBibItems();
  }, []);

  const syncBib = async () => {
    if (!bib) return;
    await bib.readFile();
    let newBib = await client.bibliography.syncBibServerSide.mutate(
      bib?.id || undefined,
    );
    if (newBib) {
      const newEntries = newBib.entries.map((e) =>
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
    <div className={""}>
      <div className={"flex flex-row justify-between items-center"}>
        <div
          className={"w-fit flex flex-row justify-center items-center gap-2"}
        >
          <DynamicIcon name="bibliography" />
          <h1 className={"text-2xl"}>Bibliography</h1>
        </div>
        {bib && <Button onClick={syncBib}>Sync</Button>}
      </div>
      {tableItems ? (
        <BibTable
          bibEntries={tableItems}
          setActiveItem={(id: string) => {
            if (!bib) return;
            let selected = bib.findEntryById(id);
            if (selected && selected.prismaEntry) {
              showBibEntryDetails(selected.prismaEntry);
            }
          }}
        />
      ) : (
        <LoadingIndicator loading />
      )}
    </div>
  );
};

BibliographyPage.displayName = "BibliographyPage";

export default BibliographyPage;
