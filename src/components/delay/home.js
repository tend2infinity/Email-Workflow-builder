import React,{useState} from 'react'
import { useTheme } from '@material-ui/core/styles';
import { useStyles } from '../../homeComponent/homeStyles';
import clsx from 'clsx';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { toggleOpen, toggleWorkflowTrue, toggleWorkflowFalse } from '../../redux-slices/homeSlice';
import * as EmailValidator from 'email-validator';
import Drawer from './drawer'
import AccessTimeIcon from '@material-ui/icons/AccessTime';


function Home() {
    const dispatch = useDispatch()
    const [timer, setTimer]= useState('')
    const [timerType, setTimerType] = useState('Day(s)')
    const theme = useTheme();
    const classes = useStyles(theme);
    const [saved, setSaved] = useState(false)
    const [drawer, setDrawer] = useState(false)

    const handleDrawerOpen = () => {
        dispatch(toggleOpen());

    };

    const handleSave = () =>{
        setSaved(true)
    }
    const handleCancel = () =>{
        setTimer('')
        setTimerType('Day(s)')
        setSaved(false)
    }
    const handleTimerClick = () => {
        setDrawer(true)
    }
    const handleTimerChange = (event) => {
        if(event.target.value < 0){
            (event.target.value = 0)
        } 
        setTimer(event.target.value)
    }
    const handleTimerTypeChange = (event) => {
        setTimerType(event.target.value)
    }
 

    const drawerprops = {
        drawer,
        timer,
        saved,
        timerType,
        handleDrawerOpen,
        handleSave,
        handleCancel,
        handleTimerChange,
        handleTimerTypeChange
        
    }

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', margin:'0 5px'}}>
            {drawer && <Drawer {...drawerprops} />}
            <div style={{left: '0'}} className={clsx(classes.line)}></div>
            <div className={clsx(saved && classes.hide)}>
            <Button onClick={handleTimerClick} variant="outlined" color="default" size="large" endIcon={<AccessTimeIcon color='action' />}>
            <Typography variant='body2' color='textSecondary'>Enter a Time Delay </Typography>
            </Button>
            </div>
            <div className={clsx(!saved && classes.hide)}>
            <Button onClick={handleTimerClick} variant="outlined" color="default" size="large" endIcon={<AccessTimeIcon color='primary' />}>
            <Typography variant='body2' color='inherit'>Wait {timer} {timerType} </Typography>
            </Button>
            </div>
            

        </div>
    )
}

export default Home

