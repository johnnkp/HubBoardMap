const {sessionMiddleware} = require('../lib/session');
const passport = require('passport');
module.exports.init = (server)=>{
    const io = require('socket.io')(server);
    // wrap connect middleware to socket.io middleware
    const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);
    io.use(wrap(sessionMiddleware));
    io.use(wrap(passport.initialize()));
    io.use(wrap(passport.session()));

    // ensure user is authenticated before allowing socket connection
    io.use((socket, next)=>{
        if (socket.request.user)
            next();
        else
            next(new Error('Unauthenticated'));
    });

    io.on('connection', (socket)=>{
        console.log('a user connected');
        socket.on('disconnect', ()=>{
            console.log('user disconnected');
        });
        socket.on('test', (msg)=>{
            console.log('test: ' + msg);
            io.emit('test', msg);
        });
    });
};