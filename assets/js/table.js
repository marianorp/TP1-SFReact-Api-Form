const URL_USERS = "https://jsonplaceholder.typicode.com/users"
fetch(URL_USERS)
    .then((response) => response.json())
    .then(user => showUser(user));

const showUser = (user) => {
    console.log("User", user);
    let body = ``;
    user.map(( { id, name, email, address, phone, company } ) => {
        return(
            body+=`
                <tr>
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${email}</td>
                    <td>${address.city}</td>
                    <td>${phone}</td>
                    <td>${company.name}</td>
                </tr>
            `);
    });
    document.getElementById("users-table").innerHTML = body;
};