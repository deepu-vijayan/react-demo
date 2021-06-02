import React from 'react';
//import classes from './Header.module.css';

import {AppBar,Badge,Grid,IconButton,InputBase,makeStyles,Toolbar} from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';

const useStyle = makeStyles({
    root: {
        backgroundColor:"#FFF"
    },
    searchBox: {
        '& .MuiSvgIcon-root':{
            marginRight:'8px',
        }
    }
}) 

const Header = () => {
    const styles = useStyle();
    return (
        <AppBar position="static" className={styles.root}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item >
                        <InputBase
                        placeholder="Search"
                        className={styles.searchBox}
                        startAdornment={<SearchIcon fontSize="small"></SearchIcon>} />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item >
                        <IconButton>
                            <Badge color="primary" badgeContent={3}>
                                <NotificationsNoneIcon fontSize="small"></NotificationsNoneIcon>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge color="secondary" badgeContent={3}>
                                <ChatBubbleOutlineIcon fontSize="small"></ChatBubbleOutlineIcon>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge >
                                <PowerSettingsNewIcon fontSize="small"></PowerSettingsNewIcon>
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;