import React, { useState } from 'react'
import { useTheme } from '@material-ui/core/styles';
import { useStyles } from './homeStyles';
import clsx from 'clsx';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { toggleOpen, toggleWorkflowTrue, toggleWorkflowFalse } from '../../redux-slices/homeSlice';
import Drawer from './drawer'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SyncAltIcon from '@material-ui/icons/SyncAlt';



function Home() {
    const dispatch = useDispatch()
    const [condition, setCondition] = useState('When a subscriber read a message')
    const theme = useTheme();
    const classes = useStyles(theme);
    const [saved, setSaved] = useState(false)
    const [drawer, setDrawer] = useState(false)

    const handleDrawerOpen = () => {
        dispatch(toggleOpen());

    };

    const handleSave = () => {
        setSaved(true)
    }
    const handleCancel = () => {
        setCondition('When a subscriber read a message')
        setSaved(false)
    }
    const handleConditionClick = () => {
        setDrawer(true)
    }
    const handleConditionChange = (event) => {
        setCondition(event.target.value)
    }



    const drawerprops = {
        drawer,
        condition,
        saved,
        handleSave,
        handleCancel,
        handleConditionChange,
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {drawer && <Drawer {...drawerprops} />}

            <div style={{ left: '0' }} className={clsx(classes.line)}></div>
            <div className={clsx(saved && classes.hide)}>
                <Button onClick={handleConditionClick} variant="outlined" color="default" size="large" endIcon={<SyncAltIcon color='action' />}>
                    <Typography variant='body2' color='textSecondary'>Provide a Condition </Typography>
                </Button>
            </div>
            <div className={clsx(!saved && classes.hide)}>
                <Button onClick={handleConditionClick} variant="outlined" color="default" size="large" endIcon={<SyncAltIcon color='primary' />} >
                    <Typography variant='body2' color='inherit'> {condition} </Typography>
                </Button>
            </div>


        </div>
    )
}

export default Home


