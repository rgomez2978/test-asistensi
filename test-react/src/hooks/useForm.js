import { useState } from 'react';

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    /**
     * -------------------------------------------------------
     * @summary reset
     * @description Reseta o limpia los campos del formulario
     * -------------------------------------------------------
     */
    const reset = (newFormState = initialState) => {
        setValues(newFormState);
    };


    /**
     * -------------------------------------------------------
     * @summary handleInputChange
     * @description Recibe cadad caracter ingresado en el input
     * -------------------------------------------------------
     */
    const handleInputChange = ({ target }) => {
        setValues(values => ({ ...values, [target.name]: target.value }));
    };


    return [values, handleInputChange, reset];
}