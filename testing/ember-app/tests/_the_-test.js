import { module, test } from 'qunit';

import { initialize } from 'my-addon/instance-initializers/test-initializer';

module('The Test', function () {
  test('did initializer laod?', function (assert) {
    assert.strictEqual(window.i, 1);

    initialize();

    assert.strictEqual(window.i, 2);
  });
});
