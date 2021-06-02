

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker as MuiDatePicker } from '@material-ui/pickers';

const DatePicker = (props)=> {
    const convertToEventPara = (name, value) => ({
        target : {
            name,
            value
        }
    })
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <MuiDatePicker 
            variant="inline"
            format="dd-m-yyyy"
            name={props.name} 
            value={props.value} 
            label={props.label}
            onChange={e => props.onChange(convertToEventPara(props.name, e))} 
            ></MuiDatePicker>
        </MuiPickersUtilsProvider>

    )
}
export default DatePicker;