import React, { useState } from 'react';
import { useFetchUsers } from '../../hooks/useFetchUsers';
import { ListComp } from '../index';

export const DevelopersPage = () => {
    // Creacion de state usuarios
    const [usuarios, setUsuarios] = useState([]);
    // llamada a custom hooks Fetch AP
    const { data: users, loading } = useFetchUsers(usuarios);

    return (
        <div className="animate__animated animate__fadeIn">
            <ListComp key={users} data={users} />
        </div>
    )
}
