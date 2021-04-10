import React from 'react';
import { List as MUILIST, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import useStyles from './styles';

const List = () => {
    const classes = useStyles();

    const transactions = [
        { id: 1, type: "Expense", category: 'Grocerries', amount: 280, date: "Sat Apr 10" },
        { id: 2, type: "Income", category: 'Salary', amount: 80, date: "Sat Apr 9" },
        { id: 3, type: "Expense", category: 'Travel', amount: 38, date: "Sat Apr 8" }
    ];
    
    return (
        <MUILIST desnse={false} className={classes.list}>
            {transactions.map((transaction) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText  primary={transaction.category} secondary={`${transaction.amount} - ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick="">
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUILIST>
    )
}

export default List
