import React from 'react'
import {Grid, Button, Card, CardContent, CardMedia, CardActionArea, CardActions, Typography} from '@material-ui/core';

export const CountryCard = ({countryData, createAndDownloadPdf}) => {
    const createPdf = () => {
        createAndDownloadPdf(countryData);
    };

    if (countryData.length === 0) {
        return <Grid container>
            <Grid item>
                <h3>Search something</h3>
            </Grid>
        </Grid>;
    }
    return (
            <Grid item>
                <Card style={{ width: '20rem', height: '15%'}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    image={countryData.flag}
                    title="flag"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h5">
                        {countryData.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {countryData.region}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={createPdf}>
                    Get PDF
                    </Button>
                </CardActions>
                </Card>
            </Grid>
    );
}
