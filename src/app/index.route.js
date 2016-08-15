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
      .state('task2', {
        url: '/task2',
        templateUrl: 'app/main/task2.html'
      })
      .state('task3', {
        url: '/task3',
        templateUrl: 'app/main/task3.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
