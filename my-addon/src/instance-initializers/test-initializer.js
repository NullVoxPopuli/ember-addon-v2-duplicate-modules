console.log('running...');

let i = 0;

export function initialize() {
  i++;
  console.log(`invoked... ${i}`);
  window.i = i;
}

export default {
  initialize,
};
