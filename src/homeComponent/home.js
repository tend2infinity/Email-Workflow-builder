import React, { useState } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './homeStyles';
import { useSelector, useDispatch } from 'react-redux';
import { toggleOpen, toggleWorkflowTrue, toggleWorkflowFalse } from '../redux-slices/homeSlice';
import Drawer from './drawer';
import { Button, CardContent, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import Modal from '../components/modal'


export default function Home() {
    const open = useSelector((state) => state.home.open)
    const workflow = useSelector(state => state.home.workflow)
    const dispatch = useDispatch()
    const theme = useTheme();
    const classes = useStyles(theme);
    const [drawer, setDrawer] = useState(true)
    const [name, setName] = useState('');
    const [trigger, setTrigger] = useState('');
    const [list, setList] = useState('');



    const handleDrawerOpen = () => {
        dispatch(toggleOpen());

    };
    const handleworkflowCancel = () => {
        dispatch(toggleWorkflowFalse())
        setName("")
        setTrigger("")
        setList("")
    }
    // const handleworkflowDelete = () => {
    //     dispatch(toggleWorkflowFalse())
    //     setEmail(false)
    //     setDelay(false)
    //     setCondition(false)
    //     setName("")
    //     setTrigger("")
    //     setList("")
    // }

    const handleTriggerChange = (event) => {
        setTrigger(event.target.value)
    }
    const handleListChange = (event) => {
        setList(event.target.value)
    }
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleWorkflowClick = () => {
        setDrawer(true)
        // setEmail(false)
        // setCondition(false)
        // setDelay(false)
        handleDrawerOpen()
        console.log(drawer)

    }
 


    const drawerprops = {
        name,
        trigger,
        list,
        handleworkflowCancel,
        handleTriggerChange,
        handleListChange,
        handleNameChange
    }
    // const modalprops = {
    //     email,
    //     condition,
    //     delay,
    //     modal,
    //     toggleModalOpen,
    //     toggleModalClose,
    //     toggleEmail,
    //     toggleCondition,
    //     toggleDelay
    // }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src="https://uploads-ssl.webflow.com/5ec6a62dd0db4b9d0d8d8add/605044294e7370452e06b7ad_muxemail-logo-253px-w.svg" className={classes.applogo} />

                </Toolbar>
            </AppBar>
            {drawer && <Drawer {...drawerprops} /> }
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <Button onClick={handleWorkflowClick} variant="outlined" color="default" size="large">
                    <div>
                        {console.log(workflow)}
                        <div className={clsx(workflow && classes.hide)}>Set up Workflow Trigger </div>
                        <div className={clsx(classes.buttonContainer, !workflow && classes.hide)}>
                            <Typography variant='body2' color='initial'> {trigger}</Typography>
                            <Typography variant='body2' color='primary'><b>{list}</b> </Typography>
                        </div>
                    </div>
                </Button>

                
                <div className={clsx(!workflow && classes.hide)}>
                <Modal  />
                </div>

            </main>
        </div>
    );
}
