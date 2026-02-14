// Cross Origin resource share.
const allowedOrigins = require('./allowedOrigins');
const corsOptions = {
    origin: (origin, callback) => {
        if(!origin || allowedOrigins.indexOf(origin) !== -1){
            callback(null, true)
        }else{
            // callback(null, true)
            callback(new Error('Not Allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions;