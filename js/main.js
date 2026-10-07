/* Yogesh Bhatt — portfolio interactions */
(function () {
  "use strict";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(pointer: fine)").matches;

  /* ---------- theme ---------- */
  var rootEl = document.documentElement;
  var themeToggles = [document.getElementById("themeToggle"), document.getElementById("themeToggleMobile")].filter(Boolean);
  function setTheme(t) {
    rootEl.setAttribute("data-theme", t);
    try { localStorage.setItem("yb-theme", t); } catch (e) {}
    var label = t === "dark" ? "Switch to light theme" : "Switch to dark theme";
    themeToggles.forEach(function (b) { b.setAttribute("aria-label", label); });
  }
  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem("yb-theme"); } catch (e) {}
    if (saved === "light" || saved === "dark") { setTheme(saved); return; }
    if (window.matchMedia("(prefers-color-scheme: light)").matches) setTheme("light");
  }
  themeToggles.forEach(function (b) {
    b.addEventListener("click", function () {
      setTheme(rootEl.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  });
  initTheme();

  /* ---------- boot loader ---------- */
  var loader = document.getElementById("loader");
  var loaderLines = document.getElementById("loaderLines");
  var loaderFill = document.getElementById("loaderBarFill");
  var bootSeq = [
    "$ yb init --portfolio",
    '<span class="ok">✓</span> loading modules …',
    '<span class="ok">✓</span> connecting services …',
    '<span class="ok">✓</span> ready.'
  ];
  function runLoader() {
    if (!loader) return;
    if (reduceMotion) { loader.classList.add("done"); return; }
    var i = 0;
    function step() {
      if (i < bootSeq.length) {
        var p = document.createElement("div");
        p.innerHTML = bootSeq[i];
        loaderLines.appendChild(p);
        loaderFill.style.width = ((i + 1) / bootSeq.length * 100) + "%";
        i++;
        setTimeout(step, 200);
      } else {
        setTimeout(function () { loader.classList.add("done"); }, 250);
      }
    }
    step();
    // hard fallback — never trap the user behind the loader
    setTimeout(function () { loader.classList.add("done"); }, 2600);
  }

  /* ---------- nav state + progress ---------- */
  var nav = document.getElementById("nav");
  var progress = document.getElementById("progress");
  function onScroll() {
    var y = window.scrollY;
    nav.classList.toggle("scrolled", y > 24);
    var h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    highlightNav();
  }

  /* ---------- active nav link ---------- */
  var navAnchors = Array.prototype.slice.call(document.querySelectorAll("[data-nav]"));
  var sections = navAnchors.map(function (a) { return document.querySelector(a.getAttribute("href")); });
  function highlightNav() {
    var pos = window.scrollY + 160;
    var current = null;
    sections.forEach(function (s, i) {
      if (s && s.offsetTop <= pos) current = i;
    });
    navAnchors.forEach(function (a, i) { a.classList.toggle("active", i === current); });
  }

  /* ---------- mobile menu ---------- */
  var menuBtn = document.getElementById("menuBtn");
  var mobileMenu = document.getElementById("mobileMenu");
  function closeMenu() {
    document.body.classList.remove("menu-open");
    mobileMenu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
  menuBtn.addEventListener("click", function () {
    var open = mobileMenu.classList.toggle("open");
    document.body.classList.toggle("menu-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  mobileMenu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeMenu);
  });

  /* ---------- reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  // stagger siblings: projects, principles, creds, timeline
  document.querySelectorAll(".projects .project, .principles .principle, .creds .cred, .timeline li").forEach(function (el, i) {
    el.setAttribute("data-delay", String(i % 4));
  });
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- counters ---------- */
  var counters = document.querySelectorAll(".count");
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    if (reduceMotion) { el.textContent = target; return; }
    var dur = 1400, start = null;
    function frame(t) {
      if (!start) start = t;
      var p = Math.min((t - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  if ("IntersectionObserver" in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { cio.observe(c); });
  } else {
    counters.forEach(animateCount);
  }

  /* ---------- interactive hero terminal ---------- */
  var termBody = document.getElementById("termBody");
  var termHistory = document.getElementById("termHistory");
  var termInputRow = document.getElementById("termInputRow");
  var termInput = document.getElementById("termInput");
  var termHint = document.getElementById("termHint");

  function tEsc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function tScroll() { if (termBody) termBody.scrollTop = termBody.scrollHeight; }
  function tPrint(html) {
    var d = document.createElement("div");
    d.innerHTML = html;
    termHistory.appendChild(d);
    tScroll();
  }
  var ABOUT_JSON = [
    "{",
    '  <span class="k">"name"</span>: <span class="s">"Yogesh Bhatt"</span>,',
    '  <span class="k">"role"</span>: <span class="s">"Backend Developer"</span>,',
    '  <span class="k">"stack"</span>: [<span class="s">"Java"</span>, <span class="s">"Spring Boot"</span>,',
    '            <span class="s">"MySQL"</span>, <span class="s">"MongoDB"</span>, <span class="s">"Redis"</span>],',
    '  <span class="k">"focus"</span>: <span class="s">"systems that scale"</span>,',
    '  <span class="k">"open_to_work"</span>: <span class="k">true</span>',
    "}"
  ];
  var CMDS = {
    help: function () {
      tPrint([
        '<span class="t-dim">available commands:</span>',
        '  <span class="t-acc">about</span>       who is yogesh',
        '  <span class="t-acc">projects</span>    what he built',
        '  <span class="t-acc">skills</span>      the stack',
        '  <span class="t-acc">experience</span>  recent work',
        '  <span class="t-acc">contact</span>     how to reach him',
        '  <span class="t-acc">open</span> &lt;site&gt;  github | linkedin | leetcode | resume',
        '  <span class="t-acc">clear</span>       wipe the screen',
        '<span class="t-dim">shortcuts: github · linkedin · leetcode · resume</span>'
      ].join("\n"));
    },
    about: function () {
      tPrint("Yogesh Bhatt — backend developer (Java / Spring Boot).\nFinal-year CSE @ GEHU. Builds APIs that survive production:\nJWT auth, Redis caching, versioned migrations, tested endpoints.");
    },
    whoami: function () { tPrint("yogesh"); },
    projects: function () {
      tPrint([
        '<span class="t-acc">civica</span>      AI civic-issue platform · YOLOv8 · 3rd/140+ hackathon',
        '<span class="t-acc">notesphere</span>  intelligent journal · OAuth2 · NLP tagging · -40% latency',
        '<span class="t-acc">hotel-api</span>   booking backend · RBAC · conflict-safe dates · Redis'
      ].join("\n"));
    },
    skills: function () {
      tPrint("Java · Spring Boot · Spring Security · REST · JWT · Swagger\nMySQL · MongoDB · Redis · Hibernate\nReact 19 · Maven · Flyway · Postman · Git");
    },
    experience: function () {
      tPrint("Prodigy InfoTech — Backend Intern (Aug 2026)\nHotel-management APIs: JWT + RBAC, Redis caching,\nFlyway migrations, conflict-safe booking.");
    },
    contact: function () {
      tPrint("yogeshbhatt1239@gmail.com\n+91 95487 33532\n<span class=\"t-dim\">try: open linkedin · open github · open leetcode</span>");
    },
    open: function (arg) {
      var sites = {
        github: "https://github.com/Yogesh-Bhatt-SWD",
        linkedin: "https://www.linkedin.com/in/yogesh-bhatt-swd",
        leetcode: "https://leetcode.com/u/Y_ogesh_SwD/"
      };
      if (arg === "resume" || arg === "cv") { openResumeModal(); tPrint('<span class="t-dim">opening resume preview…</span>'); return; }
      if (sites[arg]) { window.open(sites[arg], "_blank", "noopener"); tPrint('<span class="t-dim">opening ' + tEsc(arg) + '…</span>'); return; }
      tPrint('<span class="t-err">open what?</span> <span class="t-dim">try: open github · open linkedin · open leetcode · open resume</span>');
    },
    github: function () { CMDS.open("github"); },
    linkedin: function () { CMDS.open("linkedin"); },
    leetcode: function () { CMDS.open("leetcode"); },
    resume: function () { CMDS.open("resume"); },
    cv: function () { CMDS.open("resume"); },
    echo: function (arg) { tPrint(tEsc(arg)); },
    date: function () { tPrint(new Date().toString()); },
    banner: function () { ABOUT_JSON.forEach(function (l) { tPrint(l); }); },
    sudo: function () { tPrint('<span class="t-dim">permission denied: this terminal already trusts you.</span>'); },
    clear: function () { termHistory.innerHTML = ""; }
  };
  var cmdHistory = [];
  var hIdx = 0;

  function runCommand(raw) {
    var line = raw.trim();
    tPrint('<span class="t-acc">$</span> ' + tEsc(line));
    if (!line) return;
    cmdHistory.push(line);
    hIdx = cmdHistory.length;
    var parts = line.split(/\s+/);
    var name = parts[0].toLowerCase();
    var arg = parts.slice(1).join(" ");
    if (CMDS[name]) { CMDS[name](arg); }
    else {
      var guess = null;
      var names = Object.keys(CMDS);
      for (var i = 0; i < names.length; i++) {
        if (names[i].indexOf(name) === 0 || name.indexOf(names[i]) === 0) { guess = names[i]; break; }
      }
      if (!guess && CMDS[name + "s"]) guess = name + "s";
      tPrint('<span class="t-err">command not found: ' + tEsc(name) + '</span>' +
        (guess ? '  <span class="t-dim">did you mean \'' + guess + '\'?</span>'
               : '  <span class="t-dim">try \'help\'</span>'));
    }
  }

  function initTerminal() {
    if (!termBody) return;
    var introCmd = "curl api.yb.dev/v1/about";
    function activate() {
      termInputRow.hidden = false;
      termHint.hidden = false;
      tPrint('<span class="t-dim">— interactive shell · type \'help\' —</span>');
    }
    if (reduceMotion) {
      tPrint('<span class="t-acc">$</span> ' + tEsc(introCmd));
      ABOUT_JSON.forEach(function (l) { tPrint(l); });
      activate();
      return;
    }
    var ci = 0;
    var introLine = document.createElement("div");
    introLine.innerHTML = '<span class="t-acc">$</span> <span class="t-typed"></span><span class="caret"></span>';
    termHistory.appendChild(introLine);
    var typedSpan = introLine.querySelector(".t-typed");
    function typeChar() {
      if (ci <= introCmd.length) {
        typedSpan.textContent = introCmd.slice(0, ci);
        ci++;
        setTimeout(typeChar, 45 + Math.random() * 55);
      } else {
        var caret = introLine.querySelector(".caret");
        if (caret) caret.remove();
        var li = 0;
        (function printOut() {
          if (li < ABOUT_JSON.length) {
            tPrint(ABOUT_JSON[li]);
            li++;
            setTimeout(printOut, 110);
          } else {
            setTimeout(activate, 400);
          }
        })();
      }
    }
    setTimeout(typeChar, 1150); // after the loader clears
  }

  if (termInput) {
    termInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        runCommand(termInput.value);
        termInput.value = "";
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (hIdx > 0) { hIdx--; termInput.value = cmdHistory[hIdx] || ""; }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (hIdx < cmdHistory.length) { hIdx++; termInput.value = cmdHistory[hIdx] || ""; }
      }
    });
    // clicking anywhere in the terminal focuses the input (never on load — no keyboard popups)
    termBody.addEventListener("click", function () { termInput.focus({ preventScroll: true }); });
  }

  /* ---------- resume preview modal ---------- */
  var resumeModal = document.getElementById("resumeModal");
  function openResumeModal() {
    if (!resumeModal) return;
    resumeModal.hidden = false;
    document.body.classList.add("modal-open");
  }
  function closeResumeModal() {
    if (!resumeModal) return;
    resumeModal.hidden = true;
    document.body.classList.remove("modal-open");
  }
  document.querySelectorAll("[data-open-resume]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      closeMenu();
      openResumeModal();
    });
  });
  document.querySelectorAll("[data-close-resume]").forEach(function (el) {
    el.addEventListener("click", closeResumeModal);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && resumeModal && !resumeModal.hidden) closeResumeModal();
  });

  /* ---------- ticker: duplicate for seamless loop ---------- */
  var track = document.getElementById("tickerTrack");
  if (track) {
    track.innerHTML += track.innerHTML;
    track.setAttribute("aria-hidden", "true");
  }

  /* ---------- subtle tilt on project media ---------- */
  if (finePointer && !reduceMotion) {
    document.querySelectorAll(".tilt").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform =
          "perspective(900px) rotateX(" + (-y * 4).toFixed(2) + "deg) rotateY(" + (x * 5).toFixed(2) + "deg)";
      });
      card.addEventListener("mouseleave", function () {
        card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
      });
    });

    /* ---------- magnetic buttons ---------- */
    document.querySelectorAll(".magnetic").forEach(function (btn) {
      btn.addEventListener("mousemove", function (e) {
        var r = btn.getBoundingClientRect();
        var x = e.clientX - r.left - r.width / 2;
        var y = e.clientY - r.top - r.height / 2;
        btn.style.transform = "translate(" + (x * 0.12).toFixed(1) + "px," + (y * 0.18).toFixed(1) + "px)";
      });
      btn.addEventListener("mouseleave", function () { btn.style.transform = ""; });
    });
  }

  /* ---------- footer year ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- go ---------- */
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  runLoader();
  initTerminal();
})();
