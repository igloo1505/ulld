import { ReduxProvider } from '@ulld/state/wrappers/ReduxProvider'
import React, { ReactNode } from 'react'
import store from './store'



interface InternalReduxProviderProps {
children: ReactNode
}

const InternalReduxProvider = ({children}: InternalReduxProviderProps) => {
return (
        <ReduxProvider store={store}>
            {children}
        </ReduxProvider>
)
}


InternalReduxProvider.displayName = "InternalReduxProvider"


export default InternalReduxProvider;
