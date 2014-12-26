angular.module('dndApp').directive('draggable', function () {
    var handleDragStart = function (e) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('Text', this.id);
        this.classList.add('drag');
        return false;
    };
    var handleDragEnd = function (e) {
        this.classList.remove('drag');
        return false;
    };

    return function (scope, element) {
        // this gives us the native JS object
        var el = element[0];
        el.draggable = true;      // set draggable attribute as true which is required by HTML 5 DnD

        // This two listeners simply add/remove class called 'drag' to the item (eg: opacity: 0.5)
        // and setup the dataTransfer
        el.addEventListener('dragstart', handleDragStart, false);
        el.addEventListener('dragend',   handleDragEnd, false);
    }
}).directive('droppable', function () {

    var handleDragOver = function (e) {
        e.dataTransfer.dropEffect = "move";

        // allows us to drop
        if (e.preventDefault()) e.preventDefault();
        this.classList.add('over');
        return false;
    };

    var handleDragEnter = function (e) {
        this.classList.add('over');
        return false;
    };

    var handleDragLeave = function (e) {
        this.classList.remove('over');
        return false;
    };


    return {
        scope: {
            drop: '&'       // parent
        },
        link: function (scope, element) {
            var handleDrop = function (e) {
                // stops some browsers from redirecting.
                if (e.stopPropagation) e.stopPropagation();
                this.classList.remove('over');
                var item = document.getElementById(e.dataTransfer.getData('Text'));
                this.appendChild(item);

                // call the drop passed drop function
                scope.$apply('drop()');

                return false;
            };

            var el = element[0];
            el.addEventListener('dragover',  handleDragOver, false);
            el.addEventListener('dragenter', handleDragEnter, false);
            el.addEventListener('dragleave', handleDragLeave, false);
            el.addEventListener('drop',      handleDrop, false);
        }
    }
}).controller('SimpleDndCtrl', function ($scope) {
    $scope.handleDrop = function () {
        alert('Item has been dropped');
    }
});
