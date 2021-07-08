
function HashStorageFunc() {
  this.storage = {};

  this.addValue = function (key,value) {
 
    this.storage[key]=value;
  }

  this.getValue = function (key) {
    
    if (key in this.storage) {
      return this.storage[key];
    }
    return undefined
  }

  this.deleteValue = function (key) {
    
    if (key in this.storage) {
      delete this.storage[key];
      return true
    } 
    return false
  }

  this.getKeys = function () {
   
    return Object.keys(this.storage);
  }
}

var drinkStorage = new HashStorageFunc();
  
 
  var input = function () {
    var key = prompt('Введите название напитка','Куба Либрэ');

    var value = function () {
      value = {};
      value.containAlcohol = confirm('Напиток алкогольный?');
      value.writeRecept  = prompt('Напишите рецепт','Ром, кока-кола, лайм');
    }

    value();

    return drinkStorage.addValue(key,value);
  }
  
  var output = function () {
    var key = prompt('Введите название напитка','Куба Либрэ');
   
    var value = drinkStorage.getValue(key);

    var info = `\nНапиток: ${key};
                  \nАлкогольный: ${value.containAlcohol ? 'Да' : 'Нет'};
                  \nРецепт приготовления: ${value.writeRecept}.`;

    return info;
    
  }
  
  var del = function () {
    var key = prompt('Введите название напитка','Куба Либрэ');
    return drinkStorage.deleteValue(key);
  }
  
  var list = function () {
    return drinkStorage.getKeys().join(' ');
  }

  console.log(drinkStorage)