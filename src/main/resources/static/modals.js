//edit
$(document).ready(function () {
    $('.table .eBtn').on('click', function (event) {
        event.preventDefault();
        let href = event.target.getAttribute('data-href')
        var text = $(this).text();
        $.get(href, function (user, status) {
            $('.myForm #id1').val(user.id);
            $('.myForm #name1').val(user.name);
            $('.myForm #age1').val(user.age);
            $('.myForm #country1').val(user.country);
            $('.myForm #email1').val(user.email);
            $('.myForm #password1').val(user.password);
            $('.myForm #roles1').val(user.roles);
        });


        $('.myForm #exampleModal').modal();

    })
});

let formEdit = document.querySelector('.editUser')
formEdit.addEventListener('submit', async (e) => {
    e.preventDefault();
    let id = document.querySelector('#id1');
    let name = document.querySelector('#name1');
    let age = document.querySelector('#age1');
    let email = document.querySelector('#email1')
    let password = document.querySelector('#password1');
    let country = document.querySelector('#country1');
    let roles =$('#roles1').val();
    let role;
    if (roles[0] === "1" && roles.length == 1) {
        role = [{
            id: 1,
            name: "ADMIN",
            authority: "ADMIN"
        }]
    }
    if (roles[0] === "2" && roles.length == 1) {
        role = [{
            id: 2,
            name: "USER",
            authority: "USER"
        }]
    }if (roles.length == 2) {
        role=[{
            id: 1,
            name: "ADMIN",
            authority: "ADMIN"
        },
            {
                id: 2,
                name: "USER",
                authority: "USER"
            }
        ]
    }

    let jsonobject =
        {
            id: +id.value,
            name: name.value,
            age: +age.value,
            email: email.value,
            password: password.value,
            country: country.value,
            roles: role,
        }

    console.log(jsonobject);
    try {
        const responce = await fetch(`http://localhost:8080/api/admin/users`, {
            method: 'PUT',
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
//delete
$(document).ready(function () {
    $('.table .dBtn').on('click', function (event) {
        event.preventDefault();
        let href = event.target.getAttribute('data-href')
        var text = $(this).text();
        $.get(href, function (user, status) {
            $('.myForm #id2').val(user.id);
            $('.myForm #name2').val(user.name);
            $('.myForm #age2').val(user.age);
            $('.myForm #country2').val(user.country);
            $('.myForm #email2').val(user.email);
            $('.myForm #password2').val(user.password);
            $('.myForm #roles2').val(user.roles);
        });


        $('.myForm #exampleModalDelete').modal();

    })
});
let formDelete = document.querySelector('.deleteUser')
formDelete.addEventListener('submit', async (e) => {
    e.preventDefault();
    let id = document.querySelector('#id2');
    let name = document.querySelector('#name2');
    let age = document.querySelector('#age2');
    let email = document.querySelector('#email2')
    let password = document.querySelector('#password2');
    let country = document.querySelector('#country2');
    let roles = document.querySelector('#roles2');

    let jsonobject =
        {
            id: +id.value,
            name: name.value,
            age: +age.value,
            email: email.value,
            password: password.value,
            country: country.value,
            roles: roles.value,
        }
    console.log(jsonobject);
    try {
        const responce = await fetch(`http://localhost:8080/api/admin/users/delete/${id.value}`, {
            method: 'DELETE',
            body: JSON.stringify(jsonobject),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json = await responce.json()
        renderPage();

    } catch (e) {
        console.error(e)
    }
})