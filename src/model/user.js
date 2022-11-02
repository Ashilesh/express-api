export class User {
    constructor(username, password) {
        this.username = username
        this.password = password
    }

    // return true when found in DB else false
    isAuthenticated(DB) {
        return DB.findIndex(user => user.username === this.username && user.password === this.password) === -1 ? false : true
    }
}

