import { is, mergeDeepRight, replace } from 'ramda'
import { useEffect, useMemo, useState } from 'react'
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router'
import { decode, encode } from './conversion'

const safeMerge = <T1 extends {}>(first: T1, second: any) =>
    (is(Object, second) ? mergeDeepRight(first, second) : first) as T1

type Params = Record<string, string>

export type UseStoreReturn<T extends {}> = {
    state: T
    setState: React.Dispatch<React.SetStateAction<T>>
    show: () => void
    hide: () => void
    href: string
    encoded: string
}

export const useStore = <T extends {}>(parameter: string, initialState: T) => {
    const data = useParams<Params>()[parameter]
    const match = useRouteMatch()
    const location = useLocation()
    const history = useHistory()

    const mergeState = () => safeMerge(initialState, decode(data))
    const [state, setState] = useState(mergeState)
    const encoded = useMemo(() => encode(state), [state])
    const [visible, setVisible] = useState(true)

    const injectInPathname = (data: string, visible: boolean) => {
        const replacement = visible ? data : `:${parameter}`

        return replace(match.url, `/${replacement}`, location.pathname)
    }

    const pathname = injectInPathname(encoded, visible)
    const href = `${window.location.origin}${injectInPathname(encoded, true)}`

    useEffect(() => {
        history.replace(pathname)
    }, [pathname])

    return {
        state,
        setState,
        show: () => setVisible(true),
        hide: () => setVisible(false),
        href,
        encoded,
    }
}
