import { Box } from '@chakra-ui/layout'
import React from 'react'
import { Desk } from './components/Desk'
import { Page } from './components/Page'

const randomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`

export const Routes: React.FC = () => (
    <Desk>
        <Page>
            <Box bg={randomColor()} w='full' h='full'>
                first page
                <Box>first box</Box>
                <Box>second box</Box>
            </Box>
        </Page>
        <Page>
            <Box bg={randomColor()} w='full' h='full'>
                second page
            </Box>
        </Page>
        <Page>
            <Box bg={randomColor()} w='full' h='full'>
                third page
            </Box>
        </Page>
    </Desk>
)
