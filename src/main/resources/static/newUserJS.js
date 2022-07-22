const url1 = 'http://localhost:8080/api/admin/users/save'
const form = document.getElementById("newUserForm")
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let name = document.querySelector('#name');
    let age = document.querySelector('#age');
    let email = document.querySelector('#email')
    let password = document.querySelector('#password');
    let country = document.querySelector('#country');
    let roles = document.querySelector('#roles');
    console.log(roles.value);
    let role;
    if (roles.value === "1") {
        role = [{
            id: 1,
            name: "ADMIN",
            authority: "ADMIN"
        }]
    }
    if (roles.value === "2") {
        role = [{
            id: 2,
            name: "USER",
            authority: "USER"
        }]
    }

    let jsonobject =
        {
            name: name.value,
            age: age.value,
            email: email.value,
            password: password.value,
            country: country.value,
            roles: role,
        }
    try {
        const responce = await fetch(url1, {
            method: 'POST',
            body: JSON.stringify(jsonobject),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json = await responce.json()
        renderPage();

    } catch (e) {
        console.error(e)
        alert('there was an error')
    }

})
