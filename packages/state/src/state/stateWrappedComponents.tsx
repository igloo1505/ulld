import React from 'react'
import ReduxProvider from './ReduxProvider';
import Navbar from '#/components/ui/navbar';
import Observers from './observers';
import PermanentSidebar from '#/components/ui/permanentSidebar';
import { StatePassedToClient } from '#/types/settings';
import ToastListener from '#/components/ui/toastListener';
import ConfirmationModal from '#/components/inputs/confirmationModal';
import CommandPalettePopover from '#/components/functionality/commandPalette/commandPalettePopover';
import OnlineStatusObserver from '#/components/util/observers/onlineStatusObserver';



const StateWrappedUI = ({ settings, darkMode, config }: StatePassedToClient) => {
    return (
        <ReduxProvider>
            <Observers
                settings={settings}
                darkMode={darkMode}
                config={config}
            />
            <Navbar />
            <PermanentSidebar />
            <CommandPalettePopover />
            <ToastListener />
            <ConfirmationModal />
            <OnlineStatusObserver />
        </ReduxProvider>
    )
}


StateWrappedUI.displayName = "StateWrappedUI"


export default StateWrappedUI;
