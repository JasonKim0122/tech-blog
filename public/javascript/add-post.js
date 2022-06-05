async function formHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;

    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

//Event listener
document.querySelector('.new-post').addEventListener('submit', formHandler);