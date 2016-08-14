angular.module("mytodo").controller('TodoTasksController', function($scope,TasksStore) {

  var vm = this;
  vm.tasks = TasksStore.tasks;

  

  function getCurDate () {

    var now = new Date();

    var dd = now.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = now.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy = now.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
  };
  
   vm.resetTask = function() {
    vm.newTask = {
      name: "",
      date: getCurDate(),
      marker: "done-false"
    }
  }
  vm.resetTask();

  vm.addTask = function() {
  vm.tasks.push(vm.newTask);
  vm.resetTask();

}

vm.resetTasks = function() {
  vm.tasks.splice(0,vm.tasks.length);
};

vm.switchMarker = function(task) {
  if (task.marker === "done-false") {
    task.marker = "done-true";
  } else {
    task.marker = "done-false";
  };  
};

vm.removeDoneTasks = function() {

angular.forEach(vm.tasks,function(item, i){
if (vm.tasks[i].marker == "done-true") {
         vm.tasks.splice(i,1);
         vm.removeDoneTasks();
      };


});





  };
});