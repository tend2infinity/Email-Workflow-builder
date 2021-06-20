import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import DeviceHubOutlinedIcon from '@material-ui/icons/DeviceHubOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import { Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { useStyles } from '../homeComponent/homeStyles';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import ActionComponent from './action/home'
import ConditionComponent from './condition/home'
import EmailComponent from './email/home'
import DelayComponent from './delay/home'


function ModalComponent() {

    const [modal, setModal] = useState(false)
    const toggleModalOpen = () => {
        setModal(true)
        console.log(modal)
    }
    const toggleModalClose = () => {
        setModal(false)
    }
    const theme = useTheme();
    const classes = useStyles(theme);
    const [email, setEmail] = useState(false)
    const [condition, setCondition] = useState(false)
    const [action, setAction] = useState(false)
    const [delay, setDelay] = useState(false)

    const toggleEmail =() =>{
        toggleModalClose()
        setEmail(true)
        setCondition(false)
        setAction(false)
        setDelay(false)
    }
    const toggleCondition =() =>{
        toggleModalClose()
        setCondition(true)
        setAction(false)
        setDelay(false)
        setEmail(false)

    }
    const toggleAction =() =>{
        toggleModalClose()
        setAction(true)
        setDelay(false)
        setEmail(false)
        setCondition(false)
    }
    const toggleDelay =() =>{
        toggleModalClose()
        setDelay(true)
        setEmail(false)
        setCondition(false)
        setAction(false)
    }

    const openModal = () =>{
        return <Modal />
    }


    return (
        <div>
            <div className={clsx(classes.line)}></div>
            <IconButton className={clsx(classes.iconButton)} onClick={toggleModalOpen}>
                <ControlPointIcon />
            </IconButton >
            <Modal
                open={modal}
                onClose={toggleModalClose}
                className={classes.modal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}

            >
                <Fade in={modal}>
                    <div className={classes.modalPaper}>
                        <Typography variant='h6' id="simple-modal-title">Add a next step to your Workflow</Typography>
                        <div className={classes.modalParentContent}>
                            <div
                                onMouseOver={() => (document.getElementById("hoverIcon1").className.baseVal = 'MuiSvgIcon-root MuiSvgIcon-colorPrimary')}
                                onMouseOut={() => (document.getElementById("hoverIcon1").className.baseVal = 'MuiSvgIcon-root MuiSvgIcon-colorAction')}
                                className={classes.modalContent}
                                onClick={toggleEmail}>

                                <EmailOutlinedIcon color='action' id="hoverIcon1" />
                                <Typography style={{ marginTop: '10px' }} color='textSecondary' variant='body1'>
                                    <b>Email</b></Typography>
                            </div>
                            <div
                                onMouseOver={() => (document.getElementById("hoverIcon2").className.baseVal = 'MuiSvgIcon-root MuiSvgIcon-colorPrimary')}
                                onMouseOut={() => (document.getElementById("hoverIcon2").className.baseVal = 'MuiSvgIcon-root MuiSvgIcon-colorAction')}
                                className={classes.modalContent}
                                onClick={toggleDelay}>

                                <QueryBuilderOutlinedIcon id="hoverIcon2" color='action' />
                                <Typography style={{ marginTop: '10px' }} color='textSecondary' variant='body1'>
                                    <b>Delay</b></Typography>
                            </div>

                            <div
                                onMouseOver={() => (document.getElementById("hoverIcon3").className.baseVal = 'MuiSvgIcon-root MuiSvgIcon-colorPrimary')}
                                onMouseOut={() => (document.getElementById("hoverIcon3").className.baseVal = 'MuiSvgIcon-root MuiSvgIcon-colorAction')}
                                className={classes.modalContent}
                                onClick={toggleCondition}>

                                <DeviceHubOutlinedIcon color='action' id="hoverIcon3" />
                                <Typography style={{ marginTop: '10px' }} color='textSecondary' variant='body1'>
                                    <b>Condition</b></Typography>
                            </div>
                            <div
                                onMouseOver={() => (document.getElementById("hoverIcon4").className.baseVal = 'MuiSvgIcon-root MuiSvgIcon-colorPrimary')}
                                onMouseOut={() => (document.getElementById("hoverIcon4").className.baseVal = 'MuiSvgIcon-root MuiSvgIcon-colorAction')}
                                className={classes.modalContent}
                                onClick={toggleAction}>

                                <SettingsOutlinedIcon color='action' id="hoverIcon4" />
                                <Typography style={{ marginTop: '10px' }} color='textSecondary' variant='body1'>
                                    <b>Action</b></Typography>
                            </div>
                        </div>



                    </div>
                </Fade>


            </Modal>
            <div className={classes.buttonContainer}>
            {email && <EmailComponent />}
            {delay && <DelayComponent />}
            {condition && <ConditionComponent />}
            {action && <ActionComponent />}
            </div>
            
            

        </div>


    )
}

export default ModalComponent


