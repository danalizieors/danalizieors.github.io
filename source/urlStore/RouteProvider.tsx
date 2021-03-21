import React from 'react'
import { Route } from 'react-router'

type Props = {
    parameter: string
}

export const RouteProvider: React.FC<Props> = ({ parameter, children }) => (
    <Route path={[`/:${parameter}`, '']}>{children}</Route>
)
