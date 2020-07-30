(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$q', '$http'];
  function MenuDataService($q, $http) {
    var service = this;

    //variables

    //functions
    service.getAllCategories = function () {
      var deferred = $q.defer();
      var promise = $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/categories.json")
      })
      .then( function (result) {
        deferred.resolve(result.data);
      })
      .catch(function (error) {
        deferred.reject(error);
      });

      return deferred.promise;
    };

    service.getItemsForCategory = function (categoryShortName) {
      var deferred = $q.defer();
      var promise = $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName)
      })
      .then( function (result) {
        deferred.resolve(result.data);
      })
      .catch(function (error) {
        deferred.reject(error);
      });

      return deferred.promise;
    };

  }

})();
