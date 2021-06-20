import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 350;

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: 'white',
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: 'white',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'black'
    },
    hide: {
        display: 'none !important',
    },
    applogo: {
        width: '200px',
        height: '70px'
    },
    content: {
        flexGrow: 1.5,
        marginTop: '100px',
        padding: theme.spacing(4),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    workflowCard: {
        width: '500px',
    },
    line: {
        borderLeft: '1px solid grey',
        height: '50px',
        position: 'relative',
        left: '50%',
    },
    iconButton: {
        backgroundColor: 'rgba(0,0,0,0.03)'
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    modalPaper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        flexBasis: '0'
    },
    modalParentContent: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    modalContent: {
        padding: '15px',
        margin: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexGrow: '1',
        flexBasis: '0',
        width: '100px',
        border: '2px solid #A8A8A8', '&:hover' :{
            border: '2px solid #0e70ad' },
        cursor: 'pointer',
        
    },

}));