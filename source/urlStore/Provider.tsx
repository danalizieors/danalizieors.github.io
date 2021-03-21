import React, { PropsWithChildren } from 'react'
import { Store } from './createStore'
import { RouteProvider } from './RouteProvider'
import { StateProvider } from './StateProvider'

type Props<T> = {
    parameter: string
    store: Store<T>
}

export const Provider = <T,>({
    parameter,
    store,
    children,
}: PropsWithChildren<Props<T>>) => {
    return (
        <RouteProvider parameter={parameter}>
            <StateProvider parameter={parameter} store={store}>
                {children}
            </StateProvider>
        </RouteProvider>
    )
}
