import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { FormValidate } from './FormValidate';


export const ListAddItem = ({ addUser }) => {

    const [formValues, handleInputChange, reset] = useForm({
        username: '',
        name: '',
        email: '',
        phone: ''
    });
    const { username, name, email, phone } = formValues;
    const [error, setError] = useState({});

    ;



    /**
     * -------------------------------------------------------
     * @summary handleSubmit
     * @description Valida datos para enviar formulario
     * al editar y elimnar
     * -------------------------------------------------------
     */
    const handleSubmit = (ev) => {
        ev.preventDefault();
        setError(FormValidate(ev.target));
        addUser(
            ev.target.id.value,
            ev.target.username.value,
            ev.target.name.value,
            ev.target.email.value,
            ev.target.phone.value
        );
        reset();
    };






    return (
        <form className="container_user" onSubmit={handleSubmit} >
            <div className="containerInput">
                <div className="input-user">
                    <input type="text" name="username" placeholder="Username" onChange={handleInputChange} value={username} />
                    {error.username && <p>{error.username}</p>}
                </div>
                <div className="input-user">
                    <input type="text" name="name" placeholder="Complete Name" onChange={handleInputChange} value={name} />
                    {error.name && <p>{error.name}</p>}
                </div>
            </div>

            <div className="containerInput">
                <div className="input-user">
                    <input type="text" name="email" placeholder="Email" onChange={handleInputChange} value={email} />
                    {error.email && <p>{error.email}</p>}
                </div>
                <div className="input-user">
                    <input type="text" name="phone" placeholder="Phone" onChange={handleInputChange} value={phone} />
                    {error.phone && <p>{error.phone}</p>}
                </div>
            </div>
            <div className="containerInputBtn">
                <div className="input-user">
                    <button onSubmit={handleSubmit} >agregar</button>
                </div>
            </div>
        </form>
    )
}
