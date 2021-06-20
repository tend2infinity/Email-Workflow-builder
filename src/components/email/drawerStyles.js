import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 350;

 export const useStyles = makeStyles((theme) => ({
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'space-between',
    },
    drawerHeaderText: {
        marginLeft: '80px'
    },
    drawerFooter: {
        marginTop: '280px',
        display: 'flex'
    }, 
    listItemHeader: {
        fontWeight: 'bold',
    },
    listItemTextField: {
        width: '300px'
    },
    drawerFooterButton:{
        padding: '8px 20px',
        marginTop: '20px',
        marginLeft: '40px',
        marginRight: '40px'
        
    }
}));


