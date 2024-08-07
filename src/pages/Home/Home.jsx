import React from 'react';
import { Container, Grid } from '@mui/material';
import NewsList from '../../components/NewsList';
import WeatherSimple from '../../components/WeatherSimple';
import Omikuji from '../../components/Omikuj';

function Home() {
  return (
<>
      <Container maxWidth="xl" disableGutters sx={{ mt: 4, px: { xs: 2, sm: 3 } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}> {/* 画面の2/3 */}
            <NewsList />
          </Grid>
          <Grid item xs={12} md={4}> {/* 画面の1/3 */}
            <WeatherSimple />
            <Omikuji />
          </Grid>
        </Grid>
      </Container>
      
      </>
  );
}

export default Home;
