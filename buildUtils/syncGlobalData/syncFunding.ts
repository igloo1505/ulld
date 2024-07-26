import path from 'path'
import { JsonFile } from '@ulld/utilities/jsonFileClass'
import { appData } from '@ulld/utilities/appData'

const inputPkgJson = path.join(__dirname, "../../package.json")

const websiteStaticDataOutput = path.join(__dirname, "../../apps/website/src/staticData/staticContent.json")


const pkgJson = new JsonFile(inputPkgJson)
const websiteOutput = new JsonFile(websiteStaticDataOutput)

let pkgJsonData = pkgJson.getJsonContent()
let websiteData = websiteOutput.getJsonContent()

/* @ts-ignore */
pkgJsonData.funding = appData.funding.map((f) => ({
    type: f.pkgJsonType,
    url: f.url
}))

console.log("websiteData: ", websiteData)
for (const fundingItem of appData.funding) {    
/* @ts-ignore */
websiteData["links"]["fund"][fundingItem.websiteKey] = fundingItem.url
}


pkgJson.writeContent(pkgJsonData)
websiteOutput.writeContent(websiteData)
