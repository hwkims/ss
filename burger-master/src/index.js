import * as PIXI from 'pixi.js';

const start = () => {
  console.log('Test information');
}

const init = () => {

  const app = new PIXI.Application({ width: 1600, height: 1200 });
  document.body.appendChild(app);

  start();
}

init();