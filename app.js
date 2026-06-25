/**
 * ============================================================
 * Next Level Talks — app.js
 * ============================================================
 *
 * CONFIGURATION
 * -------------
 * All site-wide URLs and content live at the top of this file.
 * You only need to edit the CONFIG and EPISODES sections below.
 *
 * STRUCTURE
 * ---------
 * 1. CONFIG          — URLs you need to update
 * 2. EPISODES        — Your 10 featured podcast episodes
 * 3. CLIPSPARK       — Feature list for the ClipSpark showcase
 * 4. SERVICES        — Digital growth service cards
 * 5. TESTIMONIALS    — Social proof cards
 * 6. STATS           — Podcast statistics
 * 7. Init functions  — Render + behaviour (don't edit below here)
 * ============================================================
 */


/* ============================================================
   1. CONFIG — PASTE YOUR URLS HERE
   ============================================================ */

const CONFIG = {
  // --- Podcast platform URLs ---
  SPOTIFY_PROFILE_URL:  'https://open.spotify.com/show/033nrxZscmuvwybT7l0jye', // ← paste here
  YOUTUBE_CHANNEL_URL:  'https://www.youtube.com/channel/UC8aqUCmTCtWZclraOnAhG9w',        // ← paste here

  // --- ClipSpark SaaS URL ---
  CLIPSPARK_URL:        'https://clipspark.co.za',                      // ← paste here

  // --- Social profiles ---
  LINKEDIN_URL:         'https://www.linkedin.com/in/gugulethu-mngomezulu-9a6135246/',     // ← paste here
  FACEBOOK_URL:         'https://www.facebook.com/profile.php?id=61565649996576',          // ← paste here

  
};

/* ============================================================
   2. EPISODES — ADD/EDIT YOUR 10 FEATURED EPISODES HERE
   ============================================================
   HOW TO ADD AN EPISODE:
   1. Go to YouTube and open the episode.
   2. Copy the video URL (e.g. https://youtu.be/dQw4w9WgXcQ)
   3. Get the thumbnail: replace VIDEO_ID in
      https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg
   4. Paste everything into the object below.
   ============================================================ */

const EPISODES = [
  {
    youtubeUrl:   'https://youtu.be/qxXuj0HdhU4?si=6zAV-9MaIRGNGUvU',   // ← paste YouTube URL
    thumbnail:    'https://i.ytimg.com/vi/qxXuj0HdhU4/hqdefault.jpg', // ← paste thumbnail
    title:        'I Started Tech at 26 — Here’s What Nobody Told Me.',
    description:  'How I started my tech journey and got ny breakthrough in tech at 26, just pure hunger to change my life. In this first episode, I share how I began the struggles I faced and what pushed me into coding. If you’re starting or starting from zero, this is for you. ',
  },
  {
    youtubeUrl:   'https://youtu.be/xiv3hPQK9eI?si=0h7ICj1csn6K8oqc',
    thumbnail:    'https://i.ytimg.com/vi/xiv3hPQK9eI/hqdefault.jpg',
    title:        'My Daily Routine for Growth ( Life + Career ) as a Junior Software Developer.',
    description:  'Feel free to follow ZAIO to kick start your career in Tech or even break into tech follow them on social media and have a look in their website plus student reviews which is IMPORTANT before you make a final decision.',
  },
  {
    youtubeUrl:   'https://youtu.be/ZNpeelJdYko?si=IE9YcVTaL11YGuQt',
    thumbnail:    'https://i.ytimg.com/vi/ZNpeelJdYko/hqdefault.jpg',
    title:        'From Junior Dev to AI Engineer | How I Got In Offerzen | My Journey',
    description:  'I went from a Junior Full Stack Developer to an AI Engineer 🚀 and in this video, I break down exactly how it happened.',
  },
  {
    youtubeUrl:   'https://youtu.be/j8pEvk5ALH0?si=d5WNXIC3kXWj9Stz',
    thumbnail:    'https://i.ytimg.com/vi/j8pEvk5ALH0/hqdefault.jpg',
    title:        'AI Engineering in 2026: The Rise of AI Agents and Why Backend Developers Are Winning.',
    description:  'I share my own experience working in AI Engineering, the skills that matter most, and how Large Language Models (LLMs) are transforming software development, startups, and the future of work.',
  },
  {
    youtubeUrl:   'https://youtu.be/KnleBfhCA9s?si=P5eVR8zJ-p3KfOjm',
    thumbnail:    'https://i.ytimg.com/vi/KnleBfhCA9s/hqdefault.jpg',
    title:        'How Big Goals Are Built in Small Steps.',
    description:  'Big goals don’t happen overnight.',
  },
  {
    youtubeUrl:   'https://youtu.be/xmWaJY4DB28?si=rNU__8DCQzeGeVNt',
    thumbnail:    'https://i.ytimg.com/vi/xmWaJY4DB28/hqdefault.jpg',
    title:        'Does Africa Need More Data Engineers Than AI Engineers ?',
    description:  'Does Africa need more Data Engineers than AI Engineers? 🤔',
  },
  {
    youtubeUrl:   'https://youtu.be/vXCK6OEszJs?si=_ewHCfmllF5iB3SY',
    thumbnail:    'https://i.ytimg.com/vi/vXCK6OEszJs/hqdefault.jpg',
    title:        'How to THINK Long-Term in a Short -Term World ( Tech Journey + SaaS Mindset)',
    description:  'This isn’t about motivation… it’s about perspective.',
  },
  {
    youtubeUrl:   'https://youtu.be/EDv72llLLr4?si=T_ffTdrtP70RIEq7',
    thumbnail:    'https://i.ytimg.com/vi/EDv72llLLr4/hqdefault.jpg',
    title:        'University vs Bootcamp — I Wish I Knew This Earlier',
    description:  'This is the start of a new journey unfolds keep it alive by Subscribing and Sharing 🔥📌',
  },
  
];


/* ============================================================
   3. CLIPSPARK FEATURES
   ============================================================ */
 
const CLIPSPARK_FEATURES = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
    title: 'Scroll-Stopping Hooks',
    description: 'Powerful opening lines engineered to capture attention in the first 3 seconds before the thumb scrolls.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
    title: 'Complete TikTok Scripts',
    description: 'Ready-to-record voiceover scripts in a conversational format. 60–90 seconds. Nothing left to figure out.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/></svg>`,
    title: 'Captions & Hashtags',
    description: 'Optimized captions and 8–12 relevant hashtags generated instantly alongside every script.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    title: 'Content History',
    description: 'Every script you generate is automatically saved so you can revisit, edit, or reuse ideas anytime.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>`,
    title: 'Saved Library',
    description: 'Pro users can bookmark their best scripts and content ideas into a personal library for quick access.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
    title: 'Content Calendar',
    description: 'Plan and organize your upcoming content from one dashboard. Stay consistent without the last-minute scramble.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>`,
    title: 'Templates',
    description: 'Beginner-friendly fill-in-the-blank frameworks so you never start from a blank page.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>`,
    title: 'Secure Platform',
    description: 'Firebase Auth, JWT tokens, server-side credit checks, and rate limiting protect every request.',
  },
];
 

/* ============================================================
   4. SERVICES
   ============================================================ */

const SERVICES = [
  {
    id:          'put-me-on-map',
    badge:       null,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    title:       'Put Me On The Map',
    subtitle:    'Google Business Profile setup and optimisation.',
    includes: [
      'Profile Setup',
      'Photos Uploaded',
      'Keyword Optimisation',
      'Accurate Business Information',
    ],
    price:       'R600',
    priceNote:   'Once-Off',
    maintenance: null,
    badgeLabel:  null,
    badgeType:   null,
  },
  {
    id:          'my-business-online',
    badge:       'Most Popular',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>`,
    title:       'My Business Online',
    subtitle:    'Professional lead-generation website.',
    includes: [
      'Home, About, Services & Contact pages',
      'WhatsApp Integration',
      'Mobile Optimisation',
      'Google Maps Embed',
      'Google Business Profile Integration',
    ],
    price:       'R3,500',
    priceNote:   'Once-Off',
    maintenance: 'R600/month maintenance',
    badgeLabel:  'Most Popular',
    badgeType:   'popular',
  },
  {
    id:          'always-on-assistant',
    badge:       'AI Powered',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>`,
    title:       'Always On Assistant',
    subtitle:    'AI chatbot for your website.',
    includes: [
      'Lead Capture',
      'Automated Responses',
      'WhatsApp Notifications',
      'AI Integration',
    ],
    price:       'R2,000',
    priceNote:   'Add-On',
    maintenance: null,
    badgeLabel:  'AI Powered',
    badgeType:   'ai',
  },
];



/* ============================================================
   5. TESTIMONIALS — Replace with real testimonials when ready
   ============================================================ */
 
const TESTIMONIALS = [
  {
    quote:  'Your testimonial will appear here. Reach out to request a service and be among the first featured clients.',
    name:   'Client Name',
    role:   'Business Owner',
    initials: 'CL',
  },
  {
    quote:  'Your testimonial will appear here. Reach out to request a service and be among the first featured clients.',
    name:   'Client Name',
    role:   'Entrepreneur',
    initials: 'CL',
  },
  {
    quote:  'Your testimonial will appear here. Reach out to request a service and be among the first featured clients.',
    name:   'Client Name',
    role:   'Podcast Listener',
    initials: 'CL',
  },
];
 
 
/* ============================================================
   6. STATS — Update manually whenever you check YouTube Studio
   ============================================================
   HOW TO UPDATE:
   Just change episodes, views, and subscribers below.
   Save the file — the counter animates and the goal bar moves.
 
   WHERE TO FIND YOUR NUMBERS:
   → YouTube Studio: studio.youtube.com
     Dashboard shows subscribers + views at a glance.
   ============================================================ */
 
const STATS_CONFIG = {
  // ↓↓↓ UPDATE THESE THREE NUMBERS ↓↓↓
  episodes:    '83',      // your total video count
  views:       '31529',   // total channel views (no commas)
  subscribers: '139',     // current subscriber count
 
  // 2026 subscriber goal — progress bar tracks this
  subscriberGoal: 500,
};
 
 
/* ============================================================
   — EVERYTHING BELOW IS RENDERING & BEHAVIOUR —
      No need to edit unless you want custom logic.
   ============================================================ */
 
 
/* ---- Render: Episodes ------------------------------------- */
function renderEpisodes() {
  const grid = document.getElementById('episodes-grid');
  if (!grid) return;
 
  grid.innerHTML = EPISODES.map((ep, i) => {
    const isPlaceholder = ep.youtubeUrl === 'YOUTUBE_EPISODE_LINK';
    const thumbFallback = `https://placehold.co/640x360/1A1A1A/52525B?text=Episode+${i + 1}`;
    const thumbSrc = isPlaceholder ? thumbFallback : ep.thumbnail;
 
    return `
      <article class="episode-card reveal-up" style="--delay: ${(i % 4) * 0.07}s">
        <div class="thumbnail">
          <img
            src="${thumbSrc}"
            alt="${escapeHtml(ep.title)}"
            loading="lazy"
            onerror="this.src='${thumbFallback}'"
          />
          <div class="play-overlay" aria-hidden="true">
            <div class="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h3>${escapeHtml(ep.title)}</h3>
          <p>${escapeHtml(ep.description)}</p>
          <a
            href="${isPlaceholder ? '#podcast' : ep.youtubeUrl}"
            ${isPlaceholder ? '' : 'target="_blank" rel="noopener noreferrer"'}
            class="watch-btn"
            aria-label="Watch episode: ${escapeHtml(ep.title)}"
          >
            Watch Episode
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </article>
    `;
  }).join('');
}
 
 
/* ---- Render: ClipSpark Features --------------------------- */
function renderClipSparkFeatures() {
  const container = document.getElementById('clipspark-features');
  if (!container) return;
 
  container.innerHTML = CLIPSPARK_FEATURES.map(f => `
    <div class="feature-item">
      <div class="feature-icon" aria-hidden="true">${f.icon}</div>
      <div>
        <p class="text-sm font-semibold text-white mb-0.5">${escapeHtml(f.title)}</p>
        <p class="text-xs text-soft-gray leading-relaxed">${escapeHtml(f.description)}</p>
      </div>
    </div>
  `).join('');
}
 
 
/* ---- Render: Services ------------------------------------- */
function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
 
  grid.innerHTML = SERVICES.map(svc => `
    <div class="service-card ${svc.badgeType === 'popular' ? 'popular' : ''}">
      ${svc.badgeLabel ? `<div class="service-badge ${svc.badgeType === 'popular' ? 'popular-badge' : 'ai-badge'}">${escapeHtml(svc.badgeLabel)}</div>` : ''}
 
      <div class="w-10 h-10 rounded-lg bg-crimson/10 border border-crimson/20 flex items-center justify-center text-crimson" aria-hidden="true">
        ${svc.icon}
      </div>
 
      <div>
        <h3 class="font-semibold text-white text-base mb-1">${escapeHtml(svc.title)}</h3>
        <p class="text-xs text-soft-gray">${escapeHtml(svc.subtitle)}</p>
      </div>
 
      <ul class="service-includes">
        ${svc.includes.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
      </ul>
 
      <div class="mt-auto pt-4 border-t border-border">
        <p class="service-price">${escapeHtml(svc.price)} <span>${escapeHtml(svc.priceNote)}</span></p>
        ${svc.maintenance ? `<p class="text-xs text-mid-gray mt-1">${escapeHtml(svc.maintenance)}</p>` : ''}
      </div>
 
      <a href="nonthandogugulethu@gmail.com" class="block w-full text-center py-3 rounded text-sm font-semibold transition-colors duration-200 ${svc.badgeType === 'popular' ? 'bg-crimson hover:bg-accent-red text-white' : 'border border-border hover:border-white/30 text-white'}">
        Get Started
      </a>
    </div>
  `).join('');
}
 
 
/* ============================================================
   SUPABASE CONFIG — paste your keys here
   ============================================================ */
const SUPABASE_URL    = 'https://btwnlybcijrggziyrtri.supabase.co';
const SUPABASE_ANON   = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0d25seWJjaWpyZ2d6aXlydHJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxMjQ4ODIsImV4cCI6MjA5NzcwMDg4Mn0.iPSLrhjPZ3HmwdeZviWZlQVQ8LDYCVN8rgXLW6q5nx0';
 
/* ---- Supabase helpers ------------------------------------- */
// Thin fetch wrapper — no SDK needed, keeps the file dependency-free
async function sbSelect(table, filters = '') {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/${table}?${filters}&order=created_at.asc`,
    {
      headers: {
        apikey:        SUPABASE_ANON,
        Authorization: `Bearer ${SUPABASE_ANON}`,
        'Content-Type': 'application/json',
      },
    }
  );
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
 
async function sbInsert(table, data) {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/${table}`,
    {
      method: 'POST',
      headers: {
        apikey:        SUPABASE_ANON,
        Authorization: `Bearer ${SUPABASE_ANON}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(data),
    }
  );
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
 
// Is Supabase configured?
function sbReady() {
  return SUPABASE_URL !== 'YOUR_SUPABASE_URL' && SUPABASE_ANON !== 'YOUR_ANON_KEY';
}
 
/* ---- Load testimonials from Supabase (approved only) ------ */
async function loadTestimonials() {
  // Always start with seed cards from TESTIMONIALS array
  const seeds = TESTIMONIALS;
 
  if (!sbReady()) {
    // Not connected yet — just return seeds
    return seeds;
  }
 
  try {
    // RLS policy on Supabase only returns approved=true rows
    const rows = await sbSelect('testimonials', 'approved=eq.true');
    // Map Supabase row shape to card shape
    const remote = rows.map(r => ({
      name:     r.name,
      role:     r.role || 'Listener',
      quote:    r.quote,
      rating:   r.rating || 5,
      initials: r.initials || r.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2),
    }));
    return [...seeds, ...remote];
  } catch (err) {
    console.warn('Could not load testimonials from Supabase:', err);
    return seeds;
  }
}
 
/* ---- Testimonials: slider state --------------------------- */
const slider = {
  index:   0,
  perPage: 3,
  all:     [],
  pages:   0,
 
  init(items) {
    this.all = items;
    this.updatePerPage();
    this.pages = Math.ceil(this.all.length / this.perPage);
    this.index = 0;
  },
 
  updatePerPage() {
    this.perPage = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  },
 
  canPrev() { return this.index > 0; },
  canNext() { return this.index < this.pages - 1; },
  prev()    { if (this.canPrev()) this.index--; },
  next()    { if (this.canNext()) this.index++; },
};
 
function buildCard(t) {
  const filled  = '★'.repeat(Math.min(t.rating || 5, 5));
  const empty   = '★'.repeat(Math.max(5 - (t.rating || 5), 0));
  const initials = t.initials ||
    t.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
 
  return `
    <div class="testimonial-card flex-shrink-0" style="width: var(--card-w)">
      <div class="stars" aria-label="${t.rating || 5} stars">
        <span style="color:#F59E0B">${filled}</span><span style="color:#3F3F46">${empty}</span>
      </div>
      <blockquote>"${escapeHtml(t.quote)}"</blockquote>
      <div class="author">
        <div class="avatar">${escapeHtml(initials)}</div>
        <div class="author-info">
          <p>${escapeHtml(t.name)}</p>
          <p>${escapeHtml(t.role || 'Listener')}</p>
        </div>
      </div>
    </div>
  `;
}
 
function renderSlider() {
  const track = document.getElementById('testimonials-track');
  const dots  = document.getElementById('t-dots');
  const prev  = document.getElementById('t-prev');
  const next  = document.getElementById('t-next');
  if (!track) return;
 
  slider.updatePerPage();
  slider.pages = Math.ceil(slider.all.length / slider.perPage);
  slider.index = Math.min(slider.index, Math.max(slider.pages - 1, 0));
 
  const gap    = 24;
  const totalW = (track.parentElement || document.body).offsetWidth || 900;
  const cardW  = (totalW - gap * (slider.perPage - 1)) / slider.perPage;
 
  track.style.setProperty('--card-w', cardW + 'px');
  track.innerHTML = slider.all.length
    ? slider.all.map(buildCard).join('')
    : `<p class="text-soft-gray text-sm">No testimonials yet — be the first!</p>`;
 
  const offset = slider.index * (cardW + gap) * slider.perPage;
  track.style.transform = `translateX(-${offset}px)`;
 
  if (dots) {
    dots.innerHTML = Array.from({ length: slider.pages }, (_, i) => `
      <button
        class="w-2 h-2 rounded-full transition-all duration-300 ${i === slider.index ? 'bg-crimson w-5' : 'bg-border hover:bg-mid-gray'}"
        aria-label="Go to page ${i + 1}"
        onclick="sliderGoTo(${i})"
      ></button>
    `).join('');
  }
 
  if (prev) prev.disabled = !slider.canPrev();
  if (next) next.disabled = !slider.canNext();
}
 
window.sliderGoTo = function(i) {
  slider.index = i;
  renderSlider();
};
 
/* ---- Render: Testimonials (async) ------------------------- */
async function renderTestimonials() {
  // Show seeds immediately while Supabase loads
  slider.init(TESTIMONIALS);
  renderSlider();
 
  // Fetch approved remote testimonials
  const items = await loadTestimonials();
  slider.init(items);
  renderSlider();
 
  // Arrow buttons
  const prev = document.getElementById('t-prev');
  const next = document.getElementById('t-next');
  if (prev) prev.addEventListener('click', () => { slider.prev(); renderSlider(); });
  if (next) next.addEventListener('click', () => { slider.next(); renderSlider(); });
 
  // Resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      slider.updatePerPage();
      slider.pages = Math.ceil(slider.all.length / slider.perPage);
      slider.index = Math.min(slider.index, slider.pages - 1);
      renderSlider();
    }, 150);
  });
 
  initStarPicker();
}
 
/* ---- Star picker ------------------------------------------ */
function initStarPicker() {
  const picker      = document.getElementById('star-picker');
  const ratingInput = document.getElementById('tf-rating');
  if (!picker) return;
  let selected = 5;
  updateStars(picker, selected);
 
  picker.querySelectorAll('.star-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => updateStars(picker, +btn.dataset.star));
    btn.addEventListener('mouseleave', () => updateStars(picker, selected));
    btn.addEventListener('click', () => {
      selected = +btn.dataset.star;
      if (ratingInput) ratingInput.value = selected;
      updateStars(picker, selected);
    });
  });
}
 
function updateStars(picker, n) {
  picker.querySelectorAll('.star-btn').forEach(btn => {
    const on = +btn.dataset.star <= n;
    btn.style.color = on ? '#F59E0B' : '';
    btn.setAttribute('aria-pressed', String(on));
  });
}
 
/* ---- Testimonial submit ----------------------------------- */
window.handleTestimonialSubmit = async function(e) {
  e.preventDefault();
  const name    = document.getElementById('tf-name').value.trim();
  const role    = document.getElementById('tf-role').value.trim();
  const message = document.getElementById('tf-message').value.trim();
  const rating  = parseInt(document.getElementById('tf-rating').value, 10) || 5;
  const fb      = document.getElementById('tf-feedback');
  const btn     = e.target.querySelector('button[type="submit"]');
 
  if (!name || !message) return;
 
  const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
 
  // Disable button while submitting
  if (btn) { btn.disabled = true; btn.textContent = 'Submitting…'; }
 
  if (sbReady()) {
    // Save to Supabase — approved=false until you approve in dashboard
    try {
      await sbInsert('testimonials', {
        name,
        role:     role || 'Listener',
        quote:    message,
        rating,
        initials,
        approved: false,
      });
 
      if (fb) {
        fb.textContent = `Thanks, ${name}! Your testimonial has been submitted and will appear once approved.`;
        fb.classList.remove('hidden');
        fb.style.color = '#4ade80';
      }
    } catch (err) {
      console.error('Supabase insert error:', err);
      if (fb) {
        fb.textContent = 'Something went wrong. Please try again.';
        fb.classList.remove('hidden');
        fb.style.color = '#f87171';
      }
    }
  } else {
    // Supabase not connected — show in slider locally only
    const t = { name, role: role || 'Listener', quote: message, rating, initials };
    slider.all.push(t);
    slider.pages = Math.ceil(slider.all.length / slider.perPage);
    slider.index = slider.pages - 1;
    renderSlider();
 
    if (fb) {
      fb.textContent = `Thanks, ${name}! Your testimonial is live locally. Connect Supabase to make it visible to everyone.`;
      fb.classList.remove('hidden');
      fb.style.color = '#facc15';
    }
  }
 
  // Reset form
  if (btn) { btn.disabled = false; btn.textContent = 'Submit Testimonial'; }
  document.getElementById('testimonial-form').reset();
  const picker      = document.getElementById('star-picker');
  const ratingInput = document.getElementById('tf-rating');
  if (picker && ratingInput) { ratingInput.value = '5'; updateStars(picker, 5); }
 
  document.getElementById('social-proof')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
 
 
/* ---- Render: Stats ---------------------------------------- */
 
// Animated number counter
function animateCount(el, target, duration = 1800) {
  if (!el) return;
  const start     = 0;
  const startTime = performance.now();
 
  const step = (now) => {
    const elapsed  = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased    = 1 - Math.pow(1 - progress, 3);
    const current  = Math.round(start + (target - start) * eased);
    el.textContent = formatStatNumber(current);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = formatStatNumber(target);
  };
 
  requestAnimationFrame(step);
}
 
function formatStatNumber(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (n >= 1000)    return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  return n.toLocaleString();
}
 
// Render the subscriber goal progress bar
function renderGoalBar(subscribers) {
  const goal    = STATS_CONFIG.subscriberGoal;
  const pct     = Math.min(Math.round((subscribers / goal) * 100), 100);
  const remaining = Math.max(goal - subscribers, 0);
 
  // Insert goal bar after the social-proof stats grid
  const statsSection = document.getElementById('social-proof');
  if (!statsSection) return;
 
  // Remove existing if re-rendered
  const existing = document.getElementById('goal-bar-container');
  if (existing) existing.remove();
 
  const wrapper = document.createElement('div');
  wrapper.id = 'goal-bar-container';
  wrapper.className = 'mt-10 reveal-up';
  wrapper.innerHTML = `
    <div class="max-w-lg mx-auto text-center">
      <p class="text-xs font-semibold tracking-[0.15em] uppercase text-crimson mb-2">2026 Goal</p>
      <p class="text-sm text-soft-gray mb-4">
        <span class="text-white font-semibold">${formatStatNumber(subscribers)}</span>
        of
        <span class="text-white font-semibold">${formatStatNumber(goal)}</span>
        subscribers
        ${remaining > 0 ? `<span class="text-mid-gray"> — ${formatStatNumber(remaining)} to go</span>` : '<span class="text-green-400"> — Goal reached! 🎉</span>'}
      </p>
      <div class="h-2 w-full rounded-full bg-surface border border-border overflow-hidden">
        <div
          id="goal-bar-fill"
          class="h-full rounded-full bg-crimson transition-all duration-1000 ease-out"
          style="width: 0%"
        ></div>
      </div>
      <p class="text-xs text-mid-gray mt-2">${pct}% complete</p>
    </div>
  `;
 
  // Insert after the stats grid
  const statsGrid = statsSection.querySelector('.grid.grid-cols-3');
  if (statsGrid) statsGrid.after(wrapper);
  else statsSection.querySelector('.max-w-7xl').appendChild(wrapper);
 
  // Animate the bar width after paint
  requestAnimationFrame(() => {
    setTimeout(() => {
      const fill = document.getElementById('goal-bar-fill');
      if (fill) fill.style.width = pct + '%';
    }, 300);
  });
}
 
// Render stats from manual config — animate counters + goal bar
function renderStats() {
  const subs  = parseInt(STATS_CONFIG.subscribers, 10) || 0;
  const views = parseInt(STATS_CONFIG.views.replace(/,/g, ''), 10) || 0;
  const eps   = parseInt(STATS_CONFIG.episodes, 10) || 0;
 
  setStatEls(eps, views, subs, true);
  renderGoalBar(subs);
}
 
function setStatEls(episodes, views, subscribers, animate) {
  const pairs = [
    { ids: ['stat-episodes', 'stat-ep-2'],   raw: episodes },
    { ids: ['stat-views',    'stat-views-2'], raw: views    },
    { ids: ['stat-subs',     'stat-subs-2'],  raw: subscribers },
  ];
 
  pairs.forEach(({ ids, raw }) => {
    const num = typeof raw === 'number' ? raw : parseInt(String(raw).replace(/,/g, ''), 10);
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      if (animate && !isNaN(num)) {
        animateCount(el, num);
      } else {
        el.textContent = typeof raw === 'string' ? raw : formatStatNumber(raw);
      }
    });
  });
}
 
 
/* ---- Wire: Config URLs ------------------------------------ */
function applyConfig() {
  const map = {
    'spotify-link':     CONFIG.SPOTIFY_PROFILE_URL,
    'footer-youtube':   CONFIG.YOUTUBE_CHANNEL_URL,
    'footer-spotify':   CONFIG.SPOTIFY_PROFILE_URL,
    'footer-linkedin':  CONFIG.LINKEDIN_URL,
    'footer-facebook':  CONFIG.FACEBOOK_URL,
    'footer-clipspark': CONFIG.CLIPSPARK_URL,
    'clipspark-link':   CONFIG.CLIPSPARK_URL,
  };
  Object.entries(map).forEach(([id, url]) => {
    const el = document.getElementById(id);
    if (el) el.href = url;
  });
 
   // Email links
  const emailLink    = document.getElementById('contact-email-link');
  const emailDisplay = document.getElementById('contact-email-display');
  if (emailLink)    emailLink.href = `mailto:${CONFIG.CONTACT_EMAIL}`;
  if (emailDisplay) emailDisplay.textContent = CONFIG.CONTACT_EMAIL;
 
  // Footer year
  const yr = document.getElementById('footer-year');
  if (yr) yr.textContent = new Date().getFullYear();
}
 
 
/* ---- Navbar: scroll state --------------------------------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
 
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };
 
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
 
 
/* ---- Mobile menu ------------------------------------------ */
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const menu   = document.getElementById('mobile-menu');
  const iconOpen  = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');
  if (!toggle || !menu) return;
 
  toggle.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden');
    menu.classList.toggle('hidden', isOpen);
    toggle.setAttribute('aria-expanded', String(!isOpen));
    iconOpen.classList.toggle('hidden', !isOpen);
    iconClose.classList.toggle('hidden', isOpen);
  });
}
 
window.closeMobileMenu = function () {
  const menu  = document.getElementById('mobile-menu');
  const iconOpen  = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');
  const toggle = document.getElementById('menu-toggle');
  if (menu) menu.classList.add('hidden');
  if (iconOpen)  iconOpen.classList.remove('hidden');
  if (iconClose) iconClose.classList.add('hidden');
  if (toggle) toggle.setAttribute('aria-expanded', 'false');
};
 
 
/* ---- Scroll reveal ---------------------------------------- */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal-up');
 
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }
 
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
 
  els.forEach(el => observer.observe(el));
}
 
 
/* ---- Newsletter form -------------------------------------- */
window.handleNewsletterSubmit = async function (e) {
  e.preventDefault();
  const name  = document.getElementById('nl-name').value.trim();
  const email = document.getElementById('nl-email').value.trim();
  const fb    = document.getElementById('nl-feedback');
  const btn   = e.target.querySelector('button[type="submit"]');

  if (!name || !email) return;

  if (btn) { btn.disabled = true; btn.textContent = 'Subscribing...'; }

  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/subscribers`,
      {
        method: 'POST',
        headers: {
          apikey:        SUPABASE_ANON,
          Authorization: `Bearer ${SUPABASE_ANON}`,
          'Content-Type': 'application/json',
          Prefer:        'return=minimal',
        },
        body: JSON.stringify({ name, email }),
      }
    );

    if (!res.ok) {
      const text = await res.text();
      const isDuplicate = text.includes('unique') || text.includes('duplicate');
      fb.textContent = isDuplicate
        ? 'That email is already subscribed!'
        : 'Something went wrong. Please try again.';
      fb.classList.remove('hidden');
      fb.style.color = isDuplicate ? '#facc15' : '#f87171';
    } else {
      fb.textContent = `You're in, ${name}! Welcome to the list.`;
      fb.classList.remove('hidden');
      fb.style.color = '#4ade80';
      document.getElementById('nl-name').value  = '';
      document.getElementById('nl-email').value = '';
    }

  } catch (err) {
    const isDuplicate = err.message?.includes('unique') || err.message?.includes('duplicate');
    fb.textContent = isDuplicate
      ? 'That email is already subscribed!'
      : 'Something went wrong. Please try again.';
    fb.classList.remove('hidden');
    fb.style.color = isDuplicate ? '#facc15' : '#f87171';
  }

  if (btn) { btn.disabled = false; btn.textContent = 'Subscribe'; }
};


/* ---- Contact form ----------------------------------------- */
 
 
/* ---- Contact form ----------------------------------------- */
window.handleContactSubmit = function (e) {
  e.preventDefault();
  const name     = document.getElementById('cf-name').value.trim();
  const email    = document.getElementById('cf-email').value.trim();
  const business = document.getElementById('cf-business').value.trim();
  const phone    = document.getElementById('cf-phone').value.trim();
  const message  = document.getElementById('cf-message').value.trim();
  const fb       = document.getElementById('cf-feedback');
 
  if (!name || !email || !message) return;
 
  // Replace with your form backend (Formspree, EmailJS, etc.)
  console.log('Contact form:', { name, email, business, phone, message });
 
  fb.textContent = `Thanks, ${name}! Message received. I'll be in touch shortly.`;
  fb.classList.remove('hidden');
  fb.style.color = '#4ade80';
 
  document.getElementById('contact-form').reset();
};
 
 
/* ---- Utility: escape HTML --------------------------------- */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
 
 
/* ---- Bootstrap -------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  applyConfig();
  renderEpisodes();
  renderClipSparkFeatures();
  renderServices();
  renderTestimonials();
  renderStats();
  initNavbar();
  initMobileMenu();
 
  // Slight delay to let DOM paint before observing
  requestAnimationFrame(() => {
    setTimeout(initScrollReveal, 50);
  });
});

/* ============================================================
   CHATBOT — AI-powered assistant using Claude API
   ============================================================ */
 
const CHATBOT = {
  isOpen:   false,
  history:  [],   // { role: 'user'|'assistant', content: string }
  thinking: false,
 
  SYSTEM_PROMPT: `You are the NLT Assistant — a friendly, knowledgeable AI assistant for Next Level Talks, the media brand and digital services company founded by Gugulethu Mngomezulu based in KwaZulu-Natal, South Africa.
 
Your role is to help visitors learn about:
1. Next Level Talks Podcast — covers technology, AI, entrepreneurship, career growth
2. ClipSpark AI (clipspark.co.za) — SaaS platform that generates viral TikTok scripts in under 30 seconds. Free plan: 5 scripts. Pro plan: 100 scripts/month at R199/mo via Paystack. Features: scroll-stopping hooks, full voiceover scripts, captions, hashtags, content calendar, saved library, templates.
3. Digital Growth Services — three offerings:
   - Put Me On The Map: Google Business Profile setup at R600 once-off
   - My Business Online: 4-page lead-gen website at R3,500 once-off + R600/month maintenance (Most Popular)
   - Always On Assistant: AI chatbot add-on at R2,000
4. Gugulethu Mngomezulu — Podcast Host, AI Builder, Website Developer, Digital Entrepreneur
 
IMPORTANT RULES:
- Keep responses SHORT and conversational — 1-3 sentences max unless a detailed question is asked
- Be warm, direct, and professional — like a smart friend who knows the business
- If someone wants to get in touch, work together, get a quote, or ask about pricing: tell them to fill in the contact form and use the phrase EXACTLY: "→ [Fill in the contact form](#contact)" as a call to action on its own line
- Do NOT make up prices, services, or facts beyond what is listed above
- Do NOT discuss competitors or unrelated topics
- Always respond in English`,
};
 
/* ---- Toggle chat open/close -------------------------------- */
window.toggleChat = function() {
  const win  = document.getElementById('chat-window');
  const open = document.getElementById('chat-icon-open');
  const close = document.getElementById('chat-icon-close');
  if (!win) return;
 
  CHATBOT.isOpen = !CHATBOT.isOpen;
 
  if (CHATBOT.isOpen) {
    win.style.opacity       = '1';
    win.style.transform     = 'scale(1) translateY(0)';
    win.style.pointerEvents = 'all';
    open.classList.add('hidden');
    close.classList.remove('hidden');
    // Greet on first open
    if (CHATBOT.history.length === 0) initChatGreeting();
    setTimeout(() => document.getElementById('chat-input')?.focus(), 200);
  } else {
    win.style.opacity       = '0';
    win.style.transform     = 'scale(0.95) translateY(8px)';
    win.style.pointerEvents = 'none';
    open.classList.remove('hidden');
    close.classList.add('hidden');
  }
};
 
document.getElementById('chat-toggle')?.addEventListener('click', toggleChat);
 
/* ---- Initial greeting ------------------------------------- */
function initChatGreeting() {
  appendBotMessage("Hey! 👋 I'm the NLT Assistant. I can help you with info about the podcast, **ClipSpark AI**, or our **digital services**. What can I help you with?");
  showQuickReplies([
    'Tell me about ClipSpark',
    'What services do you offer?',
    'About the podcast',
    'I want to get in touch',
  ]);
}
 
/* ---- Append messages --------------------------------------- */
function appendUserMessage(text) {
  const msgs = document.getElementById('chat-messages');
  if (!msgs) return;
  const div = document.createElement('div');
  div.className = 'flex justify-end';
  div.innerHTML = `
    <div class="max-w-[80%] px-3.5 py-2.5 rounded-2xl rounded-br-sm bg-crimson text-white text-sm leading-relaxed">
      ${escapeHtml(text)}
    </div>`;
  msgs.appendChild(div);
  scrollChatToBottom();
}
 
function appendBotMessage(text) {
  const msgs = document.getElementById('chat-messages');
  if (!msgs) return;
  const div = document.createElement('div');
  div.className = 'flex items-end gap-2';
 
  // Parse markdown-lite: **bold**, [text](url), →[text](url) as CTA
  const rendered = renderChatMarkdown(text);
 
  div.innerHTML = `
    <div class="w-6 h-6 rounded-full bg-crimson/15 border border-crimson/20 flex items-center justify-center flex-shrink-0 mb-0.5">
      <svg class="w-3 h-3 text-crimson" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
    </div>
    <div class="max-w-[85%] px-3.5 py-2.5 rounded-2xl rounded-bl-sm bg-surface border border-border text-soft-gray text-sm leading-relaxed">
      ${rendered}
    </div>`;
  msgs.appendChild(div);
  scrollChatToBottom();
}
 
function renderChatMarkdown(text) {
  return text
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    // CTA link with arrow → [text](url) — styled as crimson pill
    .replace(/→ \[(.+?)\]\((.+?)\)/g,
      '<a href="$2" class="inline-flex items-center gap-1.5 mt-1 px-3 py-1.5 rounded-lg bg-crimson/15 border border-crimson/30 text-crimson text-xs font-semibold hover:bg-crimson/25 transition-colors" onclick="if(\'$2\'.startsWith(\'#\')){toggleChat();}">' +
      '<svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>' +
      '$1</a>')
    // Regular links
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-crimson underline underline-offset-2 hover:text-accent-red transition-colors" target="_blank" rel="noopener">$1</a>')
    // Newlines
    .replace(/\n/g, '<br/>');
}
 
function scrollChatToBottom() {
  const msgs = document.getElementById('chat-messages');
  if (msgs) setTimeout(() => msgs.scrollTop = msgs.scrollHeight, 50);
}
 
/* ---- Quick reply chips ------------------------------------ */
function showQuickReplies(options) {
  const container = document.getElementById('chat-quick-replies');
  if (!container) return;
  container.innerHTML = options.map(opt => `
    <button onclick="quickReply('${escapeHtml(opt)}')"
            class="px-3 py-1.5 rounded-full text-xs font-medium border border-border bg-surface hover:border-crimson/40 hover:bg-crimson/5 text-soft-gray hover:text-white transition-all duration-150">
      ${escapeHtml(opt)}
    </button>
  `).join('');
}
 
function clearQuickReplies() {
  const container = document.getElementById('chat-quick-replies');
  if (container) container.innerHTML = '';
}
 
window.quickReply = function(text) {
  clearQuickReplies();
  processUserMessage(text);
};
 
/* ---- Typing indicator ------------------------------------- */
function showTyping()  { document.getElementById('chat-typing')?.classList.remove('hidden'); scrollChatToBottom(); }
function hideTyping()  { document.getElementById('chat-typing')?.classList.add('hidden'); }
 
/* ---- Send message ----------------------------------------- */
window.sendChatMessage = function() {
  const input = document.getElementById('chat-input');
  if (!input) return;
  const text = input.value.trim();
  if (!text || CHATBOT.thinking) return;
  input.value = '';
  autoresizeChatInput(input);
  clearQuickReplies();
  processUserMessage(text);
};
 
window.handleChatKey = function(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendChatMessage();
  }
};
 
window.autoresizeChatInput = function(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 96) + 'px';
};
 
/* ---- Core: process a user message ------------------------- */
async function processUserMessage(text) {
  if (CHATBOT.thinking) return;
 
  appendUserMessage(text);
  CHATBOT.history.push({ role: 'user', content: text });
  CHATBOT.thinking = true;
  showTyping();
 
  try {
    const reply = await callClaudeAPI(CHATBOT.history);
    hideTyping();
    appendBotMessage(reply);
    CHATBOT.history.push({ role: 'assistant', content: reply });
 
    // Suggest follow-ups based on response content
    suggestFollowUps(reply, text);
  } catch (err) {
    hideTyping();
    console.error('Chat API error:', err);
    appendBotMessage("I'm having a moment — please try again or **[fill in the contact form](#contact)** and Gugulethu will get back to you directly.");
  }
 
  CHATBOT.thinking = false;
}
 
/* ---- Call Claude API -------------------------------------- */
async function callClaudeAPI(history) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model:      'claude-haiku-4-5-20251001',
      max_tokens: 300,
      system:     CHATBOT.SYSTEM_PROMPT,
      messages:   history.slice(-10), // keep last 10 turns for context
    }),
  });
 
  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err?.error?.message || response.statusText);
  }
 
  const data = await response.json();
  return data.content?.[0]?.text || "I didn't catch that — could you rephrase?";
}
 
/* ---- Smart follow-up suggestions -------------------------- */
function suggestFollowUps(reply, userMsg) {
  const r = reply.toLowerCase();
  const u = userMsg.toLowerCase();
 
  if (r.includes('clipspark') || u.includes('clipspark')) {
    showQuickReplies(['How much does it cost?', 'How do I get started?', 'I want to get in touch']);
  } else if (r.includes('service') || r.includes('website') || u.includes('service')) {
    showQuickReplies(['What does a website cost?', 'Tell me about the AI chatbot', 'I want a quote']);
  } else if (r.includes('podcast') || u.includes('podcast')) {
    showQuickReplies(['Where can I listen?', 'What topics do you cover?', 'I want to collaborate']);
  } else if (r.includes('contact') || r.includes('form') || u.includes('contact') || u.includes('touch')) {
    showQuickReplies(['Tell me about ClipSpark', 'What services do you offer?']);
  } else {
    showQuickReplies(['Tell me about ClipSpark', 'What services do you offer?', 'I want to get in touch']);
  }
}
 
/* ---- Init chatbot ----------------------------------------- */
function initChatbot() {
  // ESC key closes chat
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && CHATBOT.isOpen) toggleChat();
  });
}
  