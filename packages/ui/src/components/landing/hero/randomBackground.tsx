import React, { Suspense } from 'react'
import path from 'path'
import fs from 'fs'
import DarknessDetect from './backgroundDarknessDetection'
import clsx from 'clsx'
import { serverClient } from '@ulld/api/serverClient'



const day = 24 * 60 * 60 * 1000

export const RandomBackground = async () => {
    let _alignment = await serverClient.media.getRandomBackgroundSettings()
    let pastImage = {
        path: _alignment?.path,
        createdAt: _alignment.createdAt
    }
    let alignment = _alignment?.landingImageAlign
    const dirPath = path.join(process.cwd(), "/appConfig/backgroundImages")
    if (!_alignment?.lockedLandingImage && Boolean(!pastImage || new Date().valueOf() - new Date(pastImage?.createdAt || 0).valueOf() > day)) {
        let files = fs.readdirSync(dirPath).filter((f) => f !== ".DS_Store")
        let hadImage = Boolean(pastImage)
        if (hadImage && pastImage?.path) {
            await serverClient.media.deleteRandomImage({path: pastImage.path})
        }
        pastImage = {
            path: files[Math.floor(Math.random() * files.length)],
            createdAt: new Date()
        }
        if(pastImage.path){
        await serverClient.media.updateRandomImageBackground({
                path: pastImage.path
        })
        }
    }

    if(!_alignment.lockedLandingImage && !pastImage.path) return null

    let file = fs.readFileSync(path.join(dirPath, _alignment?.lockedLandingImage ? _alignment.lockedLandingImage : pastImage.path as string))
    const baseString = `data:image/jpeg;base64,${file.toString("base64")}`

    return (
        <>
            <Suspense>
                <DarknessDetect image={baseString} />
                {file && <img
                    className={clsx("w-screen h-screen fixed top-0 left-0 object-cover",
                        alignment === "bottom" && "object-bottom",
                        alignment === "top" && "object-top",
                        alignment === "left" && "object-left",
                        alignment === "right" && "object-right",
                    )}
                    src={baseString}
                    alt=""
                />}
            </Suspense>
        </>
    )
}
/* <ImageBackgroundOverlay image={baseString} /> */


RandomBackground.displayName = "RandomBackground"
