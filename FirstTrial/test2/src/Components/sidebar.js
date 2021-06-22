import { makeStyles } from "@material-ui/core";
import { width } from "@material-ui/system";
import react from "react";

const useStyles = makeStyles( theme => ({
    sideBar:{
        display: "flex",
        flexDirection:"column",
        position:"absolute",
        left:"0",
        backgroundColor:"#253053",
        height:"100%",
        width: "320px",
    }
}))
const SideBar = () =>{
    const clasess = useStyles();
    return (
        <div className={clasess.sideBar}>

        </div>
    );
}

export default SideBar;