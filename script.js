class BaseUser {
    constructor (username, password) {
        this.username = username;
        this.password = password;
    }

    login(username, password) {
        
    }

    logout() {

    }

    register() {

    }
}


class Admin extends BaseUser {
    login(username, password) {
        if (this.password == password && this.username == username) {
            return "redirect ke admin"
        } else {
            return "gagal";
        }
    }
}

class Employee extends BaseUser {
    login(username, password) {
        if (this.password == password && this.username == username) {
            return "redirect ke dashboard employee"
        } else {
            return "gagal";
        }
    }
}


const budi = new Employee("budibudi", "123qwe")
const broto = new Admin("brotonomus", "321ewq")

console.log(budi.login("budibudi", "123qwe"))
console.log(broto.login("brotonomus", "321ewq"))