// Example of asynchronous programming with Fetch API
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
        // Display fetched data in the 'output' div
        document.getElementById('output').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Error:', error));
