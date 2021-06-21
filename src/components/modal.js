import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
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
import ConditionComponent from './condition/home'
import EmailComponent from './email/home'
import DelayComponent from './delay/home'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import { Button } from '@material-ui/core';



function ModalComponent() {
    const [email, setEmail] = useState(false)
    const [condition, setCondition] = useState(false)
    const [delay, setDelay] = useState(false)
    const [modal, setModal] = useState(false)
    const [endWorkflow, setEndWorkflow] = useState(false)
    const theme = useTheme();
    const classes = useStyles(theme);


    const toggleEmail = () => {
        toggleModalClose()
        setEmail(true)
    }
    const toggleCondition = () => {
        toggleModalClose()
        setCondition(true)

    }
    const toggleDelay = () => {
        toggleModalClose()
        setDelay(true)
    }
    const toggleModalOpen = () => {
        setModal(true)

    }
    const toggleModalClose = () => {
        setModal(false)
    }
    const handleEndWorkflow = () => {
        setEndWorkflow(true)
        toggleModalClose()
    }


    return (
        <div>
            {console.log("email is", email)}
            {console.log("delay is", delay)}
            {console.log("condition is", condition)}
            {console.log("modal is", modal)}
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
                                onClick={handleEndWorkflow}
                            >

                                <SettingsOutlinedIcon color='action' id="hoverIcon4" />
                                <Typography style={{ marginTop: '10px' }} color='textSecondary' variant='body1'>
                                    <b>End Workflow</b></Typography>
                            </div>
                        </div>



                    </div>
                </Fade>


            </Modal>
            <div className={classes.buttonContainer}>
                {email && <div> <EmailComponent homeDrawer /> <ModalComponent /></div>}
                {delay && <div><DelayComponent homeDrawer /> <ModalComponent /></div>}
                {condition && <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <ConditionComponent homeDrawer />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ left: '0' }} className={clsx(classes.line)}></div>
                        <div className={clsx(classes.lineHorizontal)}></div>

                        <div style={{ display: 'flex' }}>
                            <div><div className={clsx(classes.line)}></div><div className={classes.thumbupIconContainer}><ThumbUpAltOutlinedIcon /></div><ModalComponent /></div>
                            <div><div className={clsx(classes.line)}></div><div className={classes.thumbdownIconContainer}><ThumbDownOutlinedIcon /> </div><ModalComponent /></div>
                        </div>

                    </div>

                </div>}
                {endWorkflow && <div>
                    <div className={clsx(classes.line)}></div>
                    <Button variant="outlined" color="default" size="large" >
                    <Typography variant='body2' color='initial'> Workflow Completed</Typography>
                    </Button>
                    </div>}
            </div>



        </div>


    )
}

export default ModalComponent


