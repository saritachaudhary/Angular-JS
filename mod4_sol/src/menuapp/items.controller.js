(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsListController', ItemsListController)

  ItemsListController.$inject = ['MenuDataService', 'items'];
  function ItemsListController(MenuDataService, items) {
    var itemsList = this;
    itemsList.items = items.menu_items;
    itemsList.category = items.category.name;
    itemsList.selectedIdx = 0;

    itemsList.setSelected = function (idx) {
      console.log("itemsList.setSelected idx: ", idx);
      if( itemsList.selectedIdx == idx ){
        itemsList.selectedIdx = null;
      }
      else{
        itemsList.selectedIdx = idx;
      }
    }
  }
})();
