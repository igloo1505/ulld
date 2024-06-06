"use client";
import { closeAllOverlays } from "#/lib/actions/closeAllOverlays";
import { useEffect } from "react";

interface AppendCloseAllOverlaysListenerProps {
  id: string;
}

const AppendCloseAllOverlaysListener = (
  props: AppendCloseAllOverlaysListenerProps,
) => {
  useEffect(() => {
    document
      .getElementById(props.id)
      ?.addEventListener("click", closeAllOverlays);
  }, []);
  return null;
};

AppendCloseAllOverlaysListener.displayName = "AppendCloseAllOverlaysListener";

export default AppendCloseAllOverlaysListener;
