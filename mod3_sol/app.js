(function () {

'user strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItemsDirective);

    function foundItemsDirective() {
        var ddo = {
            templateUrl: 'founditems.html',
            scope: {
                found: '<',
                onRemove: '&',
                isEmpty: '<'
            }
        };

        return ddo;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var menu = this;

        menu.getmenuitems = function (searchTerm) {
            menu.empty = searchTerm == ("" || undefined)? true : false;

            if (!menu.empty) {
                var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
                menu.found = [];
                promise.then(function (response) {
                    menu.found = response;
                    menu.empty = menu.found.length > 0 ? false : true;

                });
            }

        };

        menu.removeItem = function(itemIndex) {
            return menu.found.splice(itemIndex, 1);
        };
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function(searchTerm) {
            return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"

            }).then(function(result) {
                var foundItems = [];
                var temp = result.data.menu_items;
                if (searchTerm != undefined && searchTerm != "") {
                    for(var i = 0; i < temp.length; i++) {
                      if (temp[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1)
                        foundItems.push(temp[i]);

                    }
                }


                return foundItems;
            });
        };
    }
})();
