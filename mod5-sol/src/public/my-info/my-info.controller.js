(function() {
  'use strict';

  angular.module('public')
  .controller('myInfoController', ['SignUpStorage', 'ApiPath', function(SignUpStorage, ApiPath) {
    var myinfoCtrl = this;

    myinfoCtrl.userInfo = SignUpStorage.getObject('Sign-up-Users', false);

    if (myinfoCtrl.userInfo) {
      if (myinfoCtrl.userInfo.dish) {
        myinfoCtrl.imageUrl = ApiPath + '/images/' + myinfoCtrl.userInfo.dish.short_name + '.jpg'
      }
    }


    myinfoCtrl.deleteUser = function() {
      SignUpStorage.removeRecord('Sign-up-Users');
      myinfoCtrl.message = 'Not Signed Up Yet. Sign up Now!';
      myinfoCtrl.userInfo = '';
    };

  }]);

})();
