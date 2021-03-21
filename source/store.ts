import { createStore } from './urlStore'

const state = {
    hello: 'world',
}

export const store = createStore(state)
export const { useStore } = store
