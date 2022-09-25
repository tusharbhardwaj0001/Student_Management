import './App.css';
// import useStyles from "./styles.js";
import {Container, AppBar, Typography, Grid, Grow} from "@mui/material";
import Create from "./components/createStudent/createStudent.js";
import Student from "./components/showStudent/showStudent.js";

function App() {
  const classes = () => ({
    appBar : {
        borderRadius : "40px",
        margin : "30px 20px 10px 10px",
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center"
    }
});
  return (
    <div className="App">
      <Container maxWidth = "lg">
        <AppBar className= {classes.appBar} position = "static" color='inherit'>
          <Typography className={classes.heading} variant = "h2" align = "center"> Students Create & Show</Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify = "space-between" alignItems= "strect" marginTop= "20px" spacing={5}>
              <Grid item xs = {12} sm = {7}>
                <AppBar className={classes.appBar} position = "static" color = "inherit">
                  <Student/>
                </AppBar>  
              </Grid>
              <Grid item xs ={12} sm ={4}>
                <AppBar className={classes.appBar} position = "static" color = "inherit">
                  <Create/>
                </AppBar>  
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
