import {Paper , Card, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles( theme => ({
    root:{
        backgroundColor:"#fdfdff",
    },
    pageHeader:{
        display:"flex",
        padding: theme.spacing(4),
        marginBottom: theme.spacing(3)
    },
    pageIcon:{
        display:'inline-block',
        padding: theme.spacing(2),
        color:"red"
    },
    pageText:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2': {
            opacity: ".6"
        }
    }
}))

const Header = (props) => {

    const clasess = useStyles()
    const {icon, title, subTitle} = props

    return (
        <Paper elevation={0} square className={clasess.root}>
            <div className={clasess.pageHeader}>               
                <Card className={clasess.pageIcon}>
                    {icon}
                </Card>
                <div className={clasess.pageText}>
                    <Typography 
                    variant="h6"
                    component="div"
                    >{title}</Typography>
                    <Typography 
                    variant="subtitle2"
                    component="div"
                    >{subTitle}</Typography>
                </div>
            </div>
        </Paper >
    )
}

export default Header;