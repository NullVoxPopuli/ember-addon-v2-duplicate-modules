import { module, test } from 'qunit';

import { initialize } from 'my-addon/instance-initializers/test-initializer';

module('The Test', function () {
  test('did initializer laod?', function (assert) {
    assert.ok(window.loaded);
    assert.ok(window.initialized);

    initialize();

    assert.ok(window.loaded);
    assert.ok(window.initialized);
  });
});
