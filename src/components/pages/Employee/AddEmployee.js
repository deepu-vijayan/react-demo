import { Grid, makeStyles, TextField } from '@material-ui/core';
import React from 'react'
import useForm from '../../../hooks/usehooks';
import {Radio, RadioGroup, FormControlLabel, FormControl, FormLabel} from '@material-ui/core';
//import FormControl from '@material-ui/core/FormControl';



const InitEmployee = {
    fullName: "",
    email: "",
    mobile: "",
    gender: "male",
    department: "",
    appointDate: new Date(),
    isPermanent: false
}

const styles = makeStyles((theme) => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%'
        },
        '& .MuiGrid-item':{
            padding: theme.spacing(1)
        }
    }
}))
const AddEmployee = () => {
    const classes = styles();
    const { formValue, setFormState, handleInputChange } = useForm(InitEmployee)
    return (
        <form>
            <Grid container className={classes.root}>
                <Grid item xs={6}>
                    <TextField label="Full Name" name="fullName" id="fullName" value={formValue.fullName} onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup row aria-label="gender" name="gender" value={formValue.gender} onChange={handleInputChange}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Email" name="email" id="email" value={formValue.email} onChange={handleInputChange} />
                </Grid>
            </Grid>
        </form>
    )
}

export default AddEmployee;