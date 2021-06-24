import React,{useState} from 'react'
import { useTheme } from '@material-ui/core/styles';
import { useStyles } from './homeStyles';
import clsx from 'clsx';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { toggleOpen, toggleWorkflowTrue, toggleWorkflowFalse } from '../../redux-slices/homeSlice';
import * as EmailValidator from 'email-validator';
import Drawer from './drawer'


function Home() {
    const dispatch = useDispatch()
    const [error, setError]= useState(true)
    const theme = useTheme();
    const classes = useStyles(theme);
    const [subject, setSubject] = useState('')
    const [fromName, setFromName] = useState('')
    const [fromEmail, setFromEmail] = useState('')
    const [emailTemplate, setEmailTemplate] = useState('')
    const [saved, setSaved] = useState(false)
    const [drawer, setDrawer] = useState(false)

    const handleDrawerOpen = () => {
        dispatch(toggleOpen());

    };

    const handleSubjectChange = (event) =>{
        setSubject(event.target.value)
    }
    const handleFromChange = (event) =>{
        setFromName(event.target.value)
    }
    const handleFromEmailChange = (event) =>{
        setFromEmail(event.target.value)
        handleError()
    }
    const handleTemplateChange = (event) =>{
        setEmailTemplate(event.target.value)
    }
    const handleSave = () =>{
        setSaved(true)
    }
    const handleCancel = () =>{
        setSubject("")
        setFromName("")
        setFromEmail("")
        setEmailTemplate("")
        setError(true)
        setSaved(false)
    }
    const handleEmailClick = () => {
        setDrawer(true)
        handleDrawerOpen()
    }
    const handleError = () => {
        if(EmailValidator.validate(fromEmail))
        setError(false)
        else {
            setError(true)
        }
    }


    const drawerprops = {
        subject,
        fromName,
        fromEmail,
        emailTemplate,
        error,
        handleSubjectChange,
        handleFromChange,
        handleFromEmailChange,
        handleTemplateChange,
        handleSave,
        handleCancel
    }

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', margin:'0 5px'}}>
            {drawer && <Drawer {...drawerprops} />}
            <div style={{left: '0'}} className={clsx(classes.line)}></div>
            <div className={classes.emailContainer}>
                <div className={classes.emailIconContainer}>
                    <EmailOutlinedIcon fontSize='large' color={saved ? 'primary' : 'action'} />
                </div>
                <div className={classes.buttonContainer}>
                <Button variant='outlined' onClick={handleEmailClick} ><Typography variant='caption' color={saved ? 'inherit' : 'textSecondary'}>Select Email Template</Typography> </Button>
                </div>

            </div>

        </div>
    )
}

export default Home
