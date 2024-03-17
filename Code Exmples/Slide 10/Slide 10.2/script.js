// Example JavaScript WebSocket
var socket = new WebSocket('wss://echo.websocket.org');

socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

socket.addEventListener('message', function (event) {
    console.log('Message from server:', event.data);
    alert('Message from server:', event.data);
});
