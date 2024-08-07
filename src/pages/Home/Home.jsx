import React from 'react';
import { Container, Grid } from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import App from '../../components/App';
import NewsList from '../../components/NewsList';
import WeatherSimple from '../../components/WeatherSimple';

function Home() {
  return (
<>
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}> {/* 画面の2/3 */}
            <NewsList />
          </Grid>
          <Grid item xs={12} md={4}> {/* 画面の1/3 */}
            <WeatherSimple />
            <omikuji />
          </Grid>
        </Grid>
      </Container>
      
      </>
  );
}

export default Home;
