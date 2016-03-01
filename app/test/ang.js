angular.module('app',[]).directive('handleEsc', [
  '$document',
  function (
    $document
  ) {
    var ESC_KEY_CODE = 27;

    return {
      scope: {
        handleEsc: '&'
      },
      link: function (scope, element, attrs) {
        /**
         * Create handler for keydown event
         */
        function escHandler (event) {
          if (event.keyCode === ESC_KEY_CODE) {
            scope.handleEsc();
          }
        }

        /**
         * Attach handler to event
         */
        $document.on('keydown', escHandler);

        /**
         * Clean on destroy
         */
        scope.$on('$destroy', function () {
          $document.off('keydown', escHandler);
        });
      }
    };
  }
]);