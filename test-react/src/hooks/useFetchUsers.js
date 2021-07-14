import { useEffect, useState } from "react";
import { getFetchUsers } from "../helpers/getUsers";

export const useFetchUsers = (usuarios) => {
    const [state, setstate] = useState({ data: [], loading: true, });
    useEffect(() => {
        getFetchUsers().then(usrs => {
            setstate({ data: usrs, loading: false, });
        });
    }, [usuarios]);
    return state;
};

