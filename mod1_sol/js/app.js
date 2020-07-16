(function () {
'use strict';

angular.module('LMApp', [])
//.controller('LMController', ['$scope','$filter','$injector',LMController]);
.controller('LMController', LMController);

LMController.$inject = ['$scope'];

function LMController ($scope) {
  $scope.lunch_menu = "";
  $scope.message = "";
  
  $scope.check = function () {
      var list = $scope.lunch_menu.split(',');
      console.log("scope.lunch_menu.length = "+$scope.lunch_menu.length);
      console.log(list);
      console.log(list.length);
      var count = list.length;
      for( var i =0; i<list.length; i++)
      {
          list[i] = list[i].trim();
          if(list[i].length===0)count--;
      }
      if(count===0)
      {
          return "Please enter some data";
      }
      else{
         if(count<=3)
          {
              return  "Enjoy!";
          }
          else
          {
              return "Too much!";
          }
      }
      
  };
  
   $scope.sayMessage = function () {
      
     $scope.message = $scope.check();
  };
  console.log(LMController);
  
  
}

})();
