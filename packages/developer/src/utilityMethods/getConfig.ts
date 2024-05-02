import { ParsedAppConfig } from '@ulld/configschema/types';
import fs from 'fs'
import path from 'path'

function reviver(key: string, value: any) {
  if(typeof value === 'object' && value !== null) {
    if (value.dataType === 'Map') {
      return new Map(value.value);
    }
  }
  return value;
}
export const jsonParse = (d: string) => JSON.parse(d, reviver)

export const getConfig = (): ParsedAppConfig | undefined => {
   const config = fs.readFileSync(path.join(process.cwd(), "appConfig.ulld.json"), "utf-8")
    if(config) {
        return jsonParse(config) as ParsedAppConfig
    }
    return undefined
}
