import React, { useState } from 'react';
import { useFetchUsers } from '../../hooks/useFetchUsers';
import { ListComp } from '../index';

export const DevelopersPage = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const { data: users, loading } = useFetchUsers(usuarios);

    /**
     * -------------------------------------------------------
     * @summary handleInputChange
     * @description Recibe cadad caracter ingresado en el input
     * @param {e} Valor de cada caracter ingresado en el input
     * -------------------------------------------------------
     */
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    /**
     * -------------------------------------------------------
     * @summary handleInputChange
     * @description Agregar un valor en el estate de usuarios
     * @param {e} Todo el valor enviado en el submit
     * -------------------------------------------------------
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 0) {
            setUsuarios((usrs) => [inputValue, ...usrs]);
            setInputValue('');
        }
    };

    return (
        <div className="animate__animated animate__fadeIn">
            <h2>AGREGA USUARIO</h2>
            <h1> {inputValue}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleInputChange} />
            </form>
            <hr />
            <ListComp key={users} data={users} />

        </div>
    )
}
