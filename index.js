((window) => {
  'use strict';

  if (typeof(window.$) === 'undefined') {
    throw new Error('jQuery é necessário para checkAll funcionar');
  }

  function checkAll(masterCheckbox, container) {
    const checks = $(container).find(':checkbox');
    const $masterCheckbox = $(masterCheckbox);

    checks.on('click', (ev) => {
      const checksFiltered = checks.filter(':checked');
      if (checksFiltered.length === checks.length) {
        $masterCheckbox.prop('indeterminate', false).prop('checked', true);
      } else if (checksFiltered.length === 0) {
        $masterCheckbox.prop('indeterminate', false).prop('checked', false);
      } else {
        $masterCheckbox.prop('indeterminate', true).prop('checked', false);
      }
      ev.stopPropagation();
    });

    $masterCheckbox.on('click', function(ev) {
      checks.prop('checked', $(this).prop('checked'));
      ev.stopPropagation();
    });
  }

  if (typeof(window.checkAll) === 'undefined') {
    window.checkAll = checkAll;
  }
})(window);
