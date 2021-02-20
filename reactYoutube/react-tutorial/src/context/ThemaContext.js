import React from 'react';

export const THEMAS = {
    light: {
        color: 'black',
        backgroundColor: 'white'
    },
    dark: {
        color: 'white',
        backgroundColor: '#222222'
    }
}

export const ThemaContext = React.createContext([THEMAS.dark, () => {}]);
