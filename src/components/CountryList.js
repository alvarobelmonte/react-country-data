import React from 'react';
import {CountryCard} from '../components';
import {Grid} from '@material-ui/core';

export const CountryList = ({countries, createAndDownloadPdf}) => {
    return (
        <div style={{marginTop: '2rem'}}>
            <Grid container direction="row" justify="center" alignItems="center" spacing={4}>
                {countries && countries.map((c, index) => {
                    return <CountryCard key={index} countryData={c} createAndDownloadPdf={createAndDownloadPdf} />;
                })}
            </Grid>
        </div>
    )
}
