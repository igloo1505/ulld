import React from 'react'
import { ReduxProvider } from './ReduxProvider';
import Observers from '../observers/internalState';
import {OnlineStatusObserver} from '../observers/onlineStatus';
import {ToastListener} from '../observers/toast';
import { Toaster } from "@ulld/tailwind/toaster"
import { cookies } from 'next/headers';
import {getSettings} from "../actions/getSettings"
import fs from 'fs'
import path from 'path'
import { ParsedAppConfig } from '@ulld/configschema/types';
/* import Navbar from '#/components/ui/navbar'; */
/* import Observers from './observers'; */
/* import PermanentSidebar from '#/components/ui/permanentSidebar'; */
/* import { StatePassedToClient } from '#/types/settings'; */
/* import ToastListener from '#/components/ui/toastListener'; */
/* import ConfirmationModal from '#/components/inputs/confirmationModal'; */
/* import CommandPalettePopover from '#/components/functionality/commandPalette/commandPalettePopover'; */
/* import OnlineStatusObserver from '#/components/util/observers/onlineStatusObserver'; */


/* FIX: These are missing from the complete app. Add them back once the sandbox is working. */
/* <Navbar /> */
/* <PermanentSidebar /> */
/* <CommandPalettePopover /> */
/* <ConfirmationModal /> */

const configPath = "appConfig.ulld.json"

/* NOTE: Children should only used in development for now. */
export const StateWrappedUI = async ({children}: {children?: React.ReactNode}) => {
    const cookieJar = cookies()
    const settings = await getSettings()
    const darkMode = cookieJar.has("darkMode")
    const showModebar = cookieJar.has("showModebar")
    const themeCookie = cookieJar.get("theme")
    const _config = path.join(process.cwd(), configPath)
    const configContent = await fs.promises.readFile(_config, {encoding: "utf-8"})
    if (!configContent) {
        throw new Error(`No config was found at ${_config}.`)
    }
    const config = JSON.parse(configContent) as ParsedAppConfig

    return (
        <ReduxProvider>
            <div id="global-state-target" />
            <Observers
                settings={settings}
                darkMode={darkMode}
                config={config}
                showPlotlyModebar={showModebar}
                themeCookie={themeCookie}
            />
            <div id="navbar-target" />
            <div id="sidebar-target" />
            <OnlineStatusObserver />
            <ToastListener />
            <Toaster />
            {children}
        </ReduxProvider>
    )
}


StateWrappedUI.displayName = "StateWrappedUI"



