const { io } = require('../server');

io.on('connection', (client)=>{
    console.log('User connect');

    client.emit('sendMessage',{
        user: 'Administrator',
        message: 'Welcome to index'
    });
    client.on('disconnect', ()=>{
        console.log('User disconnect!');
    });

    // Listen the client
    client.on('sendMessage', (obj, callback)=>{
        console.log(obj);
        client.broadcast.emit('sendMessage', obj);
        /*if( obj.user ){
            callback({
                resp: 'Thats ok!'
            });
        }
        else {
            callback({
                resp: 'Thats bad!'
            });
        }*/

    });
});