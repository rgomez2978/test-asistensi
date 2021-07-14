// export const postFetchUsers = async () => {
//     const url = "https://jsonplaceholder.typicode.com/users";

//     // const requestOptions = {
//     //     method: 'POST',
//     //     headers: { 'Content-Type': 'application/json; charset=UTF-8"' },
//     //     body: JSON.stringify({
//     //         user: username,
//     //         name: name,
//     //         email: email,
//     //         phone: phone
//     //     }),
//     // };
//     // const resp = await fetch(url, requestOptions);
//     // const data = await resp.json();
// }


// const postFetchUsers = async (name, email) => {
//     await fetch("https://jsonplaceholder.typicode.com/users", {
//         method: "POST",
//         body: JSON.stringify({
//             name: name,
//             email: email
//         }),
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         }
//     })
//         .then((response) => {

//             console.log('response :>> ', response);
//             if (response.status !== 201) {
//                 return;
//             } else {
//                 return response.json();
//             }
//         })
//         .then((data) => {
//             setUsers((users) => [...users, data]);
//         })
//         .catch((error) => console.log(error));
// };

