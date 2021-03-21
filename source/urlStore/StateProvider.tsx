import React, { PropsWithChildren } from 'react'
import { Store } from './createStore'
import { useStore } from './useStore'

type Props<T> = {
    parameter: string
    store: Store<T>
}

export const StateProvider = <T,>({
    parameter,
    store,
    children,
}: PropsWithChildren<Props<T>>) => {
    const value = useStore(parameter, store.state)

    return (
        <store.Context.Provider value={value}>
            {children}
        </store.Context.Provider>
    )
}
