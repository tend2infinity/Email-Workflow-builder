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
import {toggleOpen, toggleClose, toggleWorkflowTrue, toggleWorkflowFalse} from '../redux-slices/homeSlice';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function LeftDrawer(props) {
    console.log(props)
    const open = useSelector(state => state.home.open)
    const workflow = useSelector(state => state.home.workflow)
    // const workflowName = useSelector(state => state.home.workflowName)
    // const workflowTrigger = useSelector(state => state.home.workflowTrigger)
    // const workflowList = useSelector(state => state.home.workflowList)

    const dispatch = useDispatch()
    const theme = useTheme();
    const classes = useStyles(theme);

    const handleDrawerClose = () => {
        dispatch(toggleClose());
        }

    const handleworkflowSave = () => {
        if(!props.name || !props.trigger || !props.list)
        {
            toast.error("Fill all the fields!")
        }else{
            toast.info("Workflow Initialized!")
            dispatch(toggleWorkflowTrue());
        }
     
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
                        Workflow
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
                            <ListItemText disableTypography primary="Workflow Name" className={classes.listItemHeader} />
                        </Typography>
                    </ListItem>
                    <TextField
                        label="Enter a name for your workflow"
                        size="small"
                        variant="outlined"
                        className={classes.listItemTextField}
                        required = {true}
                        value={props.name}
                        onChange={props.handleNameChange}
                    />

                    <ListItem>
                        <Typography variant="body1">
                            <ListItemText disableTypography primary="Trigger" className={classes.listItemHeader} />
                        </Typography>
                    </ListItem>
                    <TextField
                        select
                        label="Select"
                        helperText="Please select a trigger type"
                        variant="outlined"
                        size="small"
                        value={props.trigger}
                        onChange={props.handleTriggerChange}
                        className={classes.listItemTextField}
                        required = {true}
                    >
                        <MenuItem value="When sunscriber joins a list"> When sunscriber joins a list</MenuItem>
                        <MenuItem value="The anniversary of a date"> The anniversary of a date</MenuItem>
                    </TextField>

                    <ListItem>
                        <Typography variant="body1">
                            <ListItemText disableTypography primary="Select A List" className={classes.listItemHeader} />
                        </Typography>
                    </ListItem>
                    <TextField
                        select
                        label="Select"
                        helperText="Please select a list type"
                        variant="outlined"
                        size="small"
                        value={props.list}
                        onChange={props.handleListChange}
                        className={classes.listItemTextField}
                        required = {true}
                    >
                        <MenuItem value="Default List"> Default List</MenuItem>
                        <MenuItem value="Customised list">Customised List</MenuItem>
                    </TextField>

                </List>
                <Divider className={classes.drawerFooter} />
                <div>
                    <Button variant="contained" color="primary" className={classes.drawerFooterButton} onClick={handleworkflowSave}> Save </Button>
                    <Button variant="contained" color="secondary" className={classes.drawerFooterButton} onClick={props.handleworkflowCancel}> Cancel</Button>

                </div>
            </Drawer>
        </div>
    )
}

export default LeftDrawer
