import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { ListAddItem } from './ListAddItem';
import { ListItems } from './ListItems';

export const ListComp = ({ data }) => {
    const miData = data.filter(array => array);
    const [list, setList] = useState(miData);

    /**
     * -------------------------------------------------------
     * @summary addUser
     * @description Agrega nuevo usuario via api rest metodo POST
     * -------------------------------------------------------
     */
    const addUser = async (id, username, name, email, phone) => {


        await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify({
                id: id,
                username: username,
                name: name,
                email: email,
                phone: phone
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(resp => {
                if (resp.status !== 201) {
                    return;
                } else {
                    return resp.json();
                }
            })
            .then(data => {
                setList(list => [...list, data]);
            })
            .catch(error => console.log(error));
    };

    /**
     * -------------------------------------------------------
     * @summary updateUser
     * @description Actualiza usuario via api rest metodo PUT
     * -------------------------------------------------------
     */
    const updateUser = async (id, username, name, email, phone) => {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                username: username,
                name: name,
                email: email,
                phone: phone
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(resp => {
                if (resp.status !== 200) {
                    return;
                } else {
                    return resp.json();
                }
            })
            .then(data => {
                const upUsers = list.map(user => {
                    if (user.id === id) {
                        user.username = username;
                        user.name = name;
                        user.email = email;
                        user.phone = phone;
                    }
                    return user;
                });
                setList(list => [...list]);

            })
            .catch(error => console.log(error));
    };


    /**
     * -------------------------------------------------------
     * @summary deleteUser
     * @description Elimina usuario via api rest metodo DELETE
     * -------------------------------------------------------
     */
    const deleteUser = async (id) => {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "DELETE"
        })
            .then(resp => {
                if (resp.status !== 200) {
                    return;
                } else {
                    setList(
                        list.filter(user => {
                            return user.id !== id;
                        })
                    );
                }
            })
            .catch(error => console.log(error));
    };



    return (
        <>
            <div className="container_list">
                <ListAddItem addUser={addUser} />
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
                        {list.map(user => {
                            return (
                                // <ListItems {...user} updateUser={updateUser} deleteUser={deleteUser} />
                                <ListItems key={user.id} {...user} updateUser={updateUser} deleteUser={deleteUser} />
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