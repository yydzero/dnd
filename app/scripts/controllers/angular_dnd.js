angular.module('dndApp').controller('AngularDnDCtrl', function ($scope) {

    var items = [
        {id: 0, panel: 'left'},
        {id: 1, panel: 'left'},
        {id: 2, panel: 'left'},
        {id: 3, panel: 'left'},
        {id: 4, panel: 'left'},
        {id: 5, panel: 'right'},
        {id: 6, panel: 'right'},
        {id: 7, panel: 'right'},
        {id: 8, panel: 'right'}
    ];

    var getItems = function(panelName) {
        var result = [];
        angular.forEach(items, function(value) {
            if (value.panel == panelName) {
                result.push(value);
            }
        });
        return result;
    };

    $scope.leftItems = getItems('left');
    $scope.rightItems = getItems('right');

    // Drop handler.
    $scope.onDrop = function (data, event) {
        // Get custom object data.
        var customObjectData = data['json/custom-object']; // {foo: 'bar'}
        console.log(customObjectData);


        var srcId = customObjectData.index;            // This is the draggable object id, not the index id.
        var srcPanel = customObjectData.panel;
        var destId = event.target.getAttribute('index');
        var destPanel = event.target.getAttribute('panel');

        console.log(srcId + " " + destId);

        if (srcPanel == 'left') {
            if (destPanel == 'left') {      // drag inside left panel
                var old = $scope.leftItems.splice(srcId, 1);
                $scope.leftItems.splice(destId, 0, old[0]);
            } else {                        // left -> right
                var old = $scope.leftItems.splice(srcId, 1);
                old[0].panel = 'right';
                $scope.rightItems.splice(destId, 0, old[0]);
            }
        } else {
            if (destPanel == 'left') {      // right -> left
                var old = $scope.rightItems.splice(srcId, 1);
                old[0].panel = 'left';
                $scope.leftItems.splice(destId, 0, old[0]);
            } else {                        // inside right panel
                var old = $scope.rightItems.splice(srcId, 1);
                $scope.rightItems.splice(destId, 0, old[0]);
            }
        }
    };

    // Drag over handler.
    $scope.onDragOver = function (event) {
        // console.log("onDragOver");
    };
});
