import { Grid, makeStyles, TextField } from '@material-ui/core';
import React from 'react'
import useForm from '../../../hooks/usehooks';
import CustomeCheckbox from '../../controls/Checkbox';
import CustomeRadioGroup from '../../controls/RadioGroup';
import CustomeSelect from '../../controls/Select';
import DatePicker from '../../controls/DatePicker';


const InitEmployee = {
    fullName: "",
    email: "",
    mobile: "",
    gender: "male",
    department: "",
    address: "",
    appointDate: new Date(),
    isPermanent: false
}

const radioOptions = [
    {
        id: 1,
        text: "Male",
        value: "male"
    },
    {
        id: 2,
        text: "Female",
        value: "female"
    },
    {
        id: 3,
        text: "Others",
        value: "others"
    }
];

const departments =[
    {
        id: 1,
        text:"HR",
        value:"hr"
    },
    {
        id: 2,
        text:"Management",
        value:"manage"
    },
    {
        id: 3,
        text:"Software",
        value:"soft"
    }
]

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
                     <CustomeRadioGroup label="Gender" name="gender" id="gender" value={formValue.gender} onChange={handleInputChange} options={radioOptions}></CustomeRadioGroup>   
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Email" name="email" id="email" value={formValue.email} onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <CustomeSelect label="Department" name="department" id="department" value={formValue.department} onChange={handleInputChange} options={departments} />
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Mobile" name="mobile" id="mobile" value={formValue.mobile} onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <DatePicker label="Appoint Date" name="appointDate" id="appointDate" value={formValue.appointDate} onChange={handleInputChange}></DatePicker>
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Address" name="address" id="address" value={formValue.address} onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <CustomeCheckbox label="Is Permanent" name="isPermanent" id="isPermanent" value={formValue.isPermanent} onChange={handleInputChange}></CustomeCheckbox>
                </Grid>
            </Grid>
        </form>
    )
}

export default AddEmployee;