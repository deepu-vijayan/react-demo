import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@material-ui/core';

const CustomeRadioGroup = (props) => {
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{props.label}</FormLabel>
            <RadioGroup row aria-label={props.name} name={props.name} value={props.value} onChange={props.onChange}>
                {
                    props.options.map((option) => (
                        <FormControlLabel key={option.id} value={option.value} control={<Radio />} label={option.text} />
                        )
                    )
                }


            </RadioGroup>
        </FormControl>

    )
}

export default CustomeRadioGroup;
