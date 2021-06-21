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

    const handleEmailSave = () => {
        if( !props.fromName || !props.fromEmail )
        {
            toast.error("Fill all the required fields!")
        }else if(props.error) {
            toast.error("Enter a valid Email!")
        }else{
            toast.info("Email Details saved!")
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
                        Select Email layout
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
                            <ListItemText disableTypography primary="Subject" className={classes.listItemHeader} />
                        </Typography>
                    </ListItem>
                    <TextField
                        label="Enter a subject for the mail"
                        size="small"
                        variant="outlined"
                        className={classes.listItemTextField}
                        value={props.subject}
                        onChange={props.handleSubjectChange}
                    />

                    <ListItem>
                        <Typography variant="body1">
                            <ListItemText disableTypography primary="From Name" className={classes.listItemHeader} />
                        </Typography>
                    </ListItem>
                    <TextField
                        label="Enter the name of sender"
                        variant="outlined"
                        size="small"
                        value={props.fromName}
                        onChange={props.handleFromChange}
                        className={classes.listItemTextField}
                        required = {true}
                    />

                    <ListItem>
                        <Typography variant="body1">
                            <ListItemText disableTypography primary="From Email" className={classes.listItemHeader} />
                        </Typography>
                    </ListItem>
                    <TextField
                        error={props.error}
                        label="Enter the sender's Email"
                        helperText={props.error ? "Enter a valid Email" : "Valid Email"}
                        variant="outlined"
                        size="small"
                        value={props.fromEmail}
                        onChange={props.handleFromEmailChange}
                        className={classes.listItemTextField}
                        required = {true}
                    />
                       <ListItem>
                        <Typography variant="body1">
                            <ListItemText disableTypography primary="Select Template" className={classes.listItemHeader} />
                        </Typography>
                    </ListItem>
                    <TextField
                        select
                        label="Select an Email Template"
                        variant="outlined"
                        size="small"
                        value={props.emailTemplate}
                        onChange={props.handleTemplateChange}
                        className={classes.listItemTextField}
                    >
                        <MenuItem value="Template 1"> Template 1</MenuItem>
                        <MenuItem value="Template 2"> Template 2</MenuItem>
                        <MenuItem value="Template 3"> Template 3</MenuItem>
                        <MenuItem value="my template"> My template</MenuItem>

                    </TextField>


                </List>
                <Divider className={classes.drawerFooter} />
                <div>
                    <Button variant="contained" color="primary" className={classes.drawerFooterButton} onClick={handleEmailSave}> Save </Button>
                    <Button variant="contained" color="secondary" className={classes.drawerFooterButton} onClick={handleEmailCancel}> Cancel</Button>

                </div>
            </Drawer>
        </div>
    )
}

export default LeftDrawer
