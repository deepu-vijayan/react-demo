import { FormControl, FormControlLabel, Checkbox } from '@material-ui/core';
const CustomeCheckbox = (props) => {
    const convertToEventPara = (name, value) => ({
        target : {
            name,
            value
        }
    })
    return (

        <FormControl >
            <FormControlLabel 
                control={<Checkbox 
                    name={props.name} 
                    checked={props.value} 
                    onChange={e => props.onChange(convertToEventPara(props.name, e.target.checked))} 
                    color="primary" />} 
                label={props.label} 
            /> 
        </FormControl>
    )
}

export default CustomeCheckbox;
