
angular.module('dndApp').directive('draggable', function() {
  return function(scope, element) {
    // this gives us the native JS object
    var el = element[0];
    el.draggable = true;

    // This two listeners simply add/remove class called 'drag' to the item (eg: opacity: 0.5)
    // and setup the dataTransfer
    el.addEventListener(
      'dragstart',
      function(e) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('Text', this.id);
        this.classList.add('drag');
        return false;
      },
      false
    );
    el.addEventListener(
      'dragend',
      function(e) {
        this.classList.remove('drag');
        return false;
      },
      false
    );
  }
}).directive('droppable', function() {
  return {
    scope: {
      drop: '&'       // parent
    },
    link: function(scope, element) {
      var el = element[0];
      el.addEventListener(
        'dragover',
        function(e) {
          e.dataTransfer.dropEffect = "move";

          // allows us to drop
          if (e.preventDefault()) e.preventDefault();
          this.classList.add('over');
          return false;
        },
        false
      );
      el.addEventListener(
        'dragenter',
        function(e) {
          this.classList.add('over');
          return false;
        },
        false
      );
      el.addEventListener(
        'dragleave',
        function(e) {
          this.classList.remove('over');
          return false;
        },
        false
      );
      el.addEventListener(
        'drop',
        function(e) {
          // stops some browsers from redirecting.
          if (e.stopPropagation) e.stopPropagation();
          this.classList.remove('over');
          var item = document.getElementById(e.dataTransfer.getData('Text'));
          this.appendChild(item);

          // call the drop passed drop function
          scope.$apply('drop()');

          return false;
        },
        false
      )
    }
  }
}).controller('SimpleDndCtrl', function($scope) {
  $scope.handleDrop = function() {
    alert('Item has been dropped');
  }
});
