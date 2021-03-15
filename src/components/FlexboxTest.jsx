import React from 'react';
import {Box} from '@material-ui/core';

export default function Display() {
    return (
        <div style={{ width: '100%'}}>
            <Box display="flex" justifyContent="center" bgcolor="background.paper">
                {"I'm a flexbox container!"}
                {"I'm a flexbox container!"}
                {"I'm a flexbox container!"}
            </Box>
        </div>
    );
}