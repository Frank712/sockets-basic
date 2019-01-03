var socket = io();
// The on function is for listen
socket.on('connect', function(){
    console.log('Connect with the server');
});
socket.on('disconnect', function () {
    console.log('Connection loss with server');
});
// The emmit function send information
socket.emit('sendMessage', {
    user: 'frank',
    message: 'hello world!'
}, function ( resp ) {
    console.log("Server say: ", resp);
});

// Listen message
socket.on('sendMessage', function (message){
    console.log("The server say: ", message);
});