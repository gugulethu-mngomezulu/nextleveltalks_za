# Next Level Talks  Personal Brand Website

A premium dark-themed personal brand website for **Gugulethu Mngomezulu** - Podcast Host, AI Engineer, and Digital Entrepreneur based in KwaZulu-Natal, South Africa.

Live at: [nextleveltalks.co.za](https://nextleveltalks.co.za) 

---

## What's Inside

The site covers three business pillars:

- **Next Level Talks Podcast** — Technology, AI, entrepreneurship and career growth
- **ClipSpark AI** — SaaS platform that generates viral TikTok scripts in under 30 seconds
- **Digital Growth Services** — Website development and Google Business Profile setup for local businesses

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | Semantic HTML5 |
| Styling | Tailwind CSS (CDN) + custom CSS |
| Logic | Vanilla JavaScript (ES2020+) |
| Database | Supabase (testimonials + newsletter subscribers) |
| Email | EmailJS (contact form) |
| Chatbot | Claude Haiku via Netlify Function |
| Hosting | Netlify |
| CI/CD | GitHub → Netlify auto-deploy |

---

## Project Structure

```
nextleveltalks_za/
├── index.html                  # Main HTML — all sections
├── app.js                      # All JS — config, rendering, behaviour
├── style.css                   # Custom CSS — animations, components
├── clipspark.png               # ClipSpark product screenshot
├── pic.jpg                     # Founder photo
├── favicon.jpg                 # Browser tab icon
├── netlify/
│   └── functions/
│       └── chat.js             # Serverless proxy for Claude API
└── README.md
```

---

## Configuration

All site content is configured at the top of `app.js`. You never need to touch the rendering code.

### URLs — `CONFIG` object

```js
const CONFIG = {
  SPOTIFY_PROFILE_URL:  'https://open.spotify.com/show/...',
  YOUTUBE_CHANNEL_URL:  'https://www.youtube.com/channel/...',
  CLIPSPARK_URL:        'https://clipspark.co.za',
  LINKEDIN_URL:         'https://www.linkedin.com/in/...',
  FACEBOOK_URL:         'https://www.facebook.com/...',
  CONTACT_EMAIL:        'your@email.com',
  EMAILJS_SERVICE_ID:   'service_xxxxxxx',
  EMAILJS_TEMPLATE_ID:  'template_xxxxxxx',
};
```

### Episodes — `EPISODES` array

```js
const EPISODES = [
  {
    youtubeUrl: 'https://youtu.be/VIDEO_ID',
    thumbnail:  'https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg',
    title:      'Episode Title',
    description: 'Short description.',
  },
  // ... up to 10 episodes
];
```

**Thumbnail tip:** Take the video ID from any YouTube URL and plug it into:
`https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg`

### Stats — `STATS_CONFIG` object

```js
const STATS_CONFIG = {
  episodes:       '83',
  views:          '31529',
  subscribers:    '139',
  subscriberGoal: 500,    // 2026 target — drives the progress bar
};
```

Update these manually from YouTube Studio whenever you check your numbers. The animated counter and goal bar update automatically on page load.

---

## Supabase Setup

The site uses Supabase for two features: testimonials and newsletter subscribers.

### Tables required

Run in Supabase SQL Editor:

```sql
-- Testimonials
create table testimonials (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  role text,
  quote text not null,
  rating integer default 5,
  initials text,
  approved boolean default false,
  created_at timestamptz default now()
);

alter table testimonials enable row level security;
create policy "Anyone can submit" on testimonials for insert with check (true);
create policy "Show approved only" on testimonials for select using (approved = true);

-- Newsletter subscribers
create table subscribers (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null unique,
  created_at timestamptz default now()
);

alter table subscribers enable row level security;
create policy "Anyone can subscribe" on subscribers for insert with check (true);
```

### Approving testimonials

Supabase dashboard → **Table Editor** → `testimonials` → find the row → set `approved` to `true`.

### Viewing subscribers

Supabase dashboard → **Table Editor** → `subscribers`. Export as CSV anytime.

---

## EmailJS Setup

Used for the contact form. Free tier allows 200 emails/month.

1. Sign up at [emailjs.com](https://emailjs.com)
2. Add a Gmail service → copy **Service ID**
3. Create a template using these variables:
   ```
   From: {{from_name}} ({{from_email}})
   Business: {{business_name}}
   Phone: {{phone}}
   Subject: {{subject}}

   {{message}}
   ```
4. Copy **Template ID** and **Public Key**
5. Add to `app.js` CONFIG and `index.html` head

---

## Netlify Function — Claude Chatbot

The AI chatbot proxies requests through a Netlify serverless function so the API key never reaches the browser.

### Environment variable required

In Netlify dashboard → **Site configuration** → **Environment variables**:

```
CLAUDE_API_KEY = sk-ant-api03-...
```

### Function location

```
netlify/functions/chat.js
```

The chatbot uses **Claude Haiku** and is trained on Next Level Talks content via a system prompt in `app.js`.

---

## Deployment

### Netlify (production)

1. Push to GitHub
2. Netlify → **Add new site** → **Import from Git**
3. Select repo, set publish directory to `.`
4. Add `CLAUDE_API_KEY` environment variable
5. Deploy

Every `git push` to `main` triggers an automatic redeploy.

### Local development

No build step needed. Just open `index.html` in a browser or use VS Code Live Server.

```bash
# With Python
python -m http.server 3000

# With Node
npx serve .
```

---

## Features

- Sticky navbar with scroll-state blur effect
- Animated scroll reveal on all sections
- Hero with ambient lettermark background and red orb lighting
- Featured episodes grid — populated from `EPISODES` array
- Spotify integration
- ClipSpark AI showcase with product screenshot and pricing card
- Digital services cards with badge system
- Founder section with circular photo frame
- Animated stats counters with 2026 subscriber goal progress bar
- Testimonials slider with arrow navigation, dot indicators, and Supabase submit form
- Newsletter signup → saves to Supabase
- Contact form → sends via EmailJS
- AI chatbot powered by Claude Haiku with quick reply chips
- Mobile-responsive across all sections
- SEO meta tags

---

## Sections

| Section | ID |
|---|---|
| Hero | `#hero` |
| Podcast Episodes | `#podcast` |
| Spotify | `#spotify` |
| ClipSpark AI | `#clipspark` |
| Services | `#services` |
| About | `#about` |
| Social Proof + Testimonials | `#social-proof` |
| Newsletter | `#newsletter` |
| Contact | `#contact` |

---

## License

Private project — all rights reserved.  
© 2026 Gugulethu Mngomezulu / Next Level Talks
