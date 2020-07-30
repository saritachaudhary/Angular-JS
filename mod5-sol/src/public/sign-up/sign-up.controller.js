(function () {
"use strict";

angular.module('public')
.controller('signUpController',
 ['$scope', 'MenuService', 'SignUpStorage', function($scope, MenuService, SignUpStorage) {

  var signupCtrl = this;
  signupCtrl.noItem = false;
  signupCtrl.formSuccess = false;

  signupCtrl.submit = function () {
    if (signupCtrl.user.dish) {
      signupCtrl.user.dish = signupCtrl.user.dish.toUpperCase();
      var item = MenuService.getMenuItemByShortName(signupCtrl.user.dish)
      .then(
        function (response) {
          signupCtrl.user.dish = response.data;
          storeUser();
        },
        function (failure) {
          signupCtrl.noItem = true;
          signupCtrl.httpError = failure.data.error;
        }
      );
    } else {
      storeUser();
    }
  };

    function storeUser() {
      signupCtrl.noItem = false;
      signupCtrl.formSuccess = true;

      SignUpStorage.storeObject('Sign-up-Users', signupCtrl.user)
      signupCtrl.user = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        dish: ''
      };
      $scope.regForm.$setUntouched();
      $scope.regForm.$setPristine();
    }

}]);

})();
