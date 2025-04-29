// shader.js
window.addEventListener('load', () => {
  const canvas = document.getElementById('glsl-canvas');
  const sandbox = new GlslCanvas(canvas);

  // 時間と解像度を自動で渡してくれる
  sandbox.load(document.getElementById('fragShader').textContent);

  // 高DPI対応
  function resize() {
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    sandbox.setUniform('u_resolution', [canvas.width, canvas.height]);
  }
  window.addEventListener('resize', resize);
  resize();

  // アニメーション用タイマー
  function tick(time) {
    sandbox.setUniform('u_time', time * 0.001);
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
});
