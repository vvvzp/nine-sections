angular.module('starter', ['ionic'])
.run(function($ionicPlatform, $rootScope, $ionicModal) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    var obj = function(){
      return {
        desc : 'description',
        text : 'text'
      };
    };
    $rootScope.names = ['Key Partners','Key Activities','Key Resourses','Value Propositions','Customer Relationships','Channels','Customer Segments','Cost Structure','Revenue Streams'];
    $rootScope.page = [obj(),obj(),obj(),obj(),obj(),obj(),obj(),obj(),obj()];
    $ionicModal.fromTemplateUrl('modal.html', {
      scope: $rootScope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $rootScope.modal = modal;
    });
    $rootScope.openModal = function(val, name){
      $rootScope.val = val;
      $rootScope.modal.show();
    };
    $rootScope.closeModal = function(){
      $rootScope.modal.hide();
    };
  });
})

