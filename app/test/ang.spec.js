'use strict';

describe('Directive: handleEsc', function() {
  var scope;
  var $compile;
  var $document;

  beforeEach(angular.mock.module('app'));

  var element = null;
  /**
   * Lets call scope.close() method on ESC key event
   */
  var template = '<div handle-esc="close()"></div>';

  beforeEach(inject(function($injector) {
    $compile  = $injector.get('$compile');
    scope     = $injector.get('$rootScope').$new();
    $document = $injector.get('$document');
  }));

  beforeEach(function() {
    element = $compile(template)(scope);
    /**
     * Create method and spyOn it.
     */
    scope.close = function() {};
    spyOn(scope, 'close');
  });

  function triggerEscKeyDown() {
    /**
     * Create KeyboardEvent
     */
    var e = new window.KeyboardEvent('keydown', {
      bubbles: true,
      cancelable: true,
      shiftKey: true
    });

    /**
     * Assing 27 as keyCode
     */
    delete e.keyCode;
    Object.defineProperty(e, 'keyCode', {'value': 27});

    $document[0].dispatchEvent(e);
  }

  it('should call callback function when the event happens', function() {
    triggerEscKeyDown();
    expect(scope.close).toHaveBeenCalled();
  });

  it('deregisters on scope $destroy', function() {
    scope.$destroy();
    triggerEscKeyDown();
    expect(scope.close).not.toHaveBeenCalled();
  });

});