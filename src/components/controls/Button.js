import { Button, makeStyles } from "@material-ui/core";
const useStyle = makeStyles((theme)=>({
    root:{
        margin:theme.spacing(0.5)
    },
    label : {
        textTransform: 'none'
    }
}))

const CustomeButton = (props)=> {

    const classes = useStyle();
    return (
        <Button 
        size={props.size || "large"}
        color={props.color || "primary"}
        type={props.type || "button"}
        onClick={props.onClick}
        classes={{root:classes.root, label: classes.label}}
        >
            {props.label}
        </Button>
    )
}
export default CustomeButton;