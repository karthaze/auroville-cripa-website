import './style.css';

// ═══ PAGES ═══
const pages = {
home: () => `
<div class="page">
  <section class="hero">
    <div class="hero__bg"><img src="/images/hero-bg.png" alt="" /></div>
    <div class="hero__overlay"></div>
    <div class="hero__inner">
      <h1 class="hero__cripa">CRIPA</h1>
      <p class="hero__subtitle">Centre for Research in the Performing Arts · Auroville</p>
      <p class="hero__desc">For over 30 years, Auroville's home for the performing arts — where cultures meet, stories unfold, and the human spirit finds its voice.</p>
      <div class="hero__btns">
        <a href="#/productions" class="btn btn--red">Our Productions</a>
        <a href="#/about" class="btn btn--outline">The Story</a>
      </div>
    </div>
  </section>

  <section class="highlights">
    <div class="highlights__bg"><img src="/images/gallery-rehearsal.png" alt="" /><div class="highlights__bg-ov"></div></div>
    <div class="highlights__inner container">
      <p class="section-label">Featured Works</p>
      <h2 class="section-title">From the Repertoire</h2>
      <div class="divider"></div>
      <div class="highlights__grid">
        <div class="highlight-card">
          <div class="highlight-card__img"><img src="/images/production-tempest.png" alt="The Tempest" /></div>
          <div class="highlight-card__body">
            <p class="highlight-card__tag">2005</p>
            <h3 class="highlight-card__title">The Tempest</h3>
            <p class="highlight-card__sub">William Shakespeare</p>
          </div>
        </div>
        <div class="highlight-card">
          <div class="highlight-card__img"><img src="/images/production-milarepa.png" alt="Milarepa" /></div>
          <div class="highlight-card__body">
            <p class="highlight-card__tag">2004</p>
            <h3 class="highlight-card__title">Milarepa</h3>
            <p class="highlight-card__sub">Eric-Emmanuel Schmitt</p>
          </div>
        </div>
        <div class="highlight-card">
          <div class="highlight-card__img"><img src="/images/production-godot.png" alt="Waiting for Godot" /></div>
          <div class="highlight-card__body">
            <p class="highlight-card__tag">1993</p>
            <h3 class="highlight-card__title">Waiting for Godot</h3>
            <p class="highlight-card__sub">Samuel Beckett</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="home-quote">
    <p class="home-quote__text">"Theatre is about <em>transformation</em> — finding yourself and touching the deepest part of yourself in order to offer it up to the audience."</p>
    <p class="home-quote__author">— Jill Navarre, Artistic Director</p>
  </section>
</div>`,

about: () => `
<div class="page">
  <section class="section">
    <div class="container">
      <p class="section-label">About</p>
      <h2 class="section-title">The Story</h2>
      <div class="divider"></div>
      <div class="about__grid">
        <div class="about__text">
          <p>The Auroville Theatre Group has been performing in Auroville for over <strong>30 years</strong> — a journey of transformation, discovery, and the relentless pursuit of artistic truth.</p>
          <p>Many actors have come and gone; several have started their stage careers with ATG. The theatre scene in Auroville being fluid — actors work with more than one company, move from show to show. One thing has remained constant: <em>Jill Navarre</em>, ATG Artistic Director.</p>
          <p>The scripts are chosen for their beauty of language and depth of expression. We always ask: <strong>"What does this story mean to us, here, now?"</strong></p>
          <p>The plays should have relevance to the Auroville experience — its multicultural, international aspect, connected to what Auroville is all about: an expression of the search for human unity, its triumphs as well as its failures, man's aspiration for progress, the evolution of consciousness, unity in diversity, our connection with the Divine.</p>
          <p>CRIPA — the Centre for Research in the Performing Arts — is located in Kalabhumi, Auroville. It serves as a research hub and performance space, a project of SAIIER (Sri Aurobindo International Institute of Educational Research).</p>
        </div>
        <div>
          <div class="about__img"><img src="/images/gallery-rehearsal.png" alt="Rehearsal at CRIPA" /></div>
          <p class="about__caption"><span class="about__badge">CRIPA</span> A project of SAIIER — Sri Aurobindo International Institute of Educational Research</p>
        </div>
      </div>
    </div>
  </section>
</div>`,

productions: () => `
<div class="page">
  <section class="section">
    <div class="container">
      <p class="section-label">Programme</p>
      <h2 class="section-title">The Repertoire</h2>
      <div class="divider"></div>
      <p style="font-size:.95rem;color:var(--text-light);max-width:550px;margin-bottom:2rem;">From Beckett to Tagore, Shakespeare to Schmitt — three decades of stories that search for meaning.</p>
      <div class="prod-grid">
        <div class="prod-card">
          <div class="prod-card__img"><img src="/images/production-tempest.png" alt="The Tempest" /></div>
          <div class="prod-card__body">
            <p class="prod-card__year">2005</p>
            <h3 class="prod-card__title">The Tempest</h3>
            <p class="prod-card__author">William Shakespeare</p>
            <p class="prod-card__desc">Shakespeare's final masterpiece — a meditation on power, forgiveness, and the magic of theatre itself.</p>
          </div>
        </div>
        <div class="prod-card">
          <div class="prod-card__img"><img src="/images/production-milarepa.png" alt="Milarepa" /></div>
          <div class="prod-card__body">
            <p class="prod-card__year">2004</p>
            <h3 class="prod-card__title">Milarepa</h3>
            <p class="prod-card__author">Eric-Emmanuel Schmitt</p>
            <p class="prod-card__desc">Tibet's greatest yogi — from darkness to enlightenment. Government of India grant recipient.</p>
          </div>
        </div>
        <div class="prod-card">
          <div class="prod-card__img"><img src="/images/production-sacrifice.png" alt="Sacrifice" /></div>
          <div class="prod-card__body">
            <p class="prod-card__year">2003</p>
            <h3 class="prod-card__title">Sacrifice</h3>
            <p class="prod-card__author">Rabindranath Tagore</p>
            <p class="prod-card__desc">Tagore's exploration of religious ritual and the triumph of conscience over tradition.</p>
          </div>
        </div>
        <div class="prod-card">
          <div class="prod-card__img"><img src="/images/production-godot.png" alt="Waiting for Godot" /></div>
          <div class="prod-card__body">
            <p class="prod-card__year">1993</p>
            <h3 class="prod-card__title">Waiting for Godot</h3>
            <p class="prod-card__author">Samuel Beckett</p>
            <p class="prod-card__desc">Beckett's absurdist masterpiece — ATG's very first production.</p>
          </div>
        </div>
      </div>
      <div class="prod-list">
        <h3>Complete Works</h3>
        <ul>
          <li><span>2006</span> The Rainmaker — <em>N. Richard Nash</em></li>
          <li><span>2005</span> The Tempest — <em>Wm. Shakespeare</em></li>
          <li><span>2004</span> The Woolgatherer — <em>Wm. Mastrosimone</em></li>
          <li><span>2004</span> Milarepa — <em>Eric-Emmanuel Schmitt</em></li>
          <li><span>2003</span> Sacrifice — <em>Rabindranath Tagore</em></li>
          <li><span>2001</span> Nishtha — <em>Seyril Schochen</em></li>
          <li><span>1999</span> Bay at Nice — <em>David Hare</em></li>
          <li><span>1998</span> Rosencrantz & Guildenstern Are Dead — <em>Tom Stoppard</em></li>
          <li><span>1996</span> Legend of the Kalivelli Siddha — <em>Bhavana Dee</em></li>
          <li><span>1995</span> The Greedy Man — <em>Parthasarathy</em></li>
          <li><span>1994</span> Black Comedy — <em>Peter Shaffer</em></li>
          <li><span>1993</span> Waiting for Godot — <em>Samuel Beckett</em></li>
        </ul>
      </div>
    </div>
  </section>
</div>`,

philosophy: () => `
<div class="page">
  <section class="phil-section">
    <div class="phil__bg"><img src="/images/gallery-stage.png" alt="" /><div class="phil__bg-ov"></div></div>
    <div class="phil__inner container">
      <p class="section-label">Philosophy</p>
      <h2 class="section-title">The Heart</h2>
      <div class="divider"></div>
      <div class="phil__quote">
        <blockquote>
          <p>"Theatre is about <em>transformation</em>. It is about finding yourself and touching the deepest part of yourself in order to offer it up to the Divine, to the audience.</p>
          <p>You are there for them — you are enacting this miracle of <em>transformation</em> for them.</p>
          <p>And how do we open our hearts to allow this transformation to take place? We use the strongest power that we know — <em>the power of love</em>."</p>
        </blockquote>
        <cite class="phil__cite">— Jill Navarre, Artistic Director</cite>
      </div>
      <div class="phil__extended">
        <p>"What is this love? It is the love which can change you, open you, widen you, clean you, make you strong. It gives you a voice, two arms, two legs, a strong, flexible, responsive, energized, dynamic body and most of all, a heart."</p>
        <p>"We are here — not just in Auroville, but all of us, here on earth — to make it happen, to allow the spirit to work in the world. And we can do it. We must do it — together."</p>
      </div>
    </div>
  </section>
</div>`,

director: () => `
<div class="page">
  <section class="section">
    <div class="container">
      <p class="section-label">The Director</p>
      <h2 class="section-title">Jill Navarre</h2>
      <div class="divider"></div>
      <div class="dir__grid">
        <div>
          <h3 class="dir__name">Jill Navarre</h3>
          <p class="dir__role">Artistic Director · Playwright · Screenwriter</p>
          <div class="dir__bio">
            <p>Born in New Orleans, raised in Brooklyn — Jill's journey to Auroville is a story of artistic destiny. A poet turned playwright, she discovered theatre "for a lark" while pursuing her Master's in English, and never looked back.</p>
            <p>In Washington D.C., she co-founded the <strong>Sanctuary Theatre</strong>, presenting cross-cultural, inter-racial, avant-garde work. She won awards for directing (<em>Rivers of Blood</em>, First Prize, Source Theatre Festival) and playwriting (<em>The Cradle Will Fall</em>, First Prize, D.C. Arts Council Larry Neal Award).</p>
            <p>In 1987, a backpacking trip brought her to Auroville — "an international community dedicated to human unity and peace." She returned in 1991, and has been <strong>Artistic Director of ATG since 1992</strong>.</p>
            <p>In 2003, she was awarded a Government of India Development Scheme grant for directing <em>Milarepa</em>.</p>
          </div>
        </div>
        <div>
          <h4 class="tl-title">A Life in Theatre</h4>
          <div class="tl">
            <div class="tl__item"><span class="tl__yr">1985</span><span class="tl__ev">Co-founds Sanctuary Theatre, Washington D.C.</span></div>
            <div class="tl__item"><span class="tl__yr">1987</span><span class="tl__ev">First visit to Auroville, India</span></div>
            <div class="tl__item"><span class="tl__yr">1989</span><span class="tl__ev">Wins First Prize — Source Theatre & Larry Neal Award</span></div>
            <div class="tl__item"><span class="tl__yr">1991</span><span class="tl__ev">Moves permanently to Auroville</span></div>
            <div class="tl__item tl__item--hl"><span class="tl__yr">1992</span><span class="tl__ev">Becomes Artistic Director of ATG</span></div>
            <div class="tl__item"><span class="tl__yr">1993</span><span class="tl__ev">First ATG production: Waiting for Godot</span></div>
            <div class="tl__item"><span class="tl__yr">2003</span><span class="tl__ev">Government of India grant — Milarepa</span></div>
            <div class="tl__item"><span class="tl__yr">2005</span><span class="tl__ev">The Tempest — Shakespeare in Auroville</span></div>
            <div class="tl__item"><span class="tl__yr">Now</span><span class="tl__ev">Writing 'Ananda' (play) & 'Portrait of Anna' (screenplay)</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>`,

gallery: () => `
<div class="page">
  <section class="section">
    <div class="container" style="margin-bottom:1.5rem">
      <p class="section-label">Gallery</p>
      <h2 class="section-title">Moments</h2>
      <div class="divider"></div>
    </div>
    <div class="gal-grid">
      <div class="gal-item gal-item--w"><img src="/images/hero-bg.png" alt="CRIPA Stage" /><div class="gal-item__ov"><span>The Stage</span></div></div>
      <div class="gal-item"><img src="/images/production-tempest.png" alt="The Tempest" /><div class="gal-item__ov"><span>The Tempest, 2005</span></div></div>
      <div class="gal-item"><img src="/images/gallery-auroville.png" alt="Auroville" /><div class="gal-item__ov"><span>Auroville</span></div></div>
      <div class="gal-item gal-item--t"><img src="/images/production-milarepa.png" alt="Milarepa" /><div class="gal-item__ov"><span>Milarepa, 2004</span></div></div>
      <div class="gal-item"><img src="/images/gallery-rehearsal.png" alt="Rehearsal" /><div class="gal-item__ov"><span>Rehearsals</span></div></div>
      <div class="gal-item gal-item--w"><img src="/images/production-sacrifice.png" alt="Sacrifice" /><div class="gal-item__ov"><span>Sacrifice, 2003</span></div></div>
      <div class="gal-item"><img src="/images/gallery-stage.png" alt="CRIPA Interior" /><div class="gal-item__ov"><span>CRIPA Interior</span></div></div>
      <div class="gal-item"><img src="/images/production-godot.png" alt="Waiting for Godot" /><div class="gal-item__ov"><span>Waiting for Godot, 1993</span></div></div>
    </div>
  </section>
</div>`,

contact: () => `
<div class="page">
  <section class="section">
    <div class="container">
      <p class="section-label">Contact</p>
      <h2 class="section-title">Join the Story</h2>
      <div class="divider"></div>
      <div class="contact__grid">
        <div>
          <h3 class="contact__info">Visit CRIPA</h3>
          <div class="contact__detail">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <div><strong>CRIPA — Kalabhumi</strong><br/>Auroville, Tamil Nadu 605101, India</div>
          </div>
          <div class="contact__detail">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <a href="mailto:theatre@auroville.org.in">theatre@auroville.org.in</a>
          </div>
          <div class="contact__av">
            <p>CRIPA is a project of <strong>SAIIER</strong> — Sri Aurobindo International Institute of Educational Research.</p>
            <a href="https://auroville.org" target="_blank" rel="noopener" class="btn btn--outline-dark" style="font-size:.78rem;padding:.5rem 1rem">Visit Auroville →</a>
          </div>
        </div>
        <form class="contact__form" id="contact-form">
          <div class="fg"><label for="c-name">Name</label><input id="c-name" type="text" required placeholder="Your name" /></div>
          <div class="fg"><label for="c-email">Email</label><input id="c-email" type="email" required placeholder="Your email" /></div>
          <div class="fg"><label for="c-subj">Subject</label>
            <select id="c-subj"><option>General Inquiry</option><option>Auditions</option><option>Workshops</option><option>Visiting CRIPA</option><option>Collaboration</option></select>
          </div>
          <div class="fg"><label for="c-msg">Message</label><textarea id="c-msg" required placeholder="Tell us about your interest in theatre..."></textarea></div>
          <button type="submit" class="btn btn--red">Send Message</button>
        </form>
      </div>
    </div>
  </section>
</div>`
};

// ═══ ROUTER ═══
const app = document.getElementById('app');

function getRoute() {
  const hash = location.hash || '#/';
  return hash.replace('#/', '') || 'home';
}

function render() {
  const route = getRoute();
  const pageFn = pages[route] || pages.home;
  app.innerHTML = pageFn();
  window.scrollTo(0, 0);

  document.querySelectorAll('.nav__link').forEach(l => {
    const p = l.dataset.page;
    l.classList.toggle('active', p === route || (p === 'home' && route === ''));
  });

  if (route === 'gallery') bindLightbox();
  if (route === 'contact') bindForm();

  const titles = {home:'Home',about:'About',productions:'Productions',philosophy:'Philosophy',director:'The Director',gallery:'Gallery',contact:'Contact'};
  document.title = `CRIPA — ${titles[route] || 'Home'}`;
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);

// ═══ NAV SCROLL ═══
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ═══ BURGER ═══
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});
document.querySelectorAll('.mobile-menu__link').forEach(l => {
  l.addEventListener('click', () => {
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ═══ LIGHTBOX ═══
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
const lbClose = document.getElementById('lightbox-close');

function bindLightbox() {
  document.querySelectorAll('.gal-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img) { lbImg.src = img.src; lbImg.alt = img.alt; lightbox.classList.add('active'); document.body.style.overflow = 'hidden'; }
    });
  });
}
function closeLb() { lightbox.classList.remove('active'); document.body.style.overflow = ''; }
lbClose.addEventListener('click', closeLb);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLb(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });

// ═══ FORM ═══
function bindForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sent ✓';
    btn.style.background = 'var(--olive)';
    setTimeout(() => { btn.textContent = 'Send Message'; btn.style.background = ''; form.reset(); }, 3000);
  });
}
