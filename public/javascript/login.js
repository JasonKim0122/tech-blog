async function loginHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location = ('/dashboard/');
        } else {
            alert(response.statusText);
        }
    }
};

async function signupHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();

    if (email && password && username) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                email,
                password,
                username
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok) {
            console.log('success');
            document.location.replace('/dashboard/');
        } else {
            alert(response.statusText);
        }
    }
};

//Event listeners

document.querySelector('.login-form').addEventListener('submit', loginHandler);
document.querySelector('.signup-form').addEventListener('submit', signupHandler);