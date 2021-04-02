import { AspectRatio, Box } from '@chakra-ui/layout'
import React from 'react'

export const Page: React.FC = ({ children }) => (
    <AspectRatio
        width='100%'
        ratio={210 / 297}
        transition='margin-top 0.2s'
        sx={{
            '@media print': {
                '&:before': {
                    content: 'none',
                },
                '&>*:not(style)': {
                    position: 'unset',
                    height: '100vh',
                },
            },
        }}
    >
        <Box>{children}</Box>
    </AspectRatio>
)
