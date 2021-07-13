import './App.css';
import SideBar from './Components/sidebar';
import Appbar from './Components/appBar';
import Header from './Components/appHeader';
import { makeStyles, CssBaseline } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


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
        <Header 
        icon={<FavoriteBorderIcon fontSize="large"/>}
        title={"pageHeader"}
        subTitle={"page description"}
        />
      </div>
    </>
  );
}

export default App;
