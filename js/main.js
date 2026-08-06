(function () {
  'use strict';

  var D = window.LS_DATA;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  // ---- Images ----
  // Images are created with data-src and loaded synchronously once the page is
  // built (see loadAllImages() at the end of this script). Deferral schemes
  // that depend on the viewport — native loading="lazy" or IntersectionObserver
  // — are unreliable here: this content renders in a pane that neither
  // composites offscreen content nor runs timers/observers while hidden, so
  // anything below the fold or scrolled aside would simply never load.
  // Synchronous assignment during script eval is the one path that always runs.
  function newImg(src, alt) {
    var img = el('img');
    img.dataset.src = src;
    img.alt = alt;
    return img;
  }

  function loadAllImages() {
    document.querySelectorAll('img[data-src]').forEach(function (img) {
      img.src = img.dataset.src;
      delete img.dataset.src;
    });
  }

  // ---- Areas carousel (tripled for seamless wrap) ----
  function areaCard(a) {
    var card = el('div', 'area-card');

    var bg = el('div', 'area-bg');
    if (a.img) bg.style.backgroundImage = 'url("' + a.img + '")';
    card.appendChild(bg);

    if (!a.img) card.appendChild(el('div', 'area-ph', 'Fotografia a obter'));
    card.appendChild(el('div', 'area-scrim'));

    var body = el('div', 'area-body');
    body.appendChild(el('div', 'n', a.n));
    body.appendChild(el('div', 'd', a.d));
    card.appendChild(body);

    return card;
  }

  // Two copies is enough to loop seamlessly: wrap by one copy's width.
  var AREA_COPIES = 2;
  var areasTrack = document.getElementById('areas-track');
  for (var pass = 0; pass < AREA_COPIES; pass++) {
    D.areas.forEach(function (a) { areasTrack.appendChild(areaCard(a)); });
  }

  // ---- Timeline ----
  var tlTrack = document.getElementById('tl-track');
  D.marcos.forEach(function (m) {
    // Editor notes from the validation CSV ride along as an HTML comment:
    // nothing is lost, but a visitor never sees them.
    if (m.nota) tlTrack.appendChild(document.createComment(' NOTA INTERNA: ' + m.nota + ' '));

    var c = el('div', 'marco');
    c.appendChild(el('div', 'ano', m.ano));

    if (m.porValidar) c.appendChild(el('div', 'marco-flag', 'Conteúdo em validação'));

    // The tagline is the highlighted line; entries still being written have
    // none, so the short title carries the slot instead.
    c.appendChild(el('div', 'tag', m.tag || m.marco));
    if (m.tag && m.marco) c.appendChild(el('div', 'marco-sub', m.marco));

    c.appendChild(el('div', 'det', m.det));

    if (m.foto) {
      // Posters and press ads are documents — cropping them loses the content,
      // so those are flagged to fit inside the frame instead.
      var fig = el('div', 'foto' + (m.foto.fit === 'contain' ? ' is-doc' : ''));
      fig.appendChild(newImg(m.foto.src, m.foto.alt));
      c.appendChild(fig);
    } else {
      c.appendChild(el('div', 'foto is-empty', m.semFoto || 'Sem fotografia de arquivo'));
    }

    if (m.galeria && m.galeria.length) {
      var strip = el('div', 'galeria');
      m.galeria.forEach(function (g) {
        strip.appendChild(newImg(g.src, g.alt));
      });
      c.appendChild(strip);
    }

    tlTrack.appendChild(c);
  });

  document.getElementById('tl-prev').addEventListener('click', function () {
    tlTrack.scrollBy({ left: -400, behavior: reduced ? 'auto' : 'smooth' });
  });
  document.getElementById('tl-next').addEventListener('click', function () {
    tlTrack.scrollBy({ left: 400, behavior: reduced ? 'auto' : 'smooth' });
  });

  // ---- Marcas ----
  var marcasGrid = document.getElementById('marcas-grid');
  D.marcas.forEach(function (mk) {
    var box = el('div', 'marca');
    box.appendChild(newImg(mk.logo, mk.n));
    marcasGrid.appendChild(box);
  });

  // ---- Clientes marquee (each row duplicated so the 50% translate loops seamlessly) ----
  var marquee = document.getElementById('marquee');
  var rowClasses = ['a', 'b', 'c'];
  D.clientes.forEach(function (group, i) {
    var track = el('div', 'mtrack ' + rowClasses[i]);
    // Each half of the track must be at least a viewport wide or the -50%
    // loop shows a gap. Repeat only as far as that needs.
    var PER_LOGO = 210; // ~150px logo + 60px gap
    var reps = Math.max(2, Math.ceil(window.innerWidth / (group.length * PER_LOGO)) + 1);
    var filled = [];
    for (var r = 0; r < reps; r++) filled = filled.concat(group);

    for (var copy = 0; copy < 2; copy++) {
      var row = el('div', 'mrow');
      if (copy === 1) row.setAttribute('aria-hidden', 'true');
      filled.forEach(function (c) {
        row.appendChild(newImg(c.logo, copy === 0 ? c.n : ''));
      });
      track.appendChild(row);
    }
    marquee.appendChild(track);
  });

  // ---- Projetos ----
  var projetosGrid = document.getElementById('projetos-grid');
  D.projetos.forEach(function (p) {
    var card = el('div', 'projeto-card reveal');
    card.appendChild(el('div', 'shot', 'Fotografia do projeto'));
    var body = el('div', 'body');
    body.appendChild(el('div', 'n', p.n));
    body.appendChild(el('div', 'd', p.d));
    card.appendChild(body);
    projetosGrid.appendChild(card);
  });

  // ---- Load every image now that the DOM is built ----
  // Runs synchronously during script eval — the one code path that always
  // executes, regardless of scroll position or whether the pane is visible.
  loadAllImages();

  // ---- Hero "lights dimming" on scroll ----
  // As the page scrolls the cinema room appears to power down: the image's
  // brightness and warm saturation fall away (so the amber LED glow fades out),
  // and a soft dark overlay deepens the shadows. Driving the image filter is
  // what sells the effect — a flat overlay alone just veils everything, screen
  // included. rAF-throttled so the per-frame re-raster stays off the scroll path.
  var hero = document.querySelector('.hero');
  var heroDim = document.getElementById('hero-dim');
  var heroImg = document.getElementById('hero-img');
  if (hero && heroDim && heroImg) {
    var ticking = false;
    var dim = function () {
      ticking = false;
      var p = Math.min(1, Math.max(0, window.scrollY / (hero.offsetHeight * 0.9)));
      // brightness 1 → 0.28, saturation 1 → 0.55: the room goes dark and cool.
      heroImg.style.filter = 'brightness(' + (1 - p * 0.72).toFixed(3) +
        ') saturate(' + (1 - p * 0.45).toFixed(3) + ')';
      heroDim.style.opacity = (p * 0.55).toFixed(3);
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(dim); }
    }, { passive: true });
    dim();
  }

  // ---- Drag-to-scroll ----
  function makeDraggable(node) {
    var drag = null;
    node.addEventListener('pointerdown', function (e) {
      drag = { x: e.clientX, s: node.scrollLeft };
      node.setPointerCapture(e.pointerId);
      node.style.cursor = 'grabbing';
    });
    node.addEventListener('pointermove', function (e) {
      if (!drag) return;
      node.scrollLeft = drag.s - (e.clientX - drag.x);
    });
    var end = function () { drag = null; node.style.cursor = 'grab'; };
    node.addEventListener('pointerup', end);
    node.addEventListener('pointercancel', end);
    return { isDragging: function () { return !!drag; } };
  }

  var tlDrag = makeDraggable(tlTrack);
  var areasDrag = makeDraggable(areasTrack);

  // ---- Areas: wrap seamlessly and drift while on screen ----
  function copyWidth() { return areasTrack.scrollWidth / AREA_COPIES; }

  areasTrack.addEventListener('scroll', function () {
    var w = copyWidth();
    if (w <= areasTrack.clientWidth) return;
    if (areasTrack.scrollLeft >= w) areasTrack.scrollLeft -= w;
    else if (areasTrack.scrollLeft < 0) areasTrack.scrollLeft += w;
  }, { passive: true });

  if (!reduced) {
    var hovering = false;
    var onScreen = false;
    var raf = null;

    areasTrack.addEventListener('pointerenter', function () { hovering = true; });
    areasTrack.addEventListener('pointerleave', function () { hovering = false; });

    var step = function () {
      if (!onScreen) { raf = null; return; }
      if (!hovering && !areasDrag.isDragging()) areasTrack.scrollLeft += 0.6;
      raf = requestAnimationFrame(step);
    };

    // Only burn frames while the carousel is actually visible.
    new IntersectionObserver(function (entries) {
      onScreen = entries[0].isIntersecting;
      if (onScreen && raf === null) raf = requestAnimationFrame(step);
    }, { threshold: 0 }).observe(areasTrack);
  }

  // ---- Reveal on scroll ----
  if (!reduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (n) { io.observe(n); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (n) { n.classList.add('is-visible'); });
  }

  // ---- Plan drawing animation ----
  var svg = document.getElementById('plan-svg');
  if (svg && !reduced) {
    var shapes = Array.prototype.slice.call(svg.querySelectorAll('[data-draw]'));
    shapes.forEach(function (s) {
      try {
        var len = s.getTotalLength();
        s.style.strokeDasharray = String(len);
        s.style.strokeDashoffset = String(len);
      } catch (err) { /* getTotalLength unsupported for this shape */ }
    });
    var io2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        shapes.forEach(function (s, i) {
          s.style.transition = 'stroke-dashoffset 1.1s ' + (i * 0.07) + 's cubic-bezier(.3,.6,.2,1)';
          s.style.strokeDashoffset = '0';
        });
        io2.disconnect();
      });
    }, { threshold: 0.3 });
    io2.observe(svg);
  }

  // ---- Contact form ----
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      status.textContent = 'Preencha nome, email e mensagem.';
      return;
    }
    // No backend yet — open the user's mail client with the message pre-filled.
    var data = new FormData(form);
    var body = [
      'Nome: ' + data.get('nome'),
      'Telefone: ' + (data.get('telefone') || '—'),
      'Email: ' + data.get('email'),
      'Área: ' + (data.get('area') || '—'),
      '',
      data.get('mensagem')
    ].join('\n');
    window.location.href = 'mailto:info@luzesom.pt'
      + '?subject=' + encodeURIComponent('Pedido de contacto — site Luz e Som')
      + '&body=' + encodeURIComponent(body);
    status.textContent = 'A abrir o seu email…';
  });
})();
