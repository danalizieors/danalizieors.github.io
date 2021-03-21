import { createContext, useContext } from 'react'
import { UseStoreReturn } from './useStore'

export type Store<T> = {
    state: T
    Context: React.Context<UseStoreReturn<T>>
    useStore: () => UseStoreReturn<T>
}

export const createStore = <T>(state: T) => {
    const Context = createContext<UseStoreReturn<T>>(undefined!)

    return {
        state,
        Context,
        useStore: () => useContext(Context),
    }
}
