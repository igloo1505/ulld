import fs from 'fs'
import os from 'os'
import { getInternalConfig } from '@ulld/state'


export const clearTempDir = async () => {
    const dir = getInternalConfig().tempDir || os.tmpdir()
    if (fs.existsSync(dir)) {
        await fs.promises.rm(dir, { recursive: true })
    }
}
