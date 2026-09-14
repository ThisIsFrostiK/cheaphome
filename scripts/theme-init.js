/* Cheap Home — theme pre-paint guard.
   Loaded synchronously in <head>, before style.css finishes and
   before the page paints, so a saved dark-mode preference applies
   immediately instead of flashing light first. Kept separate from
   scripts.js because that file is intentionally deferred to the
   end of <body> so it never blocks rendering. */
(function () {
  try {
    if (localStorage.getItem("cheaphome_theme") === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  } catch (e) {}
})();
