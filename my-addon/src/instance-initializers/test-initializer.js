console.log('running...');

window.loaded = true;

let i = 0;

export function initialize() {
  i++;
  console.log('invoked...', i);
  window.initialized = true;
}

export default {
  initialize,
};
