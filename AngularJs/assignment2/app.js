(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;


  list1.items = ShoppingListCheckOffService.getItems();

  list1.itemName = "";
  list1.itemQuantity = "";

  list1.addItem = function () {
    ShoppingListCheckOffService.addItem(list1.itemName, list1.itemQuantity);
  }
  list1.removeItem = function (itemIndex) {
     try {
      ShoppingListCheckOffService.removeItem(itemIndex);
    } catch (error) {
      list1.errorMessage = error.message;
    }
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;
  list2.boughtMessage = "Nothing bought yet!";
  list2.alreadyBought = ShoppingListCheckOffService.getItems2();
  try {
      list2.items = ShoppingListCheckOffService.getItems2();
    } catch (error) {
      list2.errorMessage = error.message;
    }

}


function ShoppingListCheckOffService() {
  var service = this;
  var emp = [{val:1}];
  var items = [{name: "Milk",quantity: "2"},{name: "Donuts",quantity: "200"},{name: "Cookies",quantity: "300"},{name: "Chocolate",quantity: "5"},{name: "Coke",quantity: "8"}];
  var items2= [];
  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.removeItem = function (itemIdex) {
      var TmpItem = {
      name: items[itemIdex].name,
      quantity: items[itemIdex].quantity
      };
      items2.push(TmpItem);
      items.splice(itemIdex, 1);
      emp.val=0;
    if(items.length<1)
    {
      throw new Error("Everything is bought!");
    }  
  };

  service.getItems = function () {
    return items;
  };
  service.getItems2 = function () {
     return items2;
  };
}

})();
