import { getInternalConfig } from '@ulld/config'
import fs from 'fs'
import os from 'os'

export const clearTempDir = async () => {
    const dir = getInternalConfig().tempDir || os.tmpdir()
    if (fs.existsSync(dir)) {
        await fs.promises.rm(dir, { recursive: true })
    }
}
