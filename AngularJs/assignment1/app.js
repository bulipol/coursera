(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
  
  function LunchCheckController($scope) {
  $scope.name = "";
  $scope.totalValue = 0;
  $scope.message = "";

  $scope.displayNumeric = function () {
    var totalStringValue = 0;
    var tmp="";
    tmp=$scope.name.split(/\s*,\s*/);
    //console.log(tmp.length);
    totalStringValue=tmp.length;
    var totalNameValue = totalStringValue;
    $scope.totalValue = totalNameValue;
   // console.log("tmp: "+tmp);
   //  console.log("scope.totalValue: "+$scope.totalValue);
    if($scope.totalValue<=3 && tmp!=""){
      $scope.message = "Enjoy!";

    }
    else  if($scope.totalValue>3){
      $scope.message = "Too much!";
    }
    else{
      $scope.message = "Please enter data first";
    }
  };


}


})();