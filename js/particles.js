/* ============================================================
   particles.js — Canvas de particules connectées
   Utilisé sur la landing et les pages compétences
   ============================================================ */

(function () {
  const canvas = document.getElementById('canvas-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, pts = [];
  const N    = 60;
  const LINK = 125;
  const SPD  = 0.26;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function mkPt() {
    return {
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * SPD * 2,
      vy: (Math.random() - 0.5) * SPD * 2,
      r:  1 + Math.random() * 1.5,
    };
  }

  function init() {
    resize();
    pts = Array.from({ length: N }, mkPt);
  }

  function frame() {
    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const dx = pts[i].x - pts[j].x;
        const dy = pts[i].y - pts[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < LINK) {
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(77,148,255,${(1 - d / LINK) * 0.16})`;
          ctx.lineWidth   = 0.65;
          ctx.stroke();
        }
      }
    }

    for (const p of pts) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(100,160,255,0.42)';
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    }

    requestAnimationFrame(frame);
  }

  window.addEventListener('resize', resize);
  init();
  frame();
})();
