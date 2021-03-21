import { Button } from '@chakra-ui/button'
import React from 'react'
import { Route, useRouteMatch } from 'react-router'
import { useStore } from './store'

const randomString = () => Math.random().toString(36).substring(7)

export const Routes: React.FC = () => {
    const store = useStore()
    const match = useRouteMatch()

    const generateState = () => {
        store.setState({
            ...store.state,
            [randomString()]: randomString(),
        } as any)
    }

    return (
        <div>
            <Button onClick={generateState}>Add generated state field</Button>
            <Button onClick={store.hide}>Hide encoded data in URL</Button>
            <Button onClick={store.show}>Show encoded data in URL</Button>
            <pre>{JSON.stringify(store, null, 4)}</pre>
            <Route path={`${match.path}/hello`}>
                <h1> route hello</h1>
                <Route path={`${match.path}/hello/nested`}>
                    <h1> route nested</h1>
                </Route>
            </Route>
        </div>
    )
}
