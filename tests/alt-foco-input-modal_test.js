describe('alt.foco-input-modal', function() {
  var _scope, _compile, _element;

  beforeEach(module('alt.foco-input-modal'));

  beforeEach(inject(function($injector) {
    _scope = $injector.get('$rootScope').$new()
    _compile = $injector.get('$compile')
  }));

  describe('criação', function() {
    it('deve registrar o evento de abertura do modal', function() {
      _element = angular.element('<div alt-foco-input-modal></div>')

      spyOn(_element, 'on').and.callThrough()

      _compile(_element)(_scope)
      _scope.$digest()

      expect(_element.on).toHaveBeenCalledWith('shown.bs.modal', jasmine.any(Function))
    });
  });
});
