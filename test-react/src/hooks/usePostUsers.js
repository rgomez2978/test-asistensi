import { useEffect } from "react";
// import { getPostUsers } from "../helpers/postUser";

export const usePostUsers = (usuariosadd) => {

    console.log("Cargo Valor");
    console.log('usuariosadd :>> ', usuariosadd);
    const [state, setstate] = useState({ name, email, loading: true });

    // useEffect(() => {
    //     getPostUsers().then(usrs => {
    //         setstate({ data: usrs, loading: false, });
    //     });
    // }, [usuariosAdd]);
    return state;
};

