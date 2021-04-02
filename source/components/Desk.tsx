import { VStack } from '@chakra-ui/layout'
import React from 'react'

export const Desk: React.FC = ({ children }) => (
    <VStack
        maxWidth={['full', 'full', 'full', 'container.lg']}
        padding={[0, 4, 4, 4]}
        marginX='auto'
        spacing={[0, 4, 8, 8]}
        transition='padding 0.2s'
    >
        {children}
    </VStack>
)
