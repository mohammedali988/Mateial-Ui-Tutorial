import { AppBar, Toolbar, Grid, IconButton, InputBase, Badge } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor : "#fff",
        transform:'translatez(0)'
    },
    input: {
        borderRadius:'10px',
        opacity:".6",
        padding:"0px 8px",
        '&:hover':{
            backgroundColor:'#f2f2f2'
        },
        '& .MuiSvgIcon-root':{
            marginRight :"8px", 
        }
    },
    btn:{

    },
    btn2:{
    }
}))
const Appbar = () => {
    const classes = useStyles()
    return (
        <>
            <AppBar style={{position:"static"}} className={classes.root}>
                <Toolbar>
                    <Grid container
                    alignItems="center">
                        <Grid item > 
                            <InputBase
                            placeholder="SearchTopic"
                            startAdornment={<SearchIcon fontSize="small"/>}
                            className={classes.input}
                            />
                        </Grid>
                        <Grid item sm>
                        </Grid>
                        <Grid item >
                            <IconButton>
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsNoneIcon/>
                                </Badge>
                            </IconButton>
                            <IconButton classes={{root:classes.btn, label:classes.btn2}}>
                                <Badge badgeContent={3} color="secondary">
                                    <ChatBubbleOutlineIcon/>
                                </Badge>
                            </IconButton>
                            <IconButton>
                                <PowerSettingsNewIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Appbar;