var express 	= require('express');
var user        = require('./models/user');
var group        = require('./models/group');

var routes = express.Router();

routes.post("/register",        user.register);
routes.post("/authenticate",    user.authenticate);

routes.route("/groups")
    .get(group.getAll)
    .post(group.post);
routes.route("/groups/:id")
    .get(group.get)
    .put(group.put)
    .delete(group.delete);

// =================================================================
// authenticated routes ============================================
// =================================================================
routes.use(user.tokenMiddleware);
routes.get("/", function(req, res) { res.json({message: 'Hi ' + req.user.login}); }); // Say hi to the authenticate user

routes.route("/users")
    .get(user.getAll);
routes.route("/users/:id")
    .get(user.get)
    .put(user.put)
    .delete(user.delete);


module.exports = routes;