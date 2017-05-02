var config = {
    secret: 'tadam',
    port : 1234,
    //url : ".com:" + 3000,
    db : {url:'mongodb://lewo:lewo974@lewogona.com:27017/lewo', port:27017, name:'lewo'}, // launch "mongod" then take port and host printed in the command line.
    model:{
        user:{
            login: {type: String, required: true},
            password: {type: String, required: true}
        }
    }
};

module.exports = config;