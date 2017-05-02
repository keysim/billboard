var config = {
    secret: 'keycam',
    port : 974,
    //url : ".com:" + 3000,
    db : {url:'mongodb://keycam:keycam974@163.5.84.197:27017/keycam', port:27017, name:'keycam'}, // launch "mongod" then take port and host printed in the command line.
    model:{
        user:{
            login: {type: String, required: true},
            password: {type: String, required: true}
        },
        group:{
            team:{type:String},
            name:{type:String},
            members:{type:Array},
            rating:{type:String}
        }
    }
};

module.exports = config;