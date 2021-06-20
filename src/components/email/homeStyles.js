import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    line: {
        borderLeft: '1px solid grey',
        height: '50px',
        position: 'relative',
        left: '50%',
    },
    emailIconContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        padding: '45px',
        position: 'relative',
    },
    emailContainer: {
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        border: '1px solid grey',
        position: 'relative',
        padding: '5px',

    },
    buttonContainer: {
        marginTop: '7px'
    }
 




}));