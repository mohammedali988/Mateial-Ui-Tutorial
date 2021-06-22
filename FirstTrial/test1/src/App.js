import React from 'react';
import {Typography,Button, CssBaseline, Grid, AppBar, Card, CardActions, CardContent, CardMedia, Toolbar, Container} from '@material-ui/core';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import useStyles from './css';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const App = () => {
  const clasess = useStyles();
  return(
    <>
      <CssBaseline/>
      <AppBar position="relative"> 
        <Toolbar>
          <AddPhotoAlternateIcon className={clasess.icon}/>
          <Typography variant="h6">
            Photos Alpum
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={clasess.container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary"> Photo Alpum</Typography>
            <Typography variant="h5" align="center" color="textPrimary" paragraph gutterBottom > 
              this text as a test for Material ui. It should be long santence to check if the style will be fine or what 
            </Typography>
            <div>
              <Grid container spacing={2} justify="center" className={clasess.button}>
                <Grid item >
                  <Button variant="contained" color="primary">
                    see my photos
                  </Button>
                </Grid>
                <Grid item >
                  <Button variant="outlined" color="primary">
                    see my photos
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <container className={clasess.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {array.map( (i, e) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card className={clasess.card}>
                  <CardMedia 
                  className={clasess.Cardmedia}
                  image="https://source.unsplash.com/random"
                  />
                  <CardContent className={clasess.Cardcontent}>
                    <Typography> Header </Typography>
                    <Typography> Here is some photo bicked up from unsplash .randon </Typography>
                  </CardContent>
                  <CardActions className={clasess.Cardactions}>
                    <Button size="small" variant="outlined" color="primary"> View </Button>
                    <Button size="small" variant="outlined" color="primary"> edit </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </container>
      </main>
    </>
  )
}

export default App;
