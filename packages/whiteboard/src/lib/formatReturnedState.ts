import { ExcalidrawInitialDataState } from "@excalidraw/excalidraw/types/types";

function replacer(key: string, value: any) {
  if(value instanceof Map) {
    return {
      dataType: 'Map',
      value: Array.from(value.entries()), // or with spread: value: [...value]
    };
  } else {
    return value;
  }
}

function reviver(key: string, value: any) {
  if(typeof value === 'object' && value !== null) {
    if (value.dataType === 'Map') {
      return new Map(value.value);
    }
  }
  return value;
}

export const jsonStringifyWhiteboard = (d: object) => JSON.stringify(d, replacer)
export const jsonParseWhiteboard = (d: string) => JSON.parse(d, reviver)

export const formatReturnedState = (d: ExcalidrawInitialDataState) => {
     return {
        ...d,
        appState: {
            ...d.appState,
           collaborators: new Map(d.appState?.collaborators || [])
        }
    } satisfies ExcalidrawInitialDataState
}
