angular.module('mytodo').controller('NavigationController', function(TasksStore) {
  var vm = this;
  vm.tasks = TasksStore.tasks;
});