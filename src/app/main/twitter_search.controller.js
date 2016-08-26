angular.module('mytodo').controller('TwitterSearchController', function($scope) {

var vm = this;

vm.newQuery = "";

vm.newQueryNumber = 0;

vm.tweets = [];

vm.makeRequest = function () {

var q = vm.newQuery;

var n = vm.newQueryNumber;	

OAuth.initialize('wDwpFE5xQDR_ulG343fO4lQxWCQ');

OAuth.popup('twitter').then(function(twitter) {

  return twitter.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=' + q +'&count=' + n);

}).then(function(data) {
  
  vm.tweets = vm.tweets.concat(data);
  $scope.$apply();

}).fail(function(err) {

  alert(err);

})

};

$scope.currentPage = 1; // keeps track of the current page

$scope.pageSize = 5; // holds the number of items per page

}).filter('start', function () {
        return function (input, start) {
            if (!input || !input.length) { return; }
 
            start = +start;
            return input.slice(start);
        };
    });

