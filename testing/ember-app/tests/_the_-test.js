import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

import { initialize } from 'my-addon/instance-initializers/test-initializer';

module('The Test', function (hooks) {
  setupTest(hooks);

  test('did initializer laod?', function (assert) {
    assert.strictEqual(window.i, 1);

    initialize();

    assert.strictEqual(window.i, 2);
  });
});
