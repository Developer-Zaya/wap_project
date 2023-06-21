const Users = require('../models/users');

exports.login = (req, res, next) => {
    const { username, password } = req.body;
    const user = Users.login(username, password);
    if (user) {
        // Authentication successful
        res.status(200).json({ message: 'Login successful',token: user.getToken() ,status:200});
    } else {
        // Authentication failed
        res.status(401).json({ message: 'Invalid username or password' ,status:401});
    }
};
