import { makeAbsolute } from '@ulld/utilities';
import fs from 'fs'


export const imageToBase64Url = async (p: string, fsRoot: string) => {
    let bitmap = await fs.promises.readFile(makeAbsolute(p, fsRoot));
    return new Buffer(bitmap).toString('base64');
}
