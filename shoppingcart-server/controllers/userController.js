const Users = require('../models/users');

exports.login = (req, res, next) => {
    console.log("test")
    const { username, password } = req.body;
    console.log(req.body)
    const isAuthenticated = Users.auth(username, password);
    if (isAuthenticated) {
        // Authentication successful
        res.status(200).json({ message: 'Login successful' });
    } else {
        // Authentication failed
        res.status(401).json({ message: 'Invalid username or password' });
    }
};