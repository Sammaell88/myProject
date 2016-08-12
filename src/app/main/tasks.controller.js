angular.module("mytodo").controller('TodoTasksController', function($scope) {

  var vm = this;
  vm.tasks = [];

  var now = new Date();

   vm.resetTask = function() {
    vm.newTask = {
      name: "",
      date: now.getDay() + "." + now.getMonth() + "." + now.getFullYear(),
      description: ""
    }
  }
  vm.resetTask();

  vm.addTask = function() {
  vm.tasks.push(vm.newTask);
  vm.resetTask();
}

});