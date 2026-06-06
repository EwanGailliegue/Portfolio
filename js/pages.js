/* ============================================================
   pages.js — Fade in/out navigation pour les pages compétences
   ============================================================ */

(function () {
  /* Fade in à l'ouverture */
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      document.body.style.opacity = '1';
    });
  });

  /* Fade out sur le lien retour */
  const backLink = document.querySelector('.hero-back');
  if (backLink) {
    backLink.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.href;
      document.body.style.opacity = '0';
      setTimeout(function () { location.href = href; }, 340);
    });
  }
})();
