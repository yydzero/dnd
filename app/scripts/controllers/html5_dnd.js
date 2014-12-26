// HTML 5 drag&drop: http://www.html5rocks.com/en/tutorials/dnd/basics/


// 1. Creating draggable content
//    Making an object draggable is simple: set the draggable=true attribute on the element
//    you want to make move-able.

// 2. Listening for dragging events
//    https://html.spec.whatwg.org/multipage/interaction.html#event-dnd-dragenter
//
//    - dragstart(e): parameter e is MouseEvent. event is triggered when user click draggable element an start to move
//                    with mouse clicked.
//                    Both src and target will be the draggable element itself.
//    - drag
//    - dragenter(e):
//    - dragleave(e)
//    - dragover(e)
//    - drop
//    - dragend(e)
//
//    To handle DnD flow, we need the notion of:
//    - source element: can be an image, list, link, file object, block of HTML
//    - data payload
//    - target: not all elements can be targets (eg. images)
//
// 2.1 The this/e.target changes for each type of event, depending on where we are in the DnD event model.
// 2.2 When dragging link/image, we need to prevent the browser's default behavior. To do this, call e.preventDefault()
//     in the dragover event.
// 2.3 dragenter is used to toggle the 'over' class instead of the dragover.

// 3. Completing a drag
//    Add event listener for 'drop' and 'dragend' events. Also need to prevent browser's default behavior. And
//    call e.stopPropagation() to prevent event bubbling up the DOM.


// 4. DataTransfer object
//    dataTransfer object holds the data sent in a drag action, it is set in the 'dragstart' event,
//    and read/handled in the 'drop' event.

angular.module('dndApp').controller('Html5DndCtrl', function($scope) {
  // fake control
});
