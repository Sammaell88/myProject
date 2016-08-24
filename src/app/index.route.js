(function() {
  'use strict';

  angular
    .module('mytodo')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('todolist', {
        url: '/todolist',
        templateUrl: 'app/main/todolist.html',
        controller: 'TodoTasksController',
        controllerAs: 'todots_ctrl'
      })
      .state('twitter_search', {
        url: '/twitter_search',
        templateUrl: 'app/main/twitter_search.html'
      })
      .state('task3', {
        url: '/task3',
        templateUrl: 'app/main/task3.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
