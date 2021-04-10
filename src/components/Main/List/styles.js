import { makeStyles } from '@material-ui/core/styles';
import { yellow, green } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    avatarIncome: {
        color: '#fff',
        backgroundColor: green[500],
    },
    avatarExpense: {
        color: theme.palette.getContrastText(yellow[500]),
        backgroundColor: yellow[500],
    },
    list: {
        maxHeight: '150px',
        overflow: 'auto',
    },
}));