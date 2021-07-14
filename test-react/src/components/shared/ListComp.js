import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm';
import { usePostUsers } from '../../hooks/usePostUsers';

export const ListComp = ({ data }) => {
    const miData = data.filter(array => array);

    // const [usuariosList, setUsuariosList] = useState([]);

    const [formValues, handleInputChange] = useForm({});


    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log('target :>> ', ev.target.name.value);
        usePostUsers(ev.target.name.value, ev.target.email.value);
        // ev.target.preventDefault();
        // onAdd(ev.target.name.value, ev.target.email.value);
        // ev.target.username.value = "";
        // ev.target.name.value = "";
        // ev.target.email.value = "";
        // ev.target.phone.value = "";
    };



    // const { username, name, email, phone } = formValues;

    return (
        <>
            <div className="container_list">
                <form onSubmit={handleSubmit}>
                    <div className="container_user">
                        <div className="input-user">
                            {/* <input type="text" placeholder="USER" /> */}
                        </div>
                        <div className="input-user">
                            <input type="text" name="username" placeholder="Username" onChange={handleInputChange} />
                        </div>
                        <div className="input-user">
                            <input type="text" name="name" placeholder="Complete Name" onChange={handleInputChange} />
                        </div>
                        <div className="input-user">
                            <input type="text" name="email" placeholder="Email" onChange={handleInputChange} />
                        </div>
                        <div className="input-user">
                            <input type="text" name="phone" placeholder="Phone" onChange={handleInputChange} />
                        </div>
                        <div className="input-user">
                            <button onSubmit={handleSubmit} >agregar</button>
                        </div>
                    </div>
                </form>

                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>USER</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>PHONE</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {miData.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.user}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td className="icons">
                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <i className="icofont-search-job"></i>
                                        </div>

                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <i className="icofont-ui-edit"></i>
                                        </div>

                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <i className="icofont-trash"></i>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>

    )
}
ListComp.propTypes = {
    data: PropTypes.array.isRequired
}