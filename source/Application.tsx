import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './Routes'
import { store } from './store'
import { theme } from './theme'
import { Provider } from './urlStore'

export const Application: React.FC = () => (
    <ChakraProvider theme={theme}>
        <Router>
            <Provider parameter='store' store={store}>
                <Routes />
            </Provider>
        </Router>
    </ChakraProvider>
)
