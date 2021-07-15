import { useEffect, useState } from "react";

export const useGetFetch = () => {
    const [state, setstate] = useState({ data: [] });
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(resp => resp.json())
            .then(data => setstate({ data: data }))
            .catch(error => console.log(error));
    }, []);
    return state;
};
