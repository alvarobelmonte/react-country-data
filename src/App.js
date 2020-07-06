import React, {useState} from 'react';
import './App.css';

import axios from 'axios';
import {saveAs} from 'file-saver';
import {Grid, Button, TextField, Typography } from '@material-ui/core';
import  {Header, CountryList, Spinner} from './components';
import 'typeface-roboto';

const styles = {
  fontFamily: 'Roboto',
};

function App() {
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = ({target: {value, name}}) => {
    setCountry(value);
  };

  const createAndDownloadPdf = (selectedCountry) => {
    const { name, capital, flag, population, region, subregion, currencies, languages } = selectedCountry;
    const curr = currencies[0];
    const lang = languages[0];
    const popu = new Intl.NumberFormat().format(population);

    axios.post('https://react-country-server.netlify.app/create-pdf', {name, capital, flag, popu, region, subregion, curr, lang})
    .then(() => {
      return axios.get('https://react-country-server.netlify.app/fetch-pdf', {
        name: name,
        responseType: 'blob'
      });
    })
    .then((res) => {
      const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
      saveAs(pdfBlob, `${name}_data.pdf`);
    });

  };

  const getData = async () => {
    setCountries([]);
  
    if (country) {
      setLoading(true);
      const res = await axios.get(`https://restcountries.eu/rest/v2/name/${country}`);

      setLoading(false);

      if(res.data.length > 0) {
        setCountries(res.data);
      }
      else if(res.data.message === 'Not found'){
        alert('Nothing found');
      }
    }
    else {
      alert('insert something');
    }


  };

  return (
    <div style={styles}>
      <Header />
        <Typography style={{textAlign: 'center'}} variant="h5">Search a country and get its data</Typography>

        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <TextField  label="Name..." name="country" onChange={handleChange} ></TextField>
          </Grid>

          <Grid item>
            <Button variant="contained"  onClick={getData}>Search</Button>
          </Grid>
        </Grid>

      {loading &&  <Spinner />}
      {countries && <CountryList countries={countries} createAndDownloadPdf={createAndDownloadPdf} /> }

    </div>
  );
}

export default App;
