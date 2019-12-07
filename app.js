(function(){
  'use strict';
  var itemlist =[
    {
      name: "donuts",
      quantity:"20",
      status:"Unbought"
    },
    {
      name:"milk",
      quantity:"50",
      status:"Unbought"
    },
    {
      name:"cookies",
      quantity:"50",
      status:"Unbought"
    },
    {
      name:"chicken",
      quantity:"10",
      status:"Unbought"
    },
    {
      name: "bismol",
      quantity:"10",
      status:"Unbought"
    }
  ];
angular.module('webapp',[])
.controller('availableitems',availableitems)
.controller('boughtitems',boughtitems)
.service('shoppingservice',shoppingservice);
availableitems.$inject=['shoppingservice'];
function availableitems(shoppingservice){
  var list1 = this;
  list1.items = shoppingservice.itemslist();
  list1.buyitems = function(indexitem){
  shoppingservice.adddataitem(indexitem);
  (list1.items[indexitem]).status=shoppingservice.status1();
  // list1.boughtitemm = shoppingservice.dataitem2;
  };
}
boughtitems.$inject=['shoppingservice'];
function boughtitems(shoppingservice){
  var list2 = this;
  list2.items=shoppingservice.getitem();
  list2.remove=function(itemindex){
  var name2=list2.items[itemindex].name;
  list2.items.splice(itemindex,1);
  shoppingservice.status2(name2);
  };
}
function shoppingservice(){
  var service = this;
  var shoppinglist = [];
  service.adddataitem = function(indexitem){
    service.dataitem2 = indexitem;
    // return indexitem;
    shoppinglist.push(itemlist[service.dataitem2]);
  };
  service.status1=function(){
    return "Bought";
  }
  service.status2=function(name2){
    for(var i=0;i<=itemlist.length;i++)
    {
      if(itemlist[i].name==name2){
        itemlist[i].status = "Unbought";
      }
    }
  }
  service.getitem=function(){
    return shoppinglist;
  }
  service.itemslist=function(){
    return itemlist;
  }
}
})();
