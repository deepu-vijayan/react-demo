import React from 'react'
import AddEmployee from './AddEmployee';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import PageHeader from '../../shared/PageHeader';
import { makeStyles, Paper } from '@material-ui/core';

const styles = makeStyles( theme => ({
    pageContent : {
        margin: theme.spacing(5),
        padding:theme.spacing(3)
    }
}))
export default function ManageEmployee() {
    const classes = styles();
    return (
        <>
            <PageHeader title="Manage Employee" subTitle="Some description" icon={<PeopleOutlineIcon fontSize="large" />}></PageHeader>
            <Paper className={classes.pageContent}>
                <AddEmployee />
            </Paper>
        </>
    )
}
