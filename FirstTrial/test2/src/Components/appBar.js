import { AppBar, Toolbar, Grid, IconButton, InputBase, Badge } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';


const Appbar = () => {
    return (
        <>
            <AppBar style={{position:"static"}}>
                <Toolbar>
                    <Grid container>
                        <Grid item > 
                            <InputBase/>
                        </Grid>
                        <Grid item sm>
                            
                        </Grid>
                        <Grid item >
                            <IconButton>
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsNoneIcon/>
                                </Badge>
                            </IconButton>
                            <IconButton>
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