import { makeStyles } from '@material-ui/core/styles';
import {  green, orange } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    avatarIncome: {
        color: '#fff',
        backgroundColor: green[500],
    },
    avatarExpense: {
        color: theme.palette.getContrastText(orange[500]),
        backgroundColor: orange[500],
    },
    list: {
        maxHeight: '150px',
        overflow: 'auto',
    },
}));