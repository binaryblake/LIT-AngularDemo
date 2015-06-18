'use strict';

angular.module('directions').controller('directionsCtrl', ['$scope', 'googleDirections', function($scope, googleDirections){
  var vm = this;
  vm.result = null;

  vm.args = {
    origin: '',
    destination: '',
    travelMode: 'driving'
  };

  this.getDirections = function(){
    googleDirections.getDirections(vm.args).then(function(directions) {
      vm.result = directions.routes;
    });
  };
}]);
