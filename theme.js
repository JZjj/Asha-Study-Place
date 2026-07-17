/* Floating light/dark theme toggle with persistence.
   Injects a button; respects OS preference until the user overrides. */
(function () {
  var KEY = "mlsys-theme";
  var root = document.documentElement;

  function stored() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function systemDark() { return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches; }
  function effective() {
    var s = stored();
    if (s === "light" || s === "dark") return s;
    return systemDark() ? "dark" : "light";
  }
  function apply(mode) { root.setAttribute("data-theme", mode); }

  apply(effective());

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.createElement("button");
    btn.id = "theme-toggle";
    btn.type = "button";
    btn.setAttribute("aria-label", "Toggle light or dark theme");
    function icon() { btn.textContent = effective() === "dark" ? "☀" : "☾"; }
    icon();
    btn.addEventListener("click", function () {
      var next = effective() === "dark" ? "light" : "dark";
      try { localStorage.setItem(KEY, next); } catch (e) {}
      apply(next); icon();
    });
    document.body.appendChild(btn);
  });
})();
