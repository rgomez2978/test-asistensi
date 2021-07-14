export const getFetchUsers = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const resp = await fetch(url);
    const data = await resp.json();
    const usuarios = data.map((usr) => {
        return {
            id: usr.id,
            user: usr.username,
            name: usr.name,
            email: usr.email,
            phone: usr.phone
        }
    });
    return usuarios;
}




