angular.module('dndApp').directive('draggable1', function () {
    return function (scope, element) {
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

        // this gives us the native JS object
        var el = element[0];
        el.draggable = true;      // set draggable attribute as true which is required by HTML 5 DnD

        // This two listeners simply add/remove class called 'drag' to the item (eg: opacity: 0.5)
        // and setup the dataTransfer
        el.addEventListener('dragstart', handleDragStart, false);
        el.addEventListener('dragend',   handleDragEnd, false);
    }
}).directive('droppable1', function () {

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
            drop: '&',       // parent
            bin:  '='        // bi-directional scope
        },
        link: function (scope, element) {

            // This handleDrop will call controller's handleDrop. Also do some housekeeping work.
            var handleDrop = function (e) {
                // stops some browsers from redirecting.
                if (e.stopPropagation) e.stopPropagation();
                this.classList.remove('over');

                var binId = this.id;
                var item = document.getElementById(e.dataTransfer.getData('Text'));
                this.appendChild(item);

                // call the drop passed drop function
                scope.$apply(function(scope) {
                    var fn = scope.drop();
                    if ('undefined' !== typeof fn) {
                        fn(item.id, binId);
                    }
                });

                return false;
            };

            var el = element[0];
            el.addEventListener('dragover',  handleDragOver, false);
            el.addEventListener('dragenter', handleDragEnter, false);
            el.addEventListener('dragleave', handleDragLeave, false);
            el.addEventListener('drop',      handleDrop, false);
        }
    }
}).controller('NgrepeatDndCtrl', function ($scope) {
    $scope.handleDrop = function (item, bin) {
        alert('Item ' + item + ' has been dropped into ' + bin);
    }
});
