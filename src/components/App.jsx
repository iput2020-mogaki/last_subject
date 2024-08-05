import React from 'react';
import { Container, Grid } from '@mui/material';
import Header from './Header';
import NewsList from './NewsList';
// import WeatherSimple from './WeatherSimple';
import Weather from './Weather';



function App() {
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}> {/* 画面の2/3 */}
            <NewsList />
          </Grid>
          <Grid item xs={12} md={4}> {/* 画面の1/3 */}
            <Weather />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
