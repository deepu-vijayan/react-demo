import  {useState} from 'react';



const useForm = (initialState) => {
    const [formValue, setFormState] = useState(initialState);

    const handleInputChange = (event) =>{
        const {name , value} = event.target;
        setFormState({
            ...initialState,
            [name]:value
        })
    }

    return {
        formValue,
        setFormState,
        handleInputChange
    }
}

export default useForm;
