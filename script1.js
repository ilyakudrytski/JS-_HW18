class HashStorageClass {
    constructor() {
        this.storage = {};
    }

    addValue(key, value) {
        this.storage[key] = value;
    }

    getValue(key) {
        if (key in this.storage) {
            return this.storage[key];
        }
        return undefined
    }

    deleteValue(key) {
        if (key in this.storage) {
            delete this.storage[key];
            return true
        }
        return false
    }

    getKeys() {
        return Object.keys(this.storage);
    }
}

const drinkStorage = new HashStorageClass();

const inputBtn = document.querySelector('#input');
const outputBtn = document.querySelector('#output');
const deleteBtn = document.querySelector('#delete');
const listBtn = document.querySelector('#list');

inputBtn.addEventListener('click', input);
outputBtn.addEventListener('click', output);
deleteBtn.addEventListener('click', del);
listBtn.addEventListener('click', list)

function input() {

    const key = prompt('Введите название напитка', 'Куба Либрэ');
    containAlco = confirm('Напиток алкогольный?');
    recept = prompt('Напишите рецепт', 'Ром, кока-кола, лайм')
    info = `напиток: ${key}
            алкогольный: ${containAlco}
            рецепт приготовления: ${recept}`;
    drinkStorage.addValue(key, info)
}



function output() {
    const key = prompt('Введите название напитка', 'Куба Либрэ');
    alert(drinkStorage.getValue(key))

}

function del() {
    const key = prompt('Введите название напитка', 'Куба Либрэ');
    alert(drinkStorage.deleteValue(key));
}

function list() {
    alert(drinkStorage.getKeys().join(' '));
}