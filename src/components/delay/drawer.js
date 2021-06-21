import React,{useState} from 'react'
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { useStyles } from './drawerStyles';
import { useSelector, useDispatch } from 'react-redux';
import {toggleOpen, toggleClose, toggleWorkflowTrue, toggleWorkflowFalse} from '../../redux-slices/homeSlice';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function LeftDrawer(props) {

    const open = useSelector(state => state.home.open)
    const workflow = useSelector(state => state.home.workflow)

    const dispatch = useDispatch()
    const theme = useTheme();
    const classes = useStyles(theme);

    const handleDrawerClose = () => {
        dispatch(toggleClose());
        }

    const handleDelaySave = () => {
        if( !props.timer )
        {
            toast.error("Fill all the required fields!")
        }
        else{
            toast.info("Delay Details saved!")
            props.handleSave()
        }
        
    }
    const handleEmailCancel = () => {
        props.handleCancel()
    }


    return (
        <div>
            <ToastContainer />
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <Typography variant="h6" className={classes.drawerHeaderText} >
                        Select Time Delay
                    </Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem>
                        {/* <ListItemIcon> <MailIcon /> </ListItemIcon> */}
                        <Typography variant="body1">
                            <ListItemText disableTypography primary="Delay" className={classes.listItemHeader} />
                        </Typography>
                    </ListItem>
                    <div style={{display: 'flex'}}>
                    <TextField
                        select
                        size="small"
                        variant="outlined"
                        className={classes.listItemTextField1}
                        value={props.timerType}
                        onChange={props.handleTimerTypeChange}
                        required={true}
                    >
                        <MenuItem value="Hour(s)"> Hour(s)</MenuItem>
                        <MenuItem value="Day(s)"> Day(s)</MenuItem>
                        <MenuItem value="Minute(s)"> Minute(s)</MenuItem>
                        <MenuItem value="Second(s)"> Second(s)</MenuItem>
                    </TextField>
                    <TextField
                        type='number'
                        size="small"
                        label="Number"
                        variant="outlined"
                        className={classes.listItemTextField2}
                        value={props.timer}
                        onChange={props.handleTimerChange}
                        required={true}
                    />
                    </div>
                    
                    
                </List>
                <Divider className={classes.drawerFooter} />
                <div>
                    <Button variant="contained" color="primary" className={classes.drawerFooterButton} onClick={handleDelaySave}> Save </Button>
                    <Button variant="contained" color="secondary" className={classes.drawerFooterButton} onClick={handleEmailCancel}> Cancel</Button>

                </div>
            </Drawer>
        </div>
    )
}

export default LeftDrawer
