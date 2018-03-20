;(function(ng) {
  "use strict";

  ng.module('alt.foco-input-modal', [])
    .directive('altFocoInputModal', [function() {
        // Basta adicionar o attributo "alt-foco-input-modal"
        // no elemento que tem a classe "modal".
        // Assim que o mesmo for aberto, será setado o foco no 
        // primeiro campo encontrado.

        return {
          restrict: 'A',
          link: function(scope, element, attrs) {
            element.off('shown.bs.modal', ng.noop);
            element.on('shown.bs.modal', function() {
              var firstChild = element.find('input, select, textarea').eq(0);

              if ($(firstChild).hasClass('select2-hidden-accessible')){
                $(firstChild).next('span').find('.select2-selection').focus();
              }
              else {
                firstChild.focus();
              }
            });
          }
        }
    }]);
}(window.angular));
