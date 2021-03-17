import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './Routes'
import { theme } from './theme'

export const Application: React.FC = () => (
    <ChakraProvider theme={theme}>
        <Router>
            <Routes />
        </Router>
    </ChakraProvider>
)
