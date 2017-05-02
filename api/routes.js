var express 	= require('express');
var user        = require('./models/user');

var routes = express.Router();

routes.post("/register", user.register);
routes.post("/authenticate", user.authenticate);

// =================================================================
// authenticated routes ============================================
// =================================================================
routes.use(user.tokenMiddleware);
routes.get("/", function(req, res) { res.json({message: 'Hi ' + req.user.login}); }); // Say hi to the authenticate user

routes.get("/users",            user.getUsers);             // Get all the users
routes.get("/user",             user.getUser);              // Get the current authentified user data
routes.get("/user/:id",         user.getUserById);          // Get user by them id
routes.post("/user",            user.updateUser);           // Update user informations
routes.get("/user/:id/articles",article.getArticleByAuthor);   // Get all articles of a user with his id


module.exports = routes;