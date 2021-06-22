import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container:{
    padding: theme.spacing(8, 0, 6),
  },
  icon:{
    margin:"20px 20px"
  },
  button:{
    marginTop:"20px"
  },
  cardGrid:{
    padding:"0px 0",
  },
  card:{
    height:"100%",
    display:"flex",
    flexDirection:"column",
  },
  Cardmedia: {
    paddingTop:"56.25%"
  },
  Cardcontent:{
    flexGrow:" 1,"
  },
}));

export default useStyles;