import React from 'react';
import { ListComp } from '../index';
import { useGetFetch } from '../../hooks/useFetch';

export const DevelopersPage = () => {
    const { data: usersList } = useGetFetch();
    return (
        <div className="animate__animated animate__fadeIn">
            <ListComp key={usersList} data={usersList} />
        </div>
    )
}
