// shader.js の変更点
window.addEventListener('load', () => {
  const canvas = document.getElementById('glsl-canvas');
  const sandbox = new GlslCanvas(canvas);
  sandbox.load(document.getElementById('fragShader').textContent);

  function resize() {
    canvas.width  = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    sandbox.setUniform('u_resolution', [canvas.width, canvas.height]);
  }
  window.addEventListener('resize', resize);
  resize();

  // マウス座標を渡す
  window.addEventListener('mousemove', (e) => {
    sandbox.setUniform('u_mouse', [e.clientX * devicePixelRatio, e.clientY * devicePixelRatio]);
  });

  function tick(t) {
    sandbox.setUniform('u_time', t * 0.001);
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
});
