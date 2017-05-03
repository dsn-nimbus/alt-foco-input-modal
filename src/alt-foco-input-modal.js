;(function(ng) {
  "use strict";

  ng.module('alt.foco-input-modal', [])
    .directive('altFocoInputModal', [function() {
        // Basta adicionar o attributo "alt-foco-input-modal"
        // no elemento que tem a classe "modal".
        // Assim que o mesmo for aberto, será setado o foco no
        // primeiro campo de input.

        return {
          restrict: 'A',
          scope: {},
          link: function(scope, element, attrs) {
            element.on('shown.bs.modal', function() {
              element.find('input').eq(0).focus();
            });
          }
        }
    }]);
}(window.angular));
