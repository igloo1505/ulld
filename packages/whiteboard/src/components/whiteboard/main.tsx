import { ReduxProvider } from "@ulld/state/wrappers/ReduxProvider";
import { WhiteboardRootProps, WBoard } from "./whiteboard";
import { serverClient } from "@ulld/api/serverClient";
import { ExcalidrawInitialDataState } from "@excalidraw/excalidraw/types/types";
import { jsonParseWhiteboard } from "../../lib/formatReturnedState";

export const Whiteboard = async (
  props: Omit<WhiteboardRootProps, "initialData">,
) => {
  const i = await serverClient.whiteboard.getById({
    id: props.id,
  });

    const iData = i?.data.toString("utf-8")

  const initialData = iData ? jsonParseWhiteboard(iData) : undefined;

  return (
    <ReduxProvider>
      <WBoard {...props} initialData={initialData} />
    </ReduxProvider>
  );
};
