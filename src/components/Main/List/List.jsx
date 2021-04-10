import React from 'react';
import { List as MUILIST, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import useStyles from './styles';

const List = () => {
    const classes = useStyles();

    const transactions = [];
    
    return (
        <MUILIST desnse={false} className={classes.list}>
            {transcations.map((transactions) => (
                <Slide>
                    
                </Slide>
            ))}
        </MUILIST>
    )
}

export default List
