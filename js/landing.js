/* ============================================================
   landing.js — Tilt 3D du cercle + navigation landing
   ============================================================ */

(function () {
  /* ── 3D TILT ── */
  const scene = document.getElementById('circleScene');
  if (scene) {
    const stage = scene.parentElement;

    stage.addEventListener('mousemove', function (e) {
      const r  = stage.getBoundingClientRect();
      const cx = (e.clientX - r.left - r.width  / 2) / (r.width  / 2);
      const cy = (e.clientY - r.top  - r.height / 2) / (r.height / 2);
      scene.style.transition = 'transform 0.08s linear';
      scene.style.transform  = `rotateX(${cy * 10}deg) rotateY(${-cx * 10}deg)`;
    });

    stage.addEventListener('mouseleave', function () {
      scene.style.transition = 'transform 0.7s cubic-bezier(0.34,1.2,0.64,1)';
      scene.style.transform  = 'rotateX(0) rotateY(0)';
    });
  }

  /* ── NAVIGATION segments ── */
  document.querySelectorAll('.seg').forEach(function (s) {
    const href = s.dataset.href;

    s.addEventListener('click', function () {
      document.body.style.opacity = '0';
      setTimeout(function () { location.href = href; }, 340);
    });

    s.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        document.body.style.opacity = '0';
        setTimeout(function () { location.href = href; }, 340);
      }
    });
  });

  /* ── FADE IN ── */
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      document.body.style.opacity = '1';
    });
  });
})();
