"use client";
import React from "react";
import { useClock } from "@ulld/hooks/useClock";
import { DateTime } from "@ulld/utilities/dateTime";

interface ClockDisplayProps {}

const ClockDisplay = (props: ClockDisplayProps) => {
  const data = useClock((d) => DateTime.formatDate(d, true, "MMMM Do YYYY hh:mm a"), "minute");
  return <div>{data.formatted}</div>;
};

ClockDisplay.displayName = "ClockDisplay";

export default ClockDisplay;
