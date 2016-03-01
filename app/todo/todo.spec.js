describe("Controller test suite", function() {
    var $scope;
    //Load our module
    beforeEach(module('todoModule'));
    //Create the controller
    beforeEach(inject(function ($rootScope, $controller, _$document_) {
        $scope = $rootScope.$new();
        var myCtrl = $controller('todoCtrl', { $scope: $scope });
        $document = _$document_;
    }));
    
    function triggerKeyDown() {
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
    Object.defineProperty(e, 'keyCode', {'value': 13});
    $document[0].dispatchEvent(e);
        
  }
    //http://stackoverflow.com/questions/18001169/how-do-i-trigger-a-keyup-keydown-event-in-an-angularjs-unit-test
    
    //Run tests
    it("Should test for initial state", function() {
        expect($scope.tmp).toBe("dupa");
        triggerKeyDown();
        $scope.addTodo();
        
    });
});
//
//
//describe('Todo Controller', function() {
//  beforeEach(module('todoModule'));
//
//      
//  var $controller;
//    var document;
//    
//      beforeEach(module('todoModule'));
//    
//    beforeEach(inject(function ($rootScope, $controller, _$document_) {
//        $scope = $rootScope.$new();
//        var todoCtrl = $controller('todoCtrl', { $scope: $scope });
//        $document = _$document_;
//    }));
//    
//    
////  beforeEach(inject(function(_$controller_, _$document_){
////    // The injector unwraps the underscores (_) from around the parameter names when matching
////    $controller = _$controller_;
////    $document = _$document_;
////      
////  }));
//
//    
//  describe('ToDo Adding', function() {
//      
//      
//      
//   
//
//
//      
//    it('addTodo function', function() {
//        
//        function triggerKeyDown() {
//    /**
//     * Create KeyboardEvent
//     */
//    var e = new window.KeyboardEvent('keydown', {
//      bubbles: true,
//      cancelable: true,
//      shiftKey: true
//    });
//
//    /**
//     * Assing 27 as keyCode
//     */
//    delete e.keyCode;
//    Object.defineProperty(e, 'keyCode', {'value': 13});
//    $document[0].dispatchEvent(e);
//        
//  }
//
//        
//        
//        spyOn($scope, 'addTodo');
//        
//
//      $scope.todoText = 'ameba';
//        expect($scope.isTodo()).toBe(false);
//         triggerKeyDown();
//        
//        $scope.addTodo();
//        
//        expect($scope.addTodo).toHaveBeenCalled();
//        console.log('TMP: ',$scope.tmp);
//        expect($scope.isTodo()).toBe(true);
//      expect($scope.todoText).toEqual('');
//        
//    });
//  });
//});