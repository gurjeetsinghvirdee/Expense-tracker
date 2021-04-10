import React from 'react';
import { Card, CradHeader, CardContent, Typography, Grid, Divider, CardHeader } from '@material-ui/core';
import classes from '*.module.css';

function Main() {
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powerd by Voice" />
        </Card>
    )
}

export default Main
