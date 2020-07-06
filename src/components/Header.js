import React from 'react';
import {Grid, Button, TextField} from '@material-ui/core';

const styles = {
    backgroundColor: '#020A96', 
    color: 'white', 
    width: '100%', 
    height: '10%', 
    textAlign: 'center',
    paddingTop: '2rem',
    paddingBottom: '1rem',
    fontSize: '3rem',
    marginBottom: '3rem'
};

export const Header = () => {
    return (
        <div style={styles}>
            React-Node Country Data
        </div>
    )
}
