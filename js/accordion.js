/* ============================================================
   accordion.js — Logique accordéon partagée
   Utilisé sur realiser.html et administrer.html
   ============================================================ */

(function () {
  document.querySelectorAll('.acc-trigger').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item   = btn.closest('.acc-item');
      const isOpen = item.classList.contains('open');

      /* Ferme tous */
      document.querySelectorAll('.acc-item').forEach(function (i) {
        i.classList.remove('open');
        i.querySelector('.acc-trigger').setAttribute('aria-expanded', 'false');
      });

      /* Ouvre le cliqué s'il était fermé */
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();
