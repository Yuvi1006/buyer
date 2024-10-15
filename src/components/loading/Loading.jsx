import { Container, Spinner } from "@chakra-ui/react";
import React from 'react'


export const Loading = () => {
    return (
        <Container
            my={'140px'}
            display={'flex'}
            justifyContent={'center'}
        >
            <Spinner size='xl' />
        </Container>
    );
};