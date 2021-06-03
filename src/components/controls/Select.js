import { FormControl, FormHelperText, InputLabel, makeStyles, MenuItem, Select as MuiSelect } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const CustomeSelect = (props) => {
    const classes = useStyles();
    return (
        <FormControl variant="outlined" className={classes.formControl} {...(props.error && {error:true})}>
            <InputLabel htmlFor="outlined-age-native-simple" >{props.label}</InputLabel>
            <MuiSelect
                value={props.department}
                onChange={props.onChange}
                inputProps={{
                    name: props.name,
                    id: 'outlined-age-native-simple',
                }}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {
                    props.options.map((option) => (
                        <MenuItem  key={option.id} value={option.value}>{option.text}</MenuItem>
                    )
                    )
                }

            </MuiSelect>
            {props.error &&<FormHelperText>{props.error}</FormHelperText>}
        </FormControl>
    )
}
export default CustomeSelect;