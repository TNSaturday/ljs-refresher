// Традиционный способ создания объектов через функцию
function Person(name) {
    return {
        name,
        sayHi() {
            console.log(`Hi, ${this.name}`);
        }
    }
}

const person = Person("Marina");
person.sayHi();

// То же самое, на классе
class User {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    sayHi() {
        alert(this.name);
    }

}

// Использование:
let user = new User("Taras");
user.sayHi();