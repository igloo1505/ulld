import { slotFields } from "../slotsSchema";
import { UISubSlotNames } from "../subslots/UI";
import { commandPaletteSubSlotNames } from "../subslots/commandPalette";
import { navigationSubSlotNames } from "../subslots/navigation";

export const slotMap: { [k in keyof typeof slotFields]: string[] } = {
  UI: UISubSlotNames,
  commandPalette: commandPaletteSubSlotNames,
  navigation: navigationSubSlotNames,
  plot: [],
  bibliography: [],
  calendar: [],
  editor: [],
  math: [],
  form: [],
  icons: [],
  notebook: [],
  kanban: [],
  dashboard: [],
  logger: [],
  journal: [],
  noteNetwork: [],
  pdf: [],
  snippets: [],
  taskManager: [],
  whiteboard: [],
  components: [],
  parsers: [],
};

export const getSubslotsBySlot = (slot: keyof typeof slotFields): string[] =>
  slotMap[slot];
