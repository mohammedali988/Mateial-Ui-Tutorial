import './App.css';
import SideBar from './Components/sidebar';
import Appbar from './Components/appBar';
import { makeStyles, CssBaseline } from '@material-ui/core';


const useStyles = makeStyles( theme => ({
  mainApp:{
    paddingLeft:"320px",
    width:"100%",
  }
}))
function App() {
  const clasess = useStyles();
  return (
    <>
      <CssBaseline/>
      <SideBar/>
      <div className={clasess.mainApp}>
        <Appbar/>
      </div>
    </>
  );
}

export default App;
