import  {useState} from 'react';



const useForm = (initialState, onTouchValidate = false, touchValidate) => {
    const [formValue, setFormState] = useState(initialState);
    const [formError, setformError] = useState({});

    const handleInputChange = (event) =>{
        const {name , value} = event.target;
        setFormState({
            ...formValue,
            [name]:value
        })
        if(onTouchValidate){
            touchValidate({[name]:value})
        }
    }
    const resetForm = () =>{
        setFormState(initialState);
        setformError({});
    }

    return {
        formValue,
        setFormState,
        formError,
        setformError,
        handleInputChange,
        resetForm
    }
}

export default useForm;
