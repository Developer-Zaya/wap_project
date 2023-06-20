let users = [{username:'1',password:'123'}];

module.exports = class Users {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    static addUser(username, password) {
        const newUser = new Users(username, password);
        users.push(newUser);
    }

    static auth(username, password) {
        const user = users.find(user => user.username === username && user.password === password);
        return user ? true : false;
    }
};