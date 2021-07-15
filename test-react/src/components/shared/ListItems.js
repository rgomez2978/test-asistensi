import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { FormValidate } from './FormValidate';

export const ListItems = ({ id, username, name, email, phone, updateUser, deleteUser }) => {
    const [edit, setEdit] = useState(false);
    const [formValues, handleInputChange, reset] = useForm({});
    /**
     * -------------------------------------------------------
     * @summary handleDelete
     * @description Edita usuario por id
     * -------------------------------------------------------
     */
    const handleEdit = () => {
        setEdit(!edit);
    };

    /**
     * -------------------------------------------------------
     * @summary handleDelete
     * @description Elimina usuario por id
     * -------------------------------------------------------
     */
    const handleDelete = () => {
        deleteUser(id);
    };


    /**
     * -------------------------------------------------------
     * @summary handleSubmit
     * @description Valida datos para enviar formulario
     * al editar y elimnar
     * -------------------------------------------------------
     */
    const handleSubmit = (ev) => {
        ev.preventDefault();
        setEdit(!edit);
        let myUsername = document.getElementById("username").value;
        let myName = document.getElementById("name").value;
        let myEmail = document.getElementById("email").value;
        let myPhone = document.getElementById("phone").value;
        updateUser(id, myUsername, myName, myEmail, myPhone);
    };



    return (
        <tr>
            <td>{id}</td>
            <td>
                {edit ?
                    <form onSubmit={handleSubmit}>
                        <input type="text" id="username" name="username" placeholder="Username" className="input-list" onChange={handleInputChange} defaultValue={username} />
                    </form>
                    :
                    username
                }
            </td>
            <td>
                {edit ?
                    <form onSubmit={handleSubmit}>
                        <input type="text" id="name" name="name" placeholder="Name" className="input-list" onChange={handleInputChange} defaultValue={name} />
                    </form>
                    :
                    name
                }
            </td>
            <td>
                {edit ?
                    <form onSubmit={handleSubmit}>
                        <input type="text" id="email" name="email" placeholder="Email" className="input-list" onChange={handleInputChange} defaultValue={email} />
                    </form>
                    :
                    email
                }
            </td>
            <td>
                {edit ?
                    <form onSubmit={handleSubmit}>
                        <input type="text" id="phone" name="phone" placeholder="Phone" className="input-list" onChange={handleInputChange} defaultValue={phone} />
                    </form>
                    :
                    phone
                }
            </td>
            <td className="icons">
                {edit ?
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={handleSubmit}>
                        <i className="icofont-save"></i>
                    </div>
                    :
                    <>
                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={handleEdit}>
                            <i className="icofont-ui-edit"></i>
                        </div>
                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={handleDelete}>
                            <i className="icofont-trash"></i>
                        </div>
                    </>
                }

            </td>
        </tr>
    );
}
