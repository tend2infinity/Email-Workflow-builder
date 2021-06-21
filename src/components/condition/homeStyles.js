import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 350;

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems:'center'
    },
    hide: {
        display: 'none !important',
    },

    line: {
        borderLeft: '1px solid grey',
        height: '30px',
        position: 'relative',
        left: '50%',
    },
    lineHorizontal: {
        borderTop: '1px solid grey',
        position: 'relative',
    },
    lineVertical: {
        display: 'flex',
        alignItems:'center',
        borderRight: '1px solid grey',
        borderLeft: '1px solid grey',
        height: '30px',
    },

    iconButton: {
        backgroundColor: 'rgba(0,0,0,0.03)'
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    thumbupIconContainer: {
        padding: '2px 18px',
        border: '1px solid grey',
        backgroundColor: '#33cc33',
        borderRadius: '12px'
    },
    thumbdownIconContainer: {
        padding: '2px 18px',
        border: '1px solid grey',
        backgroundColor: '#ff0000',
        borderRadius: '12px'
    }


}));