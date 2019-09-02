(function() {
  "use strict";

  angular.module("app").controller("ControllerCtrl", ControllerCtrl);

  /** @ngInject */
  function ControllerCtrl($scope, $http) {
    var vm = this;

    init();

    function init() {}

    $http.get("http://61.19.120.8/app/api/get_md_items").then(res => {
      console.log(res.data);
      $scope.data = res.data;
    });
  }
})();
